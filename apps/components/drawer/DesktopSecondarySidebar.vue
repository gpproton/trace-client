<script setup lang="ts">
import LinkItem from '@/components/drawer/LinkItem.vue';
import type { RouteMenu } from '@trace/base/typings';

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
    :width="230"
    show-if-above
    persistent
    behavior="desktop"
    side="left"
    bordered
    class="q-px-8"
  >
    <q-toolbar>
      <q-toolbar-title class="q-px-sm">{{ '' }}</q-toolbar-title>
    </q-toolbar>
    <q-separator size="1" class="q-mb-md" />
    <q-list padding class="text-primary q-px-xs">
      <template v-for="(item, index) in menuItems" :key="index">
        <link-item :item="item" :dense="false" class="q-my-xs" />
        <q-separator
          v-if="index !== menuItems.length - 1"
          :key="'sep' + index"
        />
      </template>
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
