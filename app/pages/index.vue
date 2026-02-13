<script setup lang="ts">
const { data: recentPosts } = await useAsyncData("recent-posts", () =>
	queryCollection("blog").order("date", "DESC").limit(3).all(),
);

useSeoMeta({
	title: "Ian Andwati — Software Engineer",
	description:
		"Software engineer interested in offensive security, reverse engineering, and building hobby projects.",
});

const codeSnippet = `const engineer = {
  name: 'Ian Andwati',
  handle: '0xmockinspectre',
  interests: [
    'Offensive Security',
    'Reverse Engineering',
    'Systems Programming'
  ],
  languages: [
    'C', 'Rust', 'Go',
    'Python', 'TypeScript'
  ],
};`;

const projects = [
	{
		name: "unsplash-bot",
		description: "Telegram bot to download images from Unsplash.",
		icon: "i-lucide-image",
		lang: "Python",
		stars: 8,
		url: "https://github.com/andwati/unsplash-bot",
	},
	{
		name: "mos-6502",
		description: "MOS 6502 CPU emulator — 8 bit lives!",
		icon: "i-lucide-cpu",
		lang: "C",
		stars: 4,
		url: "https://github.com/andwati/mos-6502",
	},
	{
		name: "url-shortener",
		description: "URL shortener service built in Go.",
		icon: "i-lucide-link",
		lang: "Go",
		stars: 1,
		url: "https://github.com/andwati/url-shortener",
	},
	{
		name: "ratatui-json-editor",
		description: "Terminal JSON editor built with Ratatui.",
		icon: "i-lucide-file-json",
		lang: "Rust",
		stars: 1,
		url: "https://github.com/andwati/ratatui-json-editor",
	},
	{
		name: "store-api",
		description: "Store inventory REST API.",
		icon: "i-lucide-database",
		lang: "Python",
		stars: 1,
		url: "https://github.com/andwati/store-api",
	},
	{
		name: "andwati.xyz",
		description: "This personal site, rebuilt with Nuxt.",
		icon: "i-lucide-globe",
		lang: "Vue",
		stars: 0,
		url: "https://github.com/andwati/andwati.xyz",
	},
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50 dark:from-primary-950/20 dark:via-(--ui-bg) dark:to-primary-900/10" />

      <UContainer class="relative py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Text -->
          <div class="space-y-6">
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-(--ui-text-muted)">
              0xmockinspectre
            </p>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span class="text-primary-600 dark:text-primary-400">Ian Andwati</span>
            </h1>

            <p class="text-lg sm:text-xl text-(--ui-text-muted) leading-relaxed max-w-xl">
              I spend my free time working on hobby projects and sometimes I write about my experiences.
              I enjoy learning about offensive security and reverse engineering.
            </p>

            <div class="flex flex-wrap gap-3 pt-2">
              <UButton
                label="Read the Blog"
                to="/blog"
                icon="i-lucide-book-open"
                size="xl"
              />
              <UButton
                label="Get in Touch"
                to="#contact"
                color="neutral"
                variant="outline"
                icon="i-lucide-mail"
                size="xl"
              />
            </div>

            <div class="flex items-center gap-4 pt-2 text-sm text-(--ui-text-muted)">
              <span class="flex items-center gap-1.5">
                <UIcon name="i-lucide-map-pin" class="size-4" />
                UTC +3
              </span>
              <UButton
                to="https://x.com/andwati_"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                icon="i-simple-icons-x"
                label="@andwati_"
                class="p-0"
              />
            </div>
          </div>

          <!-- Right: Code Editor -->
          <div class="relative hidden lg:block">
            <!-- Floating stat cards -->
            <div class="absolute -top-4 -right-2 z-10">
              <div class="bg-primary-800 text-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <UIcon name="i-lucide-shield" class="size-5 text-primary-300" />
                <div>
                  <p class="font-bold text-sm">Security</p>
                  <p class="text-xs text-primary-200">Offensive & RE</p>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-2 -right-4 z-10">
              <div class="bg-primary-700 text-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <UIcon name="i-lucide-terminal" class="size-5 text-primary-300" />
                <div>
                  <p class="font-bold text-sm">Systems</p>
                  <p class="text-xs text-primary-200">Low-level hacking</p>
                </div>
              </div>
            </div>

            <!-- Code window -->
            <div class="bg-primary-950 dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden ring ring-primary-800/20">
              <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div class="flex gap-1.5">
                  <span class="size-3 rounded-full bg-red-500" />
                  <span class="size-3 rounded-full bg-yellow-500" />
                  <span class="size-3 rounded-full bg-green-500" />
                </div>
                <span class="text-xs text-white/40 ml-2">whoami.ts</span>
              </div>
              <pre class="p-5 text-sm font-mono leading-relaxed overflow-x-auto"><code class="text-green-400">{{ codeSnippet }}</code></pre>
              <div class="flex items-center justify-between px-4 py-2 border-t border-white/10 text-xs text-white/40">
                <span class="flex items-center gap-1.5">
                  <span class="size-2 rounded-full bg-green-500" />
                  studying the blade
                </span>
                <span>offending binaries</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 lg:py-24">
      <UContainer>
        <div class="text-center mb-12">
          <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">About</p>
          <h2 class="text-3xl sm:text-4xl font-bold">What I Do</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard>
            <div class="space-y-3">
              <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <UIcon name="i-lucide-shield-alert" class="size-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-lg">Offensive Security</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">Exploring vulnerabilities, CTF challenges, and security research. Learning to think like an attacker to build better defenses.</p>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-3">
              <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <UIcon name="i-lucide-binary" class="size-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-lg">Reverse Engineering</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">Taking binaries apart to understand how things work under the hood. From CPU emulators to malware analysis.</p>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-3">
              <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <UIcon name="i-lucide-code-2" class="size-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-lg">Systems Programming</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">Building things in C, Rust, and Go. CPU emulators, CLI tools, and low-level projects that make the machine do what you want.</p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 lg:py-24 bg-(--ui-bg-elevated)">
      <UContainer>
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Projects</p>
            <h2 class="text-3xl sm:text-4xl font-bold">Things I've Built</h2>
            <p class="mt-2 text-(--ui-text-muted)">Hobby projects, experiments, and tools.</p>
          </div>
          <UButton
            label="GitHub"
            to="https://github.com/andwati"
            target="_blank"
            icon="i-simple-icons-github"
            variant="ghost"
            trailing-icon="i-lucide-arrow-up-right"
            class="hidden sm:inline-flex"
          />
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard v-for="project in projects" :key="project.name">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <UIcon :name="project.icon" class="size-5 text-primary-600 dark:text-primary-400" />
                </div>
                <UButton
                  icon="i-simple-icons-github"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  :to="project.url"
                  target="_blank"
                  aria-label="View source"
                />
              </div>
              <h3 class="font-semibold text-lg">{{ project.name }}</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">{{ project.description }}</p>
              <div class="flex items-center gap-3 pt-1">
                <UBadge :label="project.lang" variant="subtle" size="sm" />
                <span v-if="project.stars" class="text-xs text-(--ui-text-muted) flex items-center gap-1">
                  <UIcon name="i-lucide-star" class="size-3" />
                  {{ project.stars }}
                </span>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Recent Blog Posts Section -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Blog</p>
            <h2 class="text-3xl sm:text-4xl font-bold">Latest Posts</h2>
            <p class="mt-2 text-(--ui-text-muted)">CTF writeups, security research, and things I learn along the way.</p>
          </div>
          <UButton
            label="View All"
            to="/blog"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
            class="hidden sm:inline-flex"
          />
        </div>

        <UBlogPosts v-if="recentPosts?.length">
          <UBlogPost
            v-for="post in recentPosts"
            :key="post.path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :image="post.image"
            :badge="post.badge"
            :to="post.path"
          />
        </UBlogPosts>

        <div v-else class="text-center py-12">
          <p class="text-(--ui-text-muted)">No blog posts yet. Stay tuned!</p>
        </div>

        <div class="mt-8 text-center sm:hidden">
          <UButton label="View All Posts" to="/blog" variant="subtle" trailing-icon="i-lucide-arrow-right" />
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 lg:py-24 bg-(--ui-bg-elevated)">
      <UContainer>
        <div class="max-w-2xl mx-auto text-center space-y-6">
          <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400">Contact</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p class="text-lg text-(--ui-text-muted)">
            Have something interesting to share? Feel free to reach out.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-4">
            <UButton
              label="GitHub"
              to="https://github.com/andwati"
              target="_blank"
              icon="i-simple-icons-github"
              size="xl"
            />
            <UButton
              label="X / Twitter"
              to="https://x.com/andwati_"
              target="_blank"
              icon="i-simple-icons-x"
              color="neutral"
              variant="outline"
              size="xl"
            />
            <UButton
              label="LinkedIn"
              to="https://linkedin.com/in/andwati"
              target="_blank"
              icon="i-simple-icons-linkedin"
              color="neutral"
              variant="outline"
              size="xl"
            />
            <UButton
              label="Stack Overflow"
              to="https://stackoverflow.com/users/12246264/ian-andwati"
              target="_blank"
              icon="i-simple-icons-stackoverflow"
              color="neutral"
              variant="outline"
              size="xl"
            />
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
