<script lang="ts" setup>
import type { Workspace } from '@trace/shared';
import RouterInject from '@/components/RouterInject.vue';
import AppLayout from './AppLayout.vue';

interface IProps {
  workspace: Workspace;
  overviewFilter?: string[];
  mobileFilter?: string[];
}

withDefaults(defineProps<IProps>(), {
  overviewFilter: () => [],
  mobileFilter: () => [],
});
</script>

<template>
  <app-layout
    :workspace="workspace"
    :overview-filter="overviewFilter"
    :mobile-filter="mobileFilter"
  >
    <template #desktop-header>
      <div></div>
    </template>
    <template #desktop-secondary-sidebar>
      <div></div>
    </template>
    <router-inject></router-inject>
  </app-layout>
</template>
