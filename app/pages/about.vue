<script setup lang="ts">
useSeoMeta({
	title: "About — Ian Andwati",
	description:
		"Learn more about Ian Andwati — software engineer interested in offensive security and reverse engineering.",
});

const skills = [
	{ name: "C", icon: "i-simple-icons-c" },
	{ name: "Rust", icon: "i-simple-icons-rust" },
	{ name: "Go", icon: "i-simple-icons-go" },
	{ name: "Python", icon: "i-simple-icons-python" },
	{ name: "TypeScript", icon: "i-simple-icons-typescript" },
	{ name: "Vue.js", icon: "i-simple-icons-vuedotjs" },
	{ name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
	{ name: "Docker", icon: "i-simple-icons-docker" },
	{ name: "Git", icon: "i-simple-icons-git" },
	{ name: "Linux", icon: "i-simple-icons-linux" },
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
            <p class="text-sm font-mono text-primary-600 dark:text-primary-400">0xmockinspectre · offending binaries</p>
            <p class="text-lg text-(--ui-text-muted) leading-relaxed">
              I spend my free time working on hobby projects and sometimes I write about my experiences.
              In particular, I enjoy learning about offensive security and reverse engineering.
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
              I'm interested in low-level systems programming, security research, and understanding how things
              work under the hood. I build CPU emulators, CLI tools, bots, and web apps as hobby projects.
              I also participate in CTF competitions and write about what I learn.
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

          <!-- Connect -->
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Connect</p>
            <h2 class="text-2xl font-bold mb-4">Find Me</h2>
            <p class="text-(--ui-text-muted) leading-relaxed mb-6">
              You can find me on the following platforms.
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
                to="https://x.com/andwati_"
                target="_blank"
                icon="i-simple-icons-x"
                color="neutral"
                variant="outline"
              />
              <UButton
                label="LinkedIn"
                to="https://linkedin.com/in/andwati"
                target="_blank"
                icon="i-simple-icons-linkedin"
                color="neutral"
                variant="outline"
              />
              <UButton
                label="Stack Overflow"
                to="https://stackoverflow.com/users/12246264/ian-andwati"
                target="_blank"
                icon="i-simple-icons-stackoverflow"
                color="neutral"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
