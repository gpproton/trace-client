<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { RouteMenu } from '@trace/base/typings';

const LinkItem = defineAsyncComponent(() => import('./LinkItem.vue'));

defineOptions({ name: 'SidebarList' });

const { items } = defineModels<{
  items: RouteMenu[];
}>();

withDefaults(
  defineProps<{
    mini?: boolean;
  }>(),
  {
    mini: true,
  },
);
</script>

<template>
  <q-list v-bind="$attrs" padding>
    <link-item
      v-for="(item, index) in items"
      :key="index"
      class="q-mb-xs q-mx-sm border-radius-sm"
      :item="item"
      :dense="false"
      icon-size="2rem"
    />
  </q-list>
</template>

<style lang="scss">
@import '../styles/list-items';
</style>
