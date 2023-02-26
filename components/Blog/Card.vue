<template>
  <div>
    <div class="col-span-1 shadow-lg rounded transform transition duration-500 hover:scale-105">
      <div class="w-full h-[200px] relative" v-if="image">
        <img
          :src="image"
          alt="Thumbnail"
          class="w-full h-full absolute object-cover rounded"
        />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold mb-3">
          <div v-html="title">

          </div>
      </h3>
        <div class="text-sm mb-3" v-if="description">
          <div v-html="description">
          </div>
        </div>
        <div class="mt-6 mb-2"><NuxtLink :to="`/${slug}`" class="bg-gray-200 p-2 rounded">Read More</NuxtLink></div >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  image: string;
  slug: string;
}>();
</script>

<style scoped>
</style>