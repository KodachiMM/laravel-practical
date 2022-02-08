<template>
  <NavBar />
  <Notification />

  <router-view
    class="p-6 min-h-screen"
    v-slot="{ Component }"
    @notification="showNotification"
  >
    <component :is="Component" />
  </router-view>
</template>

<script>
import NavBar from './NavBar';
import Notification from './Notification.vue';

export default {
  components: {
    NavBar,
    Notification,
  },
  computed: {},
  methods: {
    showNotification(status, text) {
      this.$notify(
        {
          title: status,
          text: text,
          type: status,
          group: 'generic',
        },
        2000,
      );
    },
  },
};
</script>
