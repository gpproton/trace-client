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
    :width="250"
    show-if-above
    persistent
    behavior="desktop"
    side="left"
    bordered
    class="q-px-xs q-py-sm"
  >
    <q-list padding class="text-primary q-px-xs">
      <template v-for="(item, index) in menuItems" :key="index">
        <link-item :item="item" :dense="false" class="q-my-xs" />
        <!-- <q-separator
          v-if="index !== menuItems.length - 1"
          :key="'sep' + index"
        /> -->
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
