<template>
  <div class="shadow-md bg-white">
    <div class="max-w-screen-lg mx-auto flex justify-between">
      <div class="flex">
        <router-link
          class="flex p-4 font-bold tracking-wider text-lg"
          :to="{ name: 'home' }"
        >
          Laravel Practical
        </router-link>

        <router-link
          class="flex p-4 items-center"
          active-class="font-semibold text-gray-800"
          :to="{ name: 'create-form' }"
        >
          Create Form
        </router-link>
      </div>

      <div v-if="user" class="flex">
        <button @click="logout" class="p-4 flex items-center cursor-pointer">
          Logout
        </button>
      </div>

      <div v-else class="flex">
        <router-link
          class="p-4 tracking-widest flex items-center text-gray-600"
          active-class="font-semibold text-gray-800"
          :to="{ name: 'login' }"
        >
          Login
        </router-link>
        <router-link
          class="p-4 tracking-widest flex items-center text-gray-600"
          active-class="font-semibold text-gray-800"
          :to="{ name: 'register' }"
        >
          Register
        </router-link>
      </div>
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
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>