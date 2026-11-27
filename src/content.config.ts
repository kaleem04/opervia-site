import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every markdown file in src/content/blog becomes a post.
// Set `draft: true` in a post's front matter to keep it off the live site.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
