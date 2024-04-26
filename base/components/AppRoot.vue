<script setup lang="ts">
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { onMounted } from 'vue';
import { useLanguageStore } from '@/stores/language';

defineOptions({ name: 'AppRoot' });

onMounted(() => {
  const localeStore = useLanguageStore();
  const { bootstrapLocale } = localeStore;
  bootstrapLocale();
});
</script>

<template>
  <loading-indicator>
    <NuxtPwaAssets />
    <!-- TODO: apply image to PWA components later -->
    <!-- <PwaFaviconImage /> -->
    <!-- <PwaMaskableImage /> -->
    <!-- <PwaTransparentImage /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </loading-indicator>
</template>
