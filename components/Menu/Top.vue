<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold"> KIT's Blogs </NuxtLink>
      <ul class="inline-flex gap-2">
        <li>
          <NuxtLink to="/home" href="" class="hover:underline duration-200"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/categories"
            href=""
            class="hover:underline duration-200"
            >Categories</NuxtLink
          >
        </li>
        <li class="ml-5">
          <button class="hover:underline duration-200" @click="dialog = true">
            Logout
          </button>
        </li>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent width="500" >
              <v-card>
                <v-card-title class="mt-3">
                  Are you sure you want to logout?
                </v-card-title>
                <v-card-text
                  >Logging out will end your
                  current session and you will be required to log in again to
                  access your account.
                </v-card-text>
                <div class="flex justify-end">
                  <v-card-actions >
                    <v-spacer></v-spacer>
                    <v-btn
                      color="red-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      No
                    </v-btn>
                    <v-btn
                      color="green-darken-1"
                      variant="text"
                      @click="dialog = false, logout()"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                </div >
              </v-card>
            </v-dialog>
          </v-row>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const dialog = ref(false);
const logout = async () => {
  await auth.signOut();
};

watchEffect(() => {
  if (!user.value) {
    return navigateTo("/");
  }
});
</script>

<style scoped>
</style> 