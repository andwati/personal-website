// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/content"],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2024-04-03",
	sourcemap: {
		server: false,
		client: false,
	},
});
