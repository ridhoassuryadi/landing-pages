import { defineCollection, z } from "astro:content";
 const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    education: z.array(z.string()),
    experience: z.array(z.string()),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const jobs = defineCollection({
  schema: z.object({
    salary: z.string(),
    company: z.string(),
    type: z.string(),
    location: z.string(),
    position: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const integrations = defineCollection({
  schema: z.object({
    integration: z.string(),
    description: z.string(),
    email: z.string(),
    permissions: z.array(z.string()),
    details: z.array(
      z.object({
        title: z.string(),
        value: z.string(),
        url: z.optional(z.string()),
      })
    ),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const customers = defineCollection({
  schema: z.object({
    customer: z.string(),
    feedback: z.string(),
    about: z.string(),
    details: z.record(z.string()),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const helpcenter = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    icon: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const changelog = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
export const collections = {
  team: team,
  jobs: jobs,
  integrations: integrations,
  customers: customers,
  helpcenter: helpcenter,
  changelog: changelog,
  infopages: infopages,
  posts: postsCollection,
};
