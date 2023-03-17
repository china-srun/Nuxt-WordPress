

<template>
  <v-parallax src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-72">
    <section class="hero py-10">
      <div class="container flex items-center text-gray-100">
        <!-- only show when title is available -->
        <h1 v-if="title" class="text-4xl font-bold">
          {{ title }}
        </h1>
        <slot />
      </div>
    </section>
  </v-parallax>
</template>

<!-- <template>
  <section class="hero bg-gray-100 py-10">
    <div class="container flex items-center">
      <h1 v-if="title" class="text-4xl font-bold">
        {{ title }}
      </h1>
      <slot />
    </div>
  </section>
</template> -->

<script setup lang="ts">
defineProps<{
  // optional props
  title?: String;
}>();
</script>

<style scoped>
</style>