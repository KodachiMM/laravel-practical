<template>
  <NotificationGroup group="generic">
    <div
      class="
        fixed
        inset-0
        flex
        items-start
        justify-end
        p-6
        px-4
        py-20
        pointer-events-none
      "
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="
              flex
              w-full
              max-w-sm
              mx-auto
              mt-4
              overflow-hidden
              bg-white
              rounded-lg
              shadow-md
            "
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div
              class="flex items-center justify-center w-12"
              :class="{
                'bg-green-500': notification.type === 'success',
                'bg-red-500': notification.type === 'failed',
              }"
            >
              <CheckCircleIcon
                v-if="notification.type === 'success'"
                class="w-6 w-6 text-white"
              />
              <XCircleIcon
                v-if="notification.type === 'failed'"
                class="w-6 w-6 text-white"
              />
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span
                  class="font-semibold capitalize"
                  :class="{
                    'text-green-500': notification.type === 'success',
                    'text-red-500': notification.type === 'failed',
                  }"
                  >{{ notification.title }}</span
                >
                <p class="text-sm text-gray-600">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>

<script>
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/outline';

export default {
  components: { CheckCircleIcon, XCircleIcon },
};
</script>