<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const navItems = computed<NavigationMenuItem[]>(() => [
	{
		label: "About",
		to: "/about",
		active: route.path === "/about",
	},
	{
		label: "Blog",
		to: "/blog",
		active: route.path.startsWith("/blog"),
	},
	{
		label: "Projects",
		to: "/#projects",
		active: false,
	},
	{
		label: "Contact",
		to: "/#contact",
		active: false,
	},
]);
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="inline-flex items-center justify-center size-8 rounded-full bg-primary-600 text-white text-sm font-bold">IW</span>
          <div class="flex flex-col leading-tight">
            <span class="font-semibold text-sm">Ian Andwati</span>
            <span class="text-xs text-(--ui-text-muted)">Software Engineer</span>
          </div>
        </NuxtLink>
      </template>

      <UNavigationMenu :items="navItems" />

      <template #right>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/andwati"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
        <UButton
          color="neutral"
          variant="ghost"
          to="https://x.com"
          target="_blank"
          icon="i-simple-icons-x"
          aria-label="X"
        />
        <UColorModeButton />
      </template>

      <template #body>
        <UNavigationMenu
          :items="navItems"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-(--ui-text-muted)">
          © {{ new Date().getFullYear() }} Ian Andwati. Built with Nuxt.
        </p>
      </template>

      <template #right>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/andwati"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
        <UButton
          color="neutral"
          variant="ghost"
          to="https://x.com"
          target="_blank"
          icon="i-simple-icons-x"
          aria-label="X"
        />
      </template>
    </UFooter>
  </UApp>
</template>