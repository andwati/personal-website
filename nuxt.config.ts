// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxt/content", "nuxt-studio"],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2024-04-03",
	sourcemap: {
		server: false,
		client: false,
	},
	nitro: {
		preset: "cloudflare",
	},
	studio: {
		repository: {
			owner: "andwati",
			repo: "personal-website",
			branch: "main",
			provider: "github",
		},
		auth: {
			github: {
				clientId: process.env.STUDIO_GITHUB_CLIENT_ID,
				clientSecret: process.env.STUDIO_GITHUB_CLIENT_SECRET,
			},
		},
	},
});