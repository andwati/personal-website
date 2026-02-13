<script setup lang="ts">
useSeoMeta({
	title: "About — Ian Andwati",
	description:
		"Learn more about Ian Andwati — software engineer passionate about building great products.",
});

const skills = [
	{ name: "TypeScript", icon: "i-simple-icons-typescript" },
	{ name: "Vue.js", icon: "i-simple-icons-vuedotjs" },
	{ name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
	{ name: "Node.js", icon: "i-simple-icons-nodedotjs" },
	{ name: "Go", icon: "i-simple-icons-go" },
	{ name: "Python", icon: "i-simple-icons-python" },
	{ name: "Docker", icon: "i-simple-icons-docker" },
	{ name: "Git", icon: "i-simple-icons-git" },
	{ name: "PostgreSQL", icon: "i-simple-icons-postgresql" },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50 dark:from-primary-950/20 dark:via-(--ui-bg) dark:to-primary-900/10" />

      <UContainer class="relative py-16 lg:py-24">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-3xl">
          <img
            src="https://avatars.githubusercontent.com/u/andwati"
            alt="Ian Andwati"
            class="rounded-full size-32 ring-4 ring-primary-200 dark:ring-primary-800 shadow-lg flex-shrink-0"
          />
          <div class="space-y-4 text-center sm:text-left">
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-(--ui-text-muted)">About</p>
            <h1 class="text-3xl sm:text-4xl font-bold">Ian Andwati</h1>
            <p class="text-lg text-(--ui-text-muted) leading-relaxed">
              I'm a software engineer who loves building tools and products that make a difference.
              My interests span full-stack development, open source, and exploring new technologies.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- What I Do -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="max-w-3xl mx-auto space-y-12">
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Focus</p>
            <h2 class="text-2xl font-bold mb-4">What I Do</h2>
            <p class="text-(--ui-text-muted) leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies.
              Whether it's crafting a seamless user experience on the frontend or architecting
              robust backend systems, I enjoy the entire spectrum of software development.
            </p>
          </div>

          <USeparator />

          <!-- Skills -->
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Skills</p>
            <h2 class="text-2xl font-bold mb-6">Technologies</h2>
            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="flex flex-col items-center gap-2 p-4 rounded-xl bg-(--ui-bg-elevated) border border-(--ui-border) hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <UIcon :name="skill.icon" class="size-8 text-primary-600 dark:text-primary-400" />
                <span class="text-xs font-medium text-(--ui-text-muted)">{{ skill.name }}</span>
              </div>
            </div>
          </div>

          <USeparator />

          <!-- Contact -->
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Connect</p>
            <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
            <p class="text-(--ui-text-muted) leading-relaxed mb-6">
              Feel free to reach out through any of the links below. Always happy to
              connect and discuss interesting projects or ideas.
            </p>
            <div class="flex flex-wrap gap-3">
              <UButton
                label="GitHub"
                to="https://github.com/andwati"
                target="_blank"
                icon="i-simple-icons-github"
                color="neutral"
                variant="outline"
              />
              <UButton
                label="X / Twitter"
                to="https://x.com"
                target="_blank"
                icon="i-simple-icons-x"
                color="neutral"
                variant="outline"
              />
              <UButton
                label="Email me"
                to="mailto:hello@ianwati.dev"
                icon="i-lucide-mail"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
