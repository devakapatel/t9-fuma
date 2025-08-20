import { about, sem5, sem6, sem7 } from "@/.source";
import { loader } from "fumadocs-core/source";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const aboutSource = loader({
  // it assigns a URL to your pages
  baseUrl: "/about",
  source: about.toFumadocsSource(),
});

export const sem5Source = loader({
  // it assigns a URL to your pages
  baseUrl: "/sem-5",
  source: sem5.toFumadocsSource(),
});

export const sem6Source = loader({
  // it assigns a URL to your pages
  baseUrl: "/sem-6",
  source: sem6.toFumadocsSource(),
});

export const sem7Source = loader({
  // it assigns a URL to your pages
  baseUrl: "/sem-7",
  source: sem7.toFumadocsSource(),
});
