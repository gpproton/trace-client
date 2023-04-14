<script setup lang="ts">
import NotificationList from '@/layouts/header/NotificationList.vue';
const contextOptions = {
  page: {
    title: 'Notifications',
  },
};
</script>

<template>
  <page-wrapper
    class="column justify-start items-start"
    :options="contextOptions"
  >
    <notification-list></notification-list>
  </page-wrapper>
</template>
