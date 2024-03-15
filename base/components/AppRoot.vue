<script setup lang="ts">
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { onMounted } from 'vue';
import { useLanguageStore } from '@/stores/language';

defineOptions({ name: 'AppRoot' });;

interface IProps {
  layout?: string;
}

withDefaults(defineProps<IProps>(), {
  layout: 'default-layout',
});

onMounted(() => {
  const localeStore = useLanguageStore();
  const { bootstrapLocale } = localeStore;
  bootstrapLocale();
});
</script>

<template>
  <loading-indicator>
      <NuxtPwaAssets />
      <PwaFaviconImage />
      <PwaMaskableImage />
      <PwaTransparentImage />
      <NuxtPage />
  </loading-indicator>
</template>
