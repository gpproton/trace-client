<script setup lang="ts">
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { onBeforeMount, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLanguageStore } from '@/stores/language';
import type { Route } from '@/typings';

defineOptions({ name: 'AppRoot' });

const route: Route = useRoute();
const { t } = useI18n();
const localeStore = useLanguageStore();
const { bootstrapLocale, localeUpdate } = localeStore;
const { language } = storeToRefs(localeStore);

const triggerLocaleUpdate = (title: string) => {
  useHead({
    title: t(title ?? '#'),
  });
};

watchEffect(() => {
  if (language.value !== null) triggerLocaleUpdate(route.meta.title);
});

onBeforeMount(() => {
  bootstrapLocale();
});

watch(language, () => {
  localeUpdate(language.value as string);
  triggerLocaleUpdate(route.meta.title);
});
</script>

<template>
  <!-- TODO: apply image to PWA components later -->
  <!-- <pwa-favicon-image /> -->
  <!-- <pwa-maskable-image /> -->
  <!-- <pwa-transparent-image /> -->
  <nuxt-pwa-assets />
  <loading-indicator>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </loading-indicator>
</template>
