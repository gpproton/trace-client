<script setup lang="ts">
import { onBeforeMount, watch, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useLanguageStore } from '@/stores/language';
import type { Route } from '@/typings';

const LoadingIndicator = defineAsyncComponent(() => import('@/components/LoadingIndicator.vue'));

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
  <pwa-favicon-image image="public/icon.svg" />
  <pwa-maskable-image image="public/icon.svg" />
  <pwa-transparent-image image="public/icon.svg" />
  <pwa-apple-splash-screen-image image="public/icon.svg" />
  <pwa-apple-image image="public/icon.svg" />
  <nuxt-pwa-assets />
  <loading-indicator>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </loading-indicator>
</template>
