import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';

export async function GET(context: any) {
  const blogEntries = await getCollection('blog', ({ data }) => !data.draft);

  const sortedEntries = blogEntries.sort(
    (a, b) => new Date(b.data.datePublished).getTime() - new Date(a.data.datePublished).getTime()
  );

  return rss({
    title: siteConfig.name,
    description: siteConfig.tagline.fr,
    site: context.site || siteConfig.url,
    items: sortedEntries.map((post) => {
      const prefix = post.data.locale === 'fr' ? '/blog/' : `/${post.data.locale}/blog/`;
      return {
        title: post.data.title,
        pubDate: new Date(post.data.datePublished),
        description: post.data.excerpt,
        link: `${prefix}${post.data.slug}/`,
      };
    }),
    customData: `<language>fr-fr</language>`,
  });
}
