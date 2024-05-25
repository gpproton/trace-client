<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { RouteMenu } from '@trace/base/typings';

const LinkItem = defineAsyncComponent(() => import('@/components/drawer/LinkItem.vue'));

defineOptions({ name: 'DesktopSecondarySidebar' });

const { modelValue, menuItems } = defineModels<{
  menuItems: RouteMenu[];
  modelValue: ModelOptions<boolean, { defaultValue: false; deep: true }>;
}>();
</script>

<template>
  <q-drawer
    v-if="modelValue"
    v-model="modelValue"
    :width="220"
    show-if-above
    persistent
    behavior="desktop"
    side="left"
    bordered
    class="q-px-xs q-py-sm"
  >
    <q-list padding class="text-primary q-px-xs">
      <link-item
        v-for="(item, index) in menuItems"
        :key="index"
        :show-icon="false"
        :item="item"
        :dense="false"
        class="q-my-xs"
      />
    </q-list>
  </q-drawer>
</template>

<style lang="scss" scoped>
:deep(.qlist) {
  .q-list {
    :hover {
      background-color: var(--q-app-background);
    }
  }
}
</style>
