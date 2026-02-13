<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData("blog-post-" + route.path, () =>
	queryCollection("blog").path(route.path).first(),
);

if (!post.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Blog post not found",
		fatal: true,
	});
}

useSeoMeta({
	title: post.value?.title,
	description: post.value?.description,
});
</script>

<template>
  <UContainer v-if="post">
    <div class="max-w-3xl mx-auto py-8 lg:py-12">
      <UBreadcrumb
        :items="[
          { label: 'Blog', to: '/blog', icon: 'i-lucide-book-open' },
          { label: post.title || '' }
        ]"
        class="mb-6"
      />

      <header class="mb-8 lg:mb-12">
        <h1 class="text-3xl lg:text-4xl font-bold tracking-tight text-(--ui-text-highlighted) mb-3">
          {{ post.title }}
        </h1>
        <p v-if="post.description" class="text-lg text-(--ui-text-muted) mb-4">
          {{ post.description }}
        </p>
        <div class="flex items-center gap-2 text-sm text-(--ui-text-muted)">
          <UIcon name="i-lucide-calendar" class="size-4" />
          <time v-if="post.date">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
          <UBadge v-if="post.badge" :label="post.badge" variant="subtle" size="sm" class="ml-2" />
        </div>
      </header>

      <div class="prose prose-primary dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-pre:rounded-xl prose-pre:border prose-pre:border-(--ui-border)">
        <ContentRenderer :value="post" />
      </div>
    </div>
  </UContainer>
</template>
