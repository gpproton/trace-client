<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { Workspace } from '@trace/shared';
import { markRaw, provide, watch, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

const AppLayout = defineAsyncComponent(() => import('./AppLayout.vue'));

defineProps<{
  workspace: Workspace;
}>();

const layout = shallowRef();
const route = useRoute();

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
    <router-view />
  </component>
</template>
