import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "**",
		}),
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
