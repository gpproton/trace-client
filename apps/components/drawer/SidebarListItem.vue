<script setup lang="ts">
import LinkSecondaryItem from './LinkSecondaryItem.vue';
import type { RouteMenu } from '@trace/base/types';

defineOptions({ name: 'SidebarListItem' });

interface IProps {
  item: RouteMenu;
  dense?: boolean;
  iconSize?: string;
}

withDefaults(defineProps<IProps>(), {
  dense: false,
  iconSize: '',
});
</script>

<template>
  <q-item v-if="item.children == undefined" :to="{ name: item.name }" clickable :dense="dense"
    active-class="app-list-item-active">
    <q-item-section avatar>
      <q-icon :size="iconSize" :name="item.icon" />
    </q-item-section>
    <q-item-section class="app-list-item-text">
      <q-item-label>{{ item.title }}</q-item-label>
    </q-item-section>
  </q-item>
  <link-secondary-item v-else v-bind="$attrs" :icon-size="iconSize" :item="item" />
</template>

<style lang="scss" scoped>
@import '../styles/list-items.scss';
</style>
