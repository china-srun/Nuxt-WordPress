<template>
  <PageHeader>
    <!-- this will be put in slot  -->
    <div class="w-[200px] relative h-[200px] mr-5 shadow-md">
      <img
        src="~/assets/images/profile.png"
        class="w-full h-full absolute object-cover rounded"
      />
    </div>
    <div>
      <h1 class="text-4xl font-bold mb-2">Welcome China</h1>
      <p class="mb-3">
        Read all the published blogs written by KITian students here.
      </p>
      <a
        class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200"
      >
        Let's Connect
      </a>  
    </div>
  </PageHeader> 

  <!-- Block Grid -->
  <section class="container py-9">
    <div class="mb-9 flex justify-end">
      <v-text-field
        v-model="input"
        label="Search for blogs"
        single-line
        hide-details
        class="h-5 mr-5"
        autofocus
        clearable
        @click:clear="clear()"
        variant="outlined"
      ></v-text-field>
      <a
        class="btn bg-gray-500 text-sky-50 py-2 px-2 rounded inline-block hover:bg-gray-600 duration-200 mt-2"
        @click="onClickGrid"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </a>
      <a
        class="btn bg-gray-500 text-sky-50 py-2 px-2 rounded inline-block hover:bg-gray-600 duration-200 ml-3 mt-2"
        @click="onClickTile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </a>
    </div>
    <div v-if="input.length === 0">
      <div class="grid sm:grid-cols-3 gap-5" v-show="grid">
        <BlogCard
          v-for="post in posts.posts"
          :key="post.ID"
          :title="post.title"
          :image="post.author.avatar_URL"
          :slug="post.slug"
          :description="post.excerpt"
        ></BlogCard>
      </div>
      <div v-show="tile">
        <BlogTile
          v-for="post in posts.posts"
          :key="post.ID"
          :title="post.title"
          :image="post.author.avatar_URL"
          :slug="post.slug"
          :description="post.excerpt"
        ></BlogTile>
      </div>
    </div>
    <div v-else>
      <div class="" v-for="post in filteredList()" :key="post.ID">
        <div v-show="grid" class="grid sm:grid-cols-3 gap-5">
          <BlogCard
            :title="post.title"
            :image="post.author.avatar_URL"
            :slug="post.slug"
            :description="post.excerpt"
          ></BlogCard>
          
        </div>
        <div v-show="tile">
          <BlogTile
            :title="post.title"
            :image="post.author.avatar_URL"
            :slug="post.slug"
            :description="post.excerpt"
          ></BlogTile>
        </div>
      </div>
      <div class="item error" v-if="input && !filteredList().length">
        <p>No results found!</p>
      </div>
    </div>
  </section>
  <div class="fixed-btn" @click="scrollToBottom" v-if="topPosition">
    <p>Bottom</p>
  </div>
  <div class="fixed-btn" @click="scrollToTop" v-if="bottomPosition">
    <p>Top</p>
  </div>
</template>

<script setup lang="ts">
// const {data:posts} = useFetch<any>("https://public-api.wordpress.com/rest/v1.1/sites/kirirominstituteoftechnology.wordpress.com/posts?number=100");
// console.log(posts);
import { createClient } from '@supabase/supabase-js'

const { data: posts } = await useWpApi().getPosts<any>();
const grid = ref(true);
const tile = ref(false);
const bottomPosition = ref(false);
const topPosition = ref(true);
let input = ref("");

var arr_names: any[] = new Array();
for (var i = 0; i < posts.value.posts.length; i++) {
  arr_names.push(posts.value.posts[i]);
}

function filteredList() {
  return arr_names.filter((post: any) =>
    post.title.toLowerCase().includes(input.value.toLowerCase())
  );
}

function onClickGrid() {
  grid.value = true;
  tile.value = false;
}
function onClickTile() {
  tile.value = true;
  grid.value = false;
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
  bottomPosition.value = true;
  topPosition.value = false;
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  topPosition.value = true;
  bottomPosition.value = false;
}

function clear() {
  input.value = "";
}

const client = useSupabaseClient()
const {data} = await useAsyncData('users', async() => {
  return await client.from('users').select().order('created_at', {ascending: true})
})
console.log(data.value?.data)



</script>

<style scoped>


.fixed-btn {
  background-color: #0facf3;
  position: fixed;
  bottom: 10%;
  right: 3%;
  text-align: center;
  width: 150px;
  height: 45px;
  box-shadow: 4px 4px 4px #0a78aa;
  cursor: pointer;
  border-radius: 3px;
  color: white;
  transition: all 0.3s ease;
}

.fixed-btn:active {
  box-shadow: 0 0;
}

.fixed-btn p {
  text-transform: uppercase;
  font-weight: 900;
  padding-top: 6%;
}
</style>