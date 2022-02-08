<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-1 flex flex-col items-center justify-center text-gray-600">
      <div class="mb-6 text-center tracking-wider text-2xl sm:mb-8 sm:text-2xl">
        <span v-if="user">Welcome, {{ user.data.name }}</span>
        <span v-else>Please login to use form</span>
      </div>

      <div
        class="
          no-underline
          hover:underline
          text-sm
          font-normal
          text-teal-800
          uppercase
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>