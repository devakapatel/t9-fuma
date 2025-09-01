import defaultMdxComponents from "fumadocs-ui/mdx";
import { Mermaid } from "@/src/components/mdx/mermaid";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    ...components,
  };
}
