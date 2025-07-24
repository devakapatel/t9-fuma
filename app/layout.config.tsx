import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/devakapatel/t9-fuma",
  nav: {
    title: <>T9</>,
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      type: "menu",
      text: "Semesters",
      items: [
        {
          text: "Sem 1",
          url: "/sem-1",
        },
        {
          text: "Sem 2",
          url: "/sem-2",
        },
        {
          text: "Sem 3",
          url: "/sem-3",
        },
        {
          text: "Sem 4",
          url: "/sem-4",
        },
        {
          text: "Sem 5",
          url: "/sem-5",
        },
        {
          text: "Sem 6",
          url: "/sem-6",
        },
        {
          text: "Sem 7",
          url: "/sem-7",
        },
        {
          text: "Sem 8",
          url: "/sem-8",
        },
      ],
    },
    {
      text: "About",
      url: "/about",
      active: "url",
    },
  ],
};
