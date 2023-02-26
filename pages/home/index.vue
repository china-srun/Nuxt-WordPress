<template>
    <PageHeader>
      <!-- this will be put in slot  -->
        <div class="w-[200px] relative h-[200px] mr-5 shadow-md">
        <img src="~/assets/images/profile.png" class="w-full h-full absolute object-cover rounded"/>
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-2">Welcome China</h1>
        <p class="mb-3">Read all the published blogs written by KITian students here.</p>
        <a class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200">
            Let's Connect 
        </a>
      </div>
    </PageHeader>
    <!-- Block Grid -->
    <section class="container py-9">
      <div class="mb-9 flex justify-end">
        <a class="btn bg-gray-500 text-sky-50 py-2 px-2 rounded inline-block hover:bg-gray-600 duration-200" @click="onClickGrid">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </a>
        <a class="btn bg-gray-500 text-sky-50 py-2 px-2 rounded inline-block hover:bg-gray-600 duration-200 ml-3" @click="onClickTile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </a>
      </div>
      <!-- show 3 cols when the screen minimum size is small -->
      <div class="grid sm:grid-cols-3 gap-5" v-show="grid">
        <BlogCard v-for="post in posts.posts" :key="post.ID" :title="post.title" :image="post.author.avatar_URL" :slug="post.slug" :description="post.excerpt"></BlogCard>
      </div>
      <div v-show="tile">
        <BlogTile v-for="post in posts.posts" :key="post.ID" :title="post.title" :image="post.author.avatar_URL" :slug="post.slug" :description="post.excerpt"></BlogTile>
      </div>
    </section>
</template>

<script setup lang="ts">
// const {data:posts} = useFetch<any>("https://public-api.wordpress.com/rest/v1.1/sites/kirirominstituteoftechnology.wordpress.com/posts?number=100");
// console.log(posts);
const {data:posts} = await useWpApi().getPosts<any>();
const grid = ref(true)
const tile = ref(false)

function onClickGrid() {
  grid.value = true;
  tile.value = false;

}
function onClickTile() {
  tile.value = true;
  grid.value = false;
}
</script>

<style scoped>
</style>