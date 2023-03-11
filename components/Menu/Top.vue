<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold"> KIT's Blogs </NuxtLink>
      <ul class="inline-flex gap-2">
        <li><NuxtLink to="/home" href="" class="hover:underline duration-200" >Home</NuxtLink></li>
        <li><NuxtLink to="/categories" href="" class="hover:underline duration-200">Categories</NuxtLink></li>
        <li class="ml-5"><button class="hover:underline duration-200" @click="logout">Logout</button></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const logout = async () => {
  await auth.signOut();
}

watchEffect(() => {
  if (!user.value) {
    return navigateTo("/");
  }
});


</script>

<style scoped>
</style> 