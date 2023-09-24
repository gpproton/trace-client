<script setup lang="ts">
import LoadingIndicator from '@/LoadingIndicator.vue';

interface IProps {
  layout?: string;
}

withDefaults(defineProps<IProps>(), {
  layout: 'default',
});
</script>

<template>
  <VitePwaManifest />
  <loading-indicator>
    <NuxtLayout :name="layout">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </loading-indicator>
</template>
