import { aboutSource, sem6Source, sem7Source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';
 
export const { staticGET:GET } = createSearchAPI('advanced', {
  indexes: [
    ...aboutSource.getPages(),
    ...sem6Source.getPages(),
    ...sem7Source.getPages()
  ].map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData
  }))
});

export const revalidate = false;