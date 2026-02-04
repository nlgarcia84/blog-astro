import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(),
      // Relación
      author: z.string(),

      // Relación
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
};
