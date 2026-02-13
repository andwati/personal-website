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
  <UPage v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Blog', to: '/blog', icon: 'i-lucide-book-open' },
            { label: post.title || '' }
          ]"
        />
      </template>

      <template #bottom>
        <div class="flex items-center gap-3 text-sm text-(--ui-text-muted)">
          <UIcon name="i-lucide-calendar" />
          <time v-if="post.date">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <UContainer>
        <div class="prose prose-primary dark:prose-invert max-w-none">
          <ContentRenderer :value="post" />
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
