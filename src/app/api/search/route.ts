import {
  aboutSource,
  sem1Source,
  sem3Source,
  sem5Source,
  sem6Source,
  sem7Source,
} from "@/src/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";

export const { GET } = createSearchAPI("advanced", {
  indexes: [
    ...aboutSource.getPages(),
    ...sem1Source.getPages(),
    ...sem3Source.getPages(),
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
