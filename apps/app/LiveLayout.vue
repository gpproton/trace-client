<script lang="ts" setup>
import { ref, provide } from 'vue';
import type { Workspace } from '@trace/shared';
import RouterInject from '@/components/RouterInject.vue';
import AppLayout from './AppLayout.vue';
import type { RouteMenu } from '@trace/base/typings';
import SidebarList from '@/components/drawer/SidebarList.vue';
import ProfileWidget from '@/components/extra/ProfileWidget.vue';

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

const appLayoutRef = ref();
const overviewActiveState = ref(false);

// const modules = computed<RouteMenu[]>(
//   () => appLayoutRef.value?.modulesMenu ?? [],
// );

const overviewModuleMenu = computed<RouteMenu[]>(
  () => appLayoutRef.value?.overviewModuleMenu ?? [],
);
const generalModuleMenu = computed<RouteMenu[]>(
  () => appLayoutRef.value?.generalModuleMenu ?? [],
);
// const generalModuleMenu = computed<RouteMenu[]>(() =>
//   modules.value.filter(
//     (e) =>
//       e.name !== undefined && props.overviewFilter.includes(e.name as string),
//   ),
// );

provide('app:overview-active', overviewActiveState);
provide('app:overview-modules', overviewModuleMenu);
provide('app:general-modules', generalModuleMenu);
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
      <sidebar-list :items="overviewModuleMenu" />
    </template>
    <router-inject></router-inject>
  </app-layout>
</template>
