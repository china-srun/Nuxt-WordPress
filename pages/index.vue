<template>
  <main>


    <section
      class="container mx-auto flex flex-wrap items-center justify-center h-screen"
    >
      <form
        @submit.prevent="userLogin"
        class="bg-opacity-50 mt-10 flex w-full flex-col rounded-lg p-8 md:mt-0 md:w-1/2 lg:w-2/6"
      >
        <h2 class="mb-5 text-lg font-medium text-black">Welcome Back!</h2>
        <div class="relative mb-4">
          <label for="full-name" class="text-sm leading-7 text-gray-400"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="text-sm leading-7 text-gray-400"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <button
          class="rounded border-0 bg-[#42b883] py-2 px-8 font-sans font-bold text-white transition-colors duration-500 hover:bg-[#42d392] focus:outline-none"
        >
          Login
        </button>
        <div class="flex items-center mt-3">
          <hr class="border-gray-300 border w-full mr-4">
          <span class="text-gray-400">Or</span>
          <hr class="border-gray-300 border w-full ml-4">
        </div>
        <div class="flex mt-2">
          <v-row class="justify-evenly">
            <button class="w-20 mt-4 bg-red-500 text-white py-2 px-4 rounded shadow-md hover:bg-red-600 transition duration-300 ease-in-out" @click="onSignInWithGoogle()">
              <v-icon icon="mdi-google"></v-icon>
            </button>
            <button class="w-20 mt-4 bg-gray-500 text-white py-2 px-4 rounded shadow-md hover:bg-gray-600 transition duration-300 ease-in-out" @click="onSignInWithGitHub()">
              <v-icon icon="mdi-git"></v-icon>
            </button>
            <button class="w-20 mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out" @click="onSignInWithTwitter()">
              <v-icon icon="mdi-twitter"></v-icon>
            </button>
          </v-row >
        </div >
        <MessageFailure :title="errorMsg" v-if="errorMsg"></MessageFailure>
        <div class="flex justify-between mt-3">
          <p class="mt-3 text-sm">
            Don't have any account? <span class="ml-1"></span>
          </p>
          <nuxt-link
            class="w-fit text-sm text-[#82a2c0] hover:text-[#42b883] mt-3"
            to="/signUp"
            >Register</nuxt-link
          >
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
const router = useRouter();
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const errorMsg = ref("");
const { auth } = useSupabaseAuthClient();
const userLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    email.value = "";
    password.value = "";
    if (error) throw error;
  } catch (error: any) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = "";
    }, 3000);
  }
};
watchEffect(() => {
  if (user.value) {
    return navigateTo("/home");
  }
});

async function onSignInWithGoogle() {
  const {data, error} = await auth.signInWithOAuth({
    provider: 'google'
  })
}

async function onSignInWithGitHub() {
  const { data, error } = await auth.signInWithOAuth({
    provider: 'github',
  })
}

function onSignInWithTwitter() {

}

definePageMeta({
  layout: "login",
});



</script>

<style scoped>
/* @import "/assets/css/login.css"; */

</style>