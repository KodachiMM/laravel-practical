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
        <h3 class="text-2xl font-bold text-gray-600 text-center">Form</h3>

        <div class="mt-6">
          <form @submit.prevent="submit" autocomplete="off">
            <div class="mt-4">
              <label for="name" class="block font-semibold text-gray-600"
                >Name</label
              >

              <input
                id="name"
                type="text"
                v-model="name"
                placeholder="Enter your name"
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
                for="phone_number"
                class="block font-semibold text-gray-600"
                >Phone Number</label
              >

              <input
                id="phone_number"
                type="text"
                v-model="phone_number"
                placeholder="Enter your phone"
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
                for="date_of_birth"
                class="block font-semibold text-gray-600"
                >Date of Birth</label
              >

              <Datepicker
                id="date_of_birth"
                v-model="date_of_birth"
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
              <label class="block font-semibold text-gray-600">Gender</label>

              <select
                v-model="gender"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border border-gray-200
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-400
                "
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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

                <span v-else class="mx-auto">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker';
import { format } from 'date-fns';

export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      name: null,
      phone_number: null,
      date_of_birth: new Date(),
      gender: '',
      sending: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    async submit() {
      this.sending = true;

      try {
        await this.$store.dispatch('submitForm', {
          name: this.name,
          phone_number: this.phone_number,
          date_of_birth: format(new Date(this.date_of_birth), 'yyyy-MM-dd'),
          gender: this.gender,
        });

        this.$emit(
          'notification',
          'success',
          'Your form has been successfully submitted.',
        );

        this.resetForm();
      } catch ({ data }) {
        this.$emit('notification', 'failed', data.message);
      } finally {
        this.sending = false;
      }
    },

    resetForm() {
      this.name = null;
      this.phone_number = null;
      this.date_of_birth = new Date();
      this.gender = '';
      this.sending = false;
    },
  },
};
</script>