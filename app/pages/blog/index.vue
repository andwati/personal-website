<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", () =>
	queryCollection("blog").order("date", "DESC").all(),
);

useSeoMeta({
	title: "Blog — Ian Wati",
	description:
		"Thoughts on software development, technology, and the things I learn along the way.",
});
</script>

<template>
  <UPage>
    <UPageHero
      title="Blog"
      description="Thoughts on software development, technology, and the things I learn along the way."
    />

    <UPageBody>
      <UContainer>
        <UBlogPosts v-if="posts?.length">
          <UBlogPost
            v-for="post in posts"
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
          <p class="text-(--ui-text-muted)">
            No blog posts yet. Check back soon!
          </p>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
