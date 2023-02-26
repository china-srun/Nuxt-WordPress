<template>
  <section class="hero bg-gray-100 py-10">
    <div class="container flex items-center">
        <!-- only show when title is available -->
      <h1 v-if="title" class="text-4xl font-bold">
        {{ title }}
      </h1>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  // optional props
  title?: String;
}>();
</script>

<style scoped>
</style>