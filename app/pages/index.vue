<script setup lang="ts">
const { data: recentPosts } = await useAsyncData("recent-posts", () =>
	queryCollection("blog").order("date", "DESC").limit(3).all(),
);

useSeoMeta({
	title: "Ian Andwati — Software Engineer",
	description:
		"Software engineer passionate about building great products. I write about development, technology, and the things I learn along the way.",
});

const codeSnippet = `const softwareEngineer = {
  name: 'Ian Andwati',
  role: 'Software Engineer',
  skills: [
    'TypeScript', 'Vue.js', 'Nuxt',
    'Node.js', 'Go', 'Python'
  ],
  getProjects: async () => {
    return await fetchProjects();
  },
};`;
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
              Software Engineer
            </p>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span class="text-primary-600 dark:text-primary-400">Ian Andwati</span>
            </h1>

            <p class="text-lg sm:text-xl text-(--ui-text-muted) leading-relaxed max-w-xl">
              I build modern web applications and love crafting software that makes a real impact.
              Passionate about clean code, open source, and continuous learning.
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
                Nairobi, Kenya
              </span>
              <span class="flex items-center gap-1.5">
                <UIcon name="i-lucide-mail" class="size-4" />
                hello@ianwati.dev
              </span>
            </div>
          </div>

          <!-- Right: Code Editor -->
          <div class="relative hidden lg:block">
            <!-- Floating stat cards -->
            <div class="absolute -top-4 -right-2 z-10">
              <div class="bg-primary-800 text-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <UIcon name="i-lucide-git-commit-horizontal" class="size-5 text-primary-300" />
                <div>
                  <p class="font-bold text-sm">Open Source</p>
                  <p class="text-xs text-primary-200">Active Contributor</p>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-2 -right-4 z-10">
              <div class="bg-primary-700 text-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <UIcon name="i-lucide-code-2" class="size-5 text-primary-300" />
                <div>
                  <p class="font-bold text-sm">Full Stack</p>
                  <p class="text-xs text-primary-200">Frontend & Backend</p>
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
                <span class="text-xs text-white/40 ml-2">portfolio.ts</span>
              </div>
              <pre class="p-5 text-sm font-mono leading-relaxed overflow-x-auto"><code class="text-green-400">{{ codeSnippet }}</code></pre>
              <div class="flex items-center justify-between px-4 py-2 border-t border-white/10 text-xs text-white/40">
                <span class="flex items-center gap-1.5">
                  <span class="size-2 rounded-full bg-green-500" />
                  Online and coding
                </span>
                <span>Last commit: Today</span>
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
                <UIcon name="i-lucide-monitor" class="size-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-lg">Frontend Development</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">Building responsive, accessible, and performant user interfaces with Vue.js, Nuxt, and modern CSS.</p>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-3">
              <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <UIcon name="i-lucide-server" class="size-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-lg">Backend Development</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">Designing robust APIs and services with Node.js, Go, and Python. Focused on scalability and reliability.</p>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-3">
              <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <UIcon name="i-lucide-lightbulb" class="size-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-lg">Open Source</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">Contributing to open source projects and building tools that help the developer community grow.</p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Recent Blog Posts Section -->
    <section class="py-16 lg:py-24 bg-(--ui-bg-elevated)">
      <UContainer>
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Blog</p>
            <h2 class="text-3xl sm:text-4xl font-bold">Latest Posts</h2>
            <p class="mt-2 text-(--ui-text-muted)">Thoughts on development, technology, and things I learn along the way.</p>
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

    <!-- Projects Section -->
    <section id="projects" class="py-16 lg:py-24">
      <UContainer>
        <div class="text-center mb-12">
          <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">Projects</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Things I've Built</h2>
          <p class="mt-2 text-(--ui-text-muted)">A selection of projects I've worked on — from side experiments to production apps.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <UIcon name="i-lucide-layout-dashboard" class="size-5 text-primary-600 dark:text-primary-400" />
                </div>
                <UButton
                  icon="i-simple-icons-github"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  to="https://github.com/andwati"
                  target="_blank"
                  aria-label="View source"
                />
              </div>
              <h3 class="font-semibold text-lg">Personal Website</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">This site! Built with Nuxt, Nuxt Content, and Nuxt UI. Features a blog, dark mode, and responsive design.</p>
              <div class="flex flex-wrap gap-2 pt-1">
                <UBadge label="Nuxt" variant="subtle" size="sm" />
                <UBadge label="Vue" variant="subtle" size="sm" />
                <UBadge label="Tailwind" variant="subtle" size="sm" />
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <UIcon name="i-lucide-terminal" class="size-5 text-primary-600 dark:text-primary-400" />
                </div>
                <UButton
                  icon="i-simple-icons-github"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  to="https://github.com/andwati"
                  target="_blank"
                  aria-label="View source"
                />
              </div>
              <h3 class="font-semibold text-lg">CLI Toolkit</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">A collection of developer CLI tools for automating workflows, generating boilerplate, and managing projects.</p>
              <div class="flex flex-wrap gap-2 pt-1">
                <UBadge label="Go" variant="subtle" size="sm" />
                <UBadge label="CLI" variant="subtle" size="sm" />
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="inline-flex items-center justify-center size-10 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <UIcon name="i-lucide-database" class="size-5 text-primary-600 dark:text-primary-400" />
                </div>
                <UButton
                  icon="i-simple-icons-github"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  to="https://github.com/andwati"
                  target="_blank"
                  aria-label="View source"
                />
              </div>
              <h3 class="font-semibold text-lg">API Starter</h3>
              <p class="text-sm text-(--ui-text-muted) leading-relaxed">A production-ready REST API boilerplate with authentication, rate limiting, and database migrations.</p>
              <div class="flex flex-wrap gap-2 pt-1">
                <UBadge label="Node.js" variant="subtle" size="sm" />
                <UBadge label="PostgreSQL" variant="subtle" size="sm" />
                <UBadge label="Docker" variant="subtle" size="sm" />
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 lg:py-24">
      <UContainer>
        <div class="max-w-2xl mx-auto text-center space-y-6">
          <p class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400">Contact</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p class="text-lg text-(--ui-text-muted)">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-4">
            <UButton
              label="Email me"
              to="mailto:hello@ianwati.dev"
              icon="i-lucide-mail"
              size="xl"
            />
            <UButton
              label="GitHub"
              to="https://github.com/andwati"
              target="_blank"
              icon="i-simple-icons-github"
              color="neutral"
              variant="outline"
              size="xl"
            />
            <UButton
              label="X / Twitter"
              to="https://x.com"
              target="_blank"
              icon="i-simple-icons-x"
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
