<script setup lang="ts">
import type { ServiceVariant } from '@trace/shared';
import AppLayout from './AppLayout.vue';
import { markRaw, provide, watch, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

interface IProps {
  workspace: ServiceVariant;
}

const layout = shallowRef();
const route = useRoute();
defineProps<IProps>();
watch(
  () => computed(() => route.path),
  async () => {
    const route = useRoute();
    const metaLayout = route.meta.layout;
    try {
      const component =
        metaLayout &&
        (await import(/* @vite-ignore */ `@/app/${metaLayout}.vue`));
      layout.value = markRaw(component?.default || AppLayout);
    } catch (e) {
      layout.value = markRaw(AppLayout);
    }
  },
  { immediate: true },
);
provide('app:layout', layout);
</script>

<template>
  <component :is="layout" :workspace="workspace">
    <router-view></router-view>
  </component>
</template>
