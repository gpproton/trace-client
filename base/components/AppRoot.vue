<script setup lang="ts">
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { onBeforeMount, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLanguageStore } from '@/stores/language';

defineOptions({ name: 'AppRoot' });

const route = useRoute();
const { t } = useI18n();
const localeStore = useLanguageStore();
const { bootstrapLocale, localeUpdate } = localeStore;
const { language } = storeToRefs(localeStore);

watchEffect(() => {
  useHead({
    title: t(route.meta.title ?? '#'),
  });
});

onBeforeMount(() => {
  bootstrapLocale();
});

watch(language, () => {
  localeUpdate(language.value as string);
});
</script>

<template>
  <!-- TODO: apply image to PWA components later -->
  <!-- <PwaFaviconImage /> -->
  <!-- <PwaMaskableImage /> -->
  <!-- <PwaTransparentImage /> -->
  <NuxtPwaAssets />
  <loading-indicator>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </loading-indicator>
</template>
