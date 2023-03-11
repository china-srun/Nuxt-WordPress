<template>
  <main>
    <section
      class="container mx-auto flex flex-wrap items-center justify-center h-screen"
    >
      <form
        @submit.prevent="userRegister"
        class="bg-opacity-50 mt-10 flex w-full flex-col rounded-lg p-8 md:mt-0 md:w-1/2 lg:w-2/6"
      >
        <h2 class="mb-5 text-lg font-medium text-black">Create an Account</h2>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-400"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="text-sm leading-7 text-gray-400"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <div class="relative mb-4">
          <label for="confirmPassword" class="text-sm leading-7 text-gray-400"
            >Confirm password</label
          >
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
            required
          />
        </div>
        <button
          type="submit"
          class="rounded border-0 bg-[#42b883] py-2 px-8 font-sans font-bold text-white transition-colors duration-500 hover:bg-[#42d392] focus:outline-none"
        >
          Sign Up
        </button>
        <MessageFailure :title="errorMsg" v-if="errorMsg"></MessageFailure>
        <MessageSuccess :title="successMsg" v-if="successMsg"></MessageSuccess>
        <div class="flex justify-between">
          <p class="mt-3 text-sm">
            Have an account? <span class="ml-1"></span>
          </p>
          <nuxt-link
            class="w-fit text-sm text-[#82a2c0] hover:text-[#42b883] mt-3"
            to="/"
            >Login</nuxt-link
          >
        </div>
      </form>
    </section>
  </main>
</template>


<script setup >
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMsg = ref("");
const successMsg = ref("");
const { auth } = useSupabaseAuthClient();

const userRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = "Passwords do not match!";
    password.value = "";
    confirmPassword.value = "";
    setTimeout(() => {
      errorMsg.value = "";
      successMsg.value = "";
    }, 3000);
    return;
  }
  try {
    const { error } = await auth.signUp({
      email: email.value,
      password: password.value,
    });
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    successMsg.value = "Account created successfully! Please check your email to confirm your account.";
    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    successMsg.value = "";
    setTimeout(() => {
      errorMsg.value = "";
      successMsg.value = "";
    }, 3000);

  }
};

definePageMeta({
  layout: "login",
});
</script>

<style scoped>
</style>