import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/src/app/layout.config";
import { sem1Source } from "@/src/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={sem1Source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
