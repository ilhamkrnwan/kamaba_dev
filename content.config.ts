import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    portofolio: defineCollection({
      type: 'page',
      source: 'portofolio/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        image: z.string().optional(),
        slug: z.string().optional(),
      })
    })
  }
})

