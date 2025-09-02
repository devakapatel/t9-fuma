// lib/api.ts
export async function getHello() {
  const res = await fetch("https://remoteserver.liveblog365.com/hello.php", {
    method: "GET",
    credentials: "omit", // no cookies needed
  });

  if (!res.ok) throw new Error("Forbidden");
  return res.json() as Promise<{ message: string }>;
}
