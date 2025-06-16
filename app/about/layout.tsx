import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { aboutSource } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={aboutSource.pageTree} {...baseOptions} nav={{ ...baseOptions.nav, mode: 'top' }}>
      {children}
    </DocsLayout>
  );
}
