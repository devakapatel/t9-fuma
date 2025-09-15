import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/src/app/layout.config";
import { sem3Source } from "@/src/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={sem3Source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
