<script setup lang="ts">
import LoadingIndicator from '@/LoadingIndicator.vue';
import { onMounted } from 'vue';
import { useLanguageStore } from '@/stores/language';

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
  <VitePwaManifest />
  <loading-indicator>
    <NuxtPage />
  </loading-indicator>
</template>
