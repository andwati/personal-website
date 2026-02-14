<script setup lang="ts">
const commentsRef = ref<HTMLElement | null>(null);

onMounted(() => {
	if (!commentsRef.value) return;

	const script = document.createElement("script");
	script.src = "https://utteranc.es/client.js";
	script.setAttribute("repo", "andwati/personal-website");
	script.setAttribute("issue-term", "pathname");
	script.setAttribute("theme", "github-dark");
	script.setAttribute("crossorigin", "anonymous");
	script.async = true;

	commentsRef.value.appendChild(script);
});
</script>

<template>
  <div ref="commentsRef" class="mt-12 pt-8 border-t border-(--ui-border)" />
</template>
