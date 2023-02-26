<template>
  <div>
    <PageHeader title="Categories" />
    <section class="py-10 container">
      <div class="flex flex-wrap gap-5">
        <NuxtLink v-for="category in categories.categories" :key="category.ID" :to="`categories/${category.slug}`" class="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >#{{ category.name }} ({{ category.post_count }}) 
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const {data:categories} = await useWpApi().getCategories<any>();
console.log(categories);

</script>

<style scoped>
</style>