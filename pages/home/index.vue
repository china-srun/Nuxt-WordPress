<template>
    <PageHeader>
      <!-- this will be put in slot  -->
        <div class="w-[200px] relative h-[200px] mr-5 shadow-md">
        <img src="~/assets/images/profile.png" class="w-full h-full absolute object-cover rounded"/>
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-2">Welcome China</h1>
        <p class="mb-3">Fuck you and die dumbass</p>
        <a class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200">
            Let's Connect Lol
        </a>
      </div>
    </PageHeader>
    <!-- Block Grid -->
    <section class="container py-16">
      <!-- show 3 cols when the screen minimum size is small -->
      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard v-for="post in posts.posts" :key="post.ID" :title="post.title" :image="post.author.avatar_URL" :slug="post.slug" :description="post.excerpt"></BlogCard>
      </div>
    </section>
</template>

<script setup lang="ts">
// const {data:posts} = useFetch<any>("https://public-api.wordpress.com/rest/v1.1/sites/kirirominstituteoftechnology.wordpress.com/posts?number=100");
// console.log(posts);
const {data:posts} = await useWpApi().getPosts<any>();
console.log(posts)
const config = useRuntimeConfig();
const wpApiUrl = config.public.wpApiUrl;
console.log(wpApiUrl+"posts?number=100");

</script>

<style scoped>
</style>