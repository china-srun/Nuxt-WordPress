<template>
  <div>
    <PageHeader :title="`Archive: ${Object.keys(postRelated.posts[0].categories)}`"></PageHeader>
    <div class="container py-16">
        <div class="grid sm:grid-cols-3 gap-5">
          <BlogCard
            v-for="post in postRelated.posts"
            :key="post.ID"
            :title="post.title"
            :image="post.author.avatar_URL"
            :slug="post.slug"
            :description="post.excerpt"
          ></BlogCard>
        </div>
    </div >
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: postRelated } = await useWpApi().getPosts<any>(
  route.params.slug as string
);
</script>

<style scoped>
</style>