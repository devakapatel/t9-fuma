/* t9-fuma/src/lib/patch-localstorage.ts
 *
 * Purpose:
 * In some Node.js environments (notably when an experimental/partial LocalStorage
 * is injected via runtime flags like --localstorage-file), `globalThis.localStorage`
 * may exist on the server but not implement the full Web Storage API. Next.js dev
 * overlay checks for `typeof localStorage !== 'undefined'` and then calls
 * `localStorage.getItem(...)`. If the injected localStorage is bogus, this throws:
 *   TypeError: localStorage.getItem is not a function
 *
 * This patch neutralizes or safely shims `globalThis.localStorage` during development
 * on the server so that code expecting a browser-like Storage never crashes the dev server.
 *
 * How to use:
 * Import this module as early as possible on the server (e.g. in `app/layout.tsx`):
 *   import "@/lib/patch-localstorage";
 * No exports are required to use the side-effect, but a function is exported for manual use.
 */

type StorageLike = {
  readonly length: number;
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
};

function createMemoryStorage(): StorageLike {
  const map = new Map<string, string>();

  const storage: StorageLike = {
    get length() {
      return map.size;
    },
    clear() {
      map.clear();
    },
    getItem(key: string) {
      return map.has(key) ? map.get(key)! : null;
    },
    key(index: number) {
      if (index < 0 || index >= map.size) return null;
      let i = 0;
      for (const k of map.keys()) {
        if (i++ === index) return k;
      }
      return null;
    },
    removeItem(key: string) {
      map.delete(key);
    },
    setItem(key: string, value: string) {
      map.set(key, String(value));
    },
  };

  return storage;
}

function isStorageLike(value: unknown): value is StorageLike {
  const v = value as any;
  return (
    v &&
    typeof v === "object" &&
    typeof v.getItem === "function" &&
    typeof v.setItem === "function" &&
    typeof v.removeItem === "function" &&
    typeof v.clear === "function" &&
    typeof v.key === "function" &&
    typeof v.length === "number"
  );
}

/**
 * Attempt to neutralize or safely replace a bogus globalThis.localStorage on the server.
 * Returns true if a patch was applied, false otherwise.
 */
export function patchLocalStorage(): boolean {
  // Only patch on the server. In the browser, the real localStorage should be used.
  if (typeof window !== "undefined") return false;

  // Primarily needed in development (dev overlay), but harmless if left on in other modes.
  // Keep restricted to non-production for least surprise.
  if (process.env.NODE_ENV === "production") return false;

  const g: any = globalThis as any;

  // If it's actually not defined, nothing to do.
  if (typeof g.localStorage === "undefined") return false;

  // If it's already a valid Storage-like object, leave it alone.
  if (isStorageLike(g.localStorage)) return false;

  // Prefer to make it undefined so code with `typeof localStorage !== 'undefined'`
  // behaves as if on the server without storage.
  try {
    const desc = Object.getOwnPropertyDescriptor(g, "localStorage");
    if (!desc || desc.configurable || desc.writable) {
      Object.defineProperty(g, "localStorage", {
        value: undefined,
        configurable: true,
        writable: true,
        enumerable: false,
      });
      return true;
    }
  } catch {
    // fallthrough to shim attempts
  }

  // If we cannot undefine it, replace with a safe in-memory shim.
  const shim = createMemoryStorage();

  // Try redefining the property.
  try {
    Object.defineProperty(g, "localStorage", {
      value: shim,
      configurable: true,
      writable: true,
      enumerable: false,
    });
    return true;
  } catch {
    // Try direct assignment as a fallback.
    try {
      g.localStorage = shim;
      return true;
    } catch {
      // last resort: patch methods on the existing object
      try {
        if (g.localStorage && typeof g.localStorage === "object") {
          g.localStorage.getItem = shim.getItem.bind(shim);
          g.localStorage.setItem = shim.setItem.bind(shim);
          g.localStorage.removeItem = shim.removeItem.bind(shim);
          g.localStorage.clear = shim.clear.bind(shim);
          g.localStorage.key = shim.key.bind(shim);
          // length as a getter to mirror the spec shape
          try {
            Object.defineProperty(g.localStorage, "length", {
              get: () => shim.length,
            });
          } catch {
            // ignore if we can't redefine length; methods are the main fix
          }
          return true;
        }
      } catch {
        // If even this fails, we give up. The environment is too locked down.
      }
    }
  }

  return false;
}

// Auto-apply on import for convenience (server-only, non-production).
(() => {
  try {
    patchLocalStorage();
  } catch {
    // Never let this throw — it's a best-effort patch.
  }
})();
