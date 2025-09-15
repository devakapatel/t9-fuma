import {
  aboutSource,
  sem1Source,
  sem5Source,
  sem6Source,
  sem7Source,
} from "@/src/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";

export const revalidate = false;
export const { staticGET: GET } = createSearchAPI("advanced", {
  indexes: [
    ...aboutSource.getPages(),
    ...sem1Source.getPages(),
    ...sem5Source.getPages(),
    ...sem6Source.getPages(),
    ...sem7Source.getPages(),
  ].map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
  })),
});
