<template>
  <div class="flex flex-col justify-center">
    <div
      class=" mb-5 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white bg-white col-span-1 transform transition duration-500 hover:scale-105"
    >
      <div class="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          :src="image"
          alt="Thumbnail"
          class="w-50 h-60 object-cover rounded p-3"
        />
      </div>
      <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <h3 class="font-black text-gray-800 md:text-3xl text-xl">
          <div v-html="title"></div>
        </h3>
        <div class="md:text-lg text-gray-500 text-base">
          <div v-html="description"></div>
        </div>
        <div class="mt-6 mb-2 flex justify-end">
          <NuxtLink :to="`/home/${slug}`" class="bg-gray-200 p-2 rounded align-middle">Read More</NuxtLink>
        </div >
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