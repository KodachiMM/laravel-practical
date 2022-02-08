<template>
  <div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
      <div
        class="
          bg-white
          mt-10
          p-6
          rounded-xl
          w-full
          max-w-sm
          mx-auto
          border
          shadow-lg
        "
      >
        <h3 class="text-2xl font-bold text-gray-600 text-center">
          Create your Account
        </h3>

        <div class="mt-6">
          <form @submit.prevent="register" autocomplete="off">
            <div>
              <label for="name" class="block font-semibold text-gray-600"
                >Full Name</label
              >

              <input
                id="name"
                type="text"
                v-model="name"
                placeholder="Enter your full name"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border border-gray-200
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-400
                "
              />
            </div>

            <div class="mt-4">
              <label for="email" class="block font-semibold text-gray-600"
                >Email</label
              >

              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border border-gray-200
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-400
                "
              />
            </div>

            <div class="mt-4">
              <label for="password" class="block font-semibold text-gray-600"
                >Password</label
              >

              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Enter your password"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border border-gray-200
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-400
                "
              />
            </div>

            <div class="mt-4">
              <label
                for="password_confirmation"
                class="block font-semibold text-gray-600"
                >Confirm password</label
              >

              <input
                id="password_confirmation"
                type="password"
                v-model="password_confirmation"
                placeholder="Enter your password again"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border border-gray-200
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-400
                "
              />
            </div>

            <div class="mt-6">
              <button
                type="submit"
                class="
                  text-white
                  bg-blue-500
                  rounded
                  py-2
                  px-4
                  hover:bg-blue-600
                  w-full
                "
                :class="{ 'cursor-not-allowed focus:cursor-auto': sending }"
                :disabled="sending"
              >
                <svg
                  v-if="sending"
                  class="animate-spin mx-auto h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>

                <span v-else class="mx-auto">Create account</span>
              </button>
            </div>

            <div
              class="
                mt-6
                text-sm
                font-display font-semibold
                text-gray-600 text-center
              "
            >
              Already have an account ?
              <router-link
                :to="{ name: 'login' }"
                class="cursor-pointer text-blue-500 hover:text-blue-600"
                >Login</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      sending: false,
    };
  },

  methods: {
    async register() {
      this.sending = true;

      try {
        await this.$store.dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });
        this.$router.push({ name: 'home' });
      } catch ({ data }) {
        this.$emit('notification', 'failed', data.message);
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>
