import { defineCollection, z } from "astro:content";
const store = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.string(),
    price: z.string(),
    preview: z.string(),
    checkout: z.string(),
    license: z.string(),
    highlights: z.array(z.string()),
    description: z.string(),
      thumbnail: z.object({
        url: z.string(),
        alt: z.string()
      }),
   images: z.array(z.object({
      url: z.string(),
      alt: z.string().optional(),
    })).optional(),
    components: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
});
const helpcenter = defineCollection({
  schema: z.object({
    title: z.string(),
    intro: z.string(),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const posts = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
 });
export const collections = {
  store: store,
  helpcenter: helpcenter,
  infopages: infopages,
  posts: posts,
};