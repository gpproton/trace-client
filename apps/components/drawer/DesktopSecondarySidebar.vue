<script setup lang="ts">
import SidebarListItem from '@/components/drawer/SidebarListItem.vue';
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: "DesktopSecondarySidebar" });

const { modelValue, title, menuItems } = defineModels<{
  menuItems: RouteMenu[];
  modelValue: ModelOptions<boolean, { defaultValue: false; deep: true }>;
  title:  ModelOptions<string, { defaultValue: 'Secondary Title'; deep: true }>;
}>();
</script>

<template>
  <q-drawer v-if="modelValue" v-model="modelValue" :width="230" show-if-above persistent behavior="desktop" side="left" bordered>
    <q-toolbar>
      <q-toolbar-title class="q-px-sm">{{ '' }}</q-toolbar-title>
    </q-toolbar>
    <q-separator size="1" class="q-mb-md" />
    <q-list padding class="text-primary">
      <template v-for="(item, index) in menuItems" :key="index">
        <sidebar-list-item :item="item" :dense="false" />
        <q-separator v-if="index !== menuItems.length - 1" :key="'sep' + index" />
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
