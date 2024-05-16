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
  <!-- TODO: apply image to PWA components later -->
  <!-- <PwaFaviconImage /> -->
  <!-- <PwaMaskableImage /> -->
  <!-- <PwaTransparentImage /> -->
  <NuxtPwaAssets />
  <NuxtLayout>
    <loading-indicator>
        <NuxtPage />
    </loading-indicator>
  </NuxtLayout>
</template>
