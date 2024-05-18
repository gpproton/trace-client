<script lang="ts" setup>
import { ref } from 'vue';
import type { Workspace } from '@trace/shared';
import RouterInject from '@/components/RouterInject.vue';
import AppLayout from './AppLayout.vue';
import type { RouteMenu } from '@trace/base/typings';
import SidebarList from '@/components/drawer/SidebarList.vue';
import ProfileWidget from '@/components/extra/ProfileWidget.vue';

const appLayoutRef = ref();
withDefaults(
  defineProps<{
    workspace: Workspace;
    overviewFilter?: string[];
    mobileFilter?: string[];
  }>(),
  {
    overviewFilter: () => [],
    mobileFilter: () => [],
  },
);

// const modules = t('app:modules');

// const { modules } = defineModels<{
//   modules: RouteMenu[];
// }>();

// const modules = inject('app:modules');

const modules = computed<RouteMenu[]>(
  () => appLayoutRef.value?.modulesMenu ?? [],
);
const filters = ['track-live'];
const genralModuleMenu = computed<RouteMenu[]>(() =>
  modules.value.filter(
    (e) => e.name !== undefined && filters.includes(e.name as string),
  ),
);
</script>

<template>
  <app-layout
    ref="appLayoutRef"
    :mouse-over="false"
    :workspace="workspace"
    :overview-filter="overviewFilter"
    :mobile-filter="mobileFilter"
  >
    <template #desktop-header> </template>
    <template #sidebar-start>
      <profile-widget class="q-my-md"></profile-widget>
    </template>
    <template #desktop-secondary-sidebar>
      <div></div>
    </template>
    <template #sidebar-bottom>
      <sidebar-list :items="genralModuleMenu" />
    </template>
    <router-inject></router-inject>
  </app-layout>
</template>
