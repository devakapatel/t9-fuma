import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/src/app/layout.config";
import { sem6Source } from "@/src/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={sem6Source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
