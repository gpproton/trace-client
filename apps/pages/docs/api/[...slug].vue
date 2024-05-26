<script setup lang="ts">
import ContentView from '@/app/ContentView.vue';

definePageMeta({
  layout: 'document',
  meta: {
    permissions: false,
  },
});
</script>

<template>
  <content-view name="api"></content-view>
</template>
