<script setup lang="ts">
import SidebarListItem from './SidebarListItem.vue';
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'SidebarList' });

interface IProps {
  items: RouteMenu[];
  mini?: boolean;
}

withDefaults(defineProps<IProps>(), {
  mini: true,
});
</script>

<template>
  <q-list v-bind="$attrs" padding>
    <sidebar-list-item v-for="(item, index) in items" :key="index" class="q-mb-xs q-mx-sm border-radius-sm" :item="item"
      :dense="false" icon-size="2rem" />
  </q-list>
</template>

<style lang="scss">
@import '../styles/list-items.scss';
</style>
