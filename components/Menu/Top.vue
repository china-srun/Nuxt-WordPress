<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold"> KIT's Blogs </NuxtLink>
      <ul class="inline-flex gap-2">
        <li><NuxtLink to="/home" href="" class="hover:underline duration-200" >Home</NuxtLink></li>
        <li><NuxtLink to="/categories" href="" class="hover:underline duration-200">Categories</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style> 