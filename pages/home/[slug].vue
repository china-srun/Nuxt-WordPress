<template>
  <main>
    <section class="header container py-12 sm:py-20">
      <div class="flex mb-3 cursor-pointer" @click="$router.go(-1)">
        <v-icon icon="mdi-arrow-left"></v-icon>
        <p class="ml-1">Back</p>
      </div >
      <div class="post-title text-center">
        <h1 class="text-3xl sm:text-5xl font-bold leading-normal mb-3">
          <div v-html="post.title"></div>
        </h1>
      </div>
      <div class="post-meta text-center mb-10 mt-5">
        <span class="mr-3"
          >Written by:
          <span class="italic font-bold">{{ post.author.login }}</span>
        </span>
        <span class=""
          >Published on:
          <span class="italic font-bold">{{ post.modified.slice(0, 10) }}</span>
        </span>
      </div>
      <!-- if the screen bigger than sm size, it shows 400px -->
      <!-- <div class="w-full h-[250px] sm:h-[500px] relative shadow-xl">
        <img :src="post.author.avatar_URL" alt="image" class="absolute w-full h-full object-cover rounded overflow-hidden"/>
      </div> -->
      <div class="post-content mt-10">
        <div v-html="post.content"></div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { params } = useRoute();
const { data: post } = await useWpApi().getSinglePost<any>(
  params.slug as string
);

console.log(post);
</script>

<style>
.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  @apply mb-3 font-bold 
}

.post-content p {
  @apply mb-4 mt-4
}

.post-content h1 {
  @apply text-3xl
}

.post-content h2 {
  @apply text-2xl
}

.post-content h3 {
  @apply text-xl
}

.post-content h4 {
  @apply text-lg
}

.post-content h5 {
  @apply text-base
}

.post-content h6 {
  @apply text-sm
}
</style>