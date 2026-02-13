---
title: "Building a Blog with Nuxt Content"
description: "Learn how to use Nuxt Content v3 to create a powerful, file-based blog with markdown support."
date: "2025-02-01"
image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
badge: "Tutorial"
---

# Building a Blog with Nuxt Content

Nuxt Content v3 is a powerful module that turns your Nuxt application into a git-based CMS. In this post, we'll explore how to set up a blog using Nuxt Content.

## Why Nuxt Content?

Nuxt Content provides several advantages for content management:

- **Markdown support** — Write your content in Markdown with full MDC syntax support
- **Collections** — Organize your content into typed collections with schema validation
- **Querying** — Powerful query API to filter, sort, and paginate your content
- **Vue components in Markdown** — Embed Vue components directly in your markdown files

## Setting Up Collections

Content collections are defined in your `content.config.ts` file:

```typescript
import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        date: z.string(),
        image: z.string().optional(),
        badge: z.string().optional(),
      }),
    }),
  },
});
```

## Querying Content

You can query your blog posts using the `queryCollection` composable:

```typescript
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog").order("date", "DESC").all()
);
```

## Conclusion

Nuxt Content makes it incredibly easy to build a content-driven website. With collections, schema validation, and the powerful query API, you have all the tools you need to create a great blog experience.
