<script setup lang="ts">
import LoadingIndicator from '@/LoadingIndicator.vue';

interface IProps {
  layout?: string;
}

withDefaults(defineProps<IProps>(), {
  layout: 'default-layout',
});
</script>

<template>
  <VitePwaManifest />
  <loading-indicator>
    <!--
    <NuxtLayout :name="layout">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    -->
    <NuxtPage />
  </loading-indicator>
</template>
