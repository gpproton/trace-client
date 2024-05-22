<script lang="ts" setup>
import { ref, provide } from 'vue';
import type { Workspace } from '@trace/shared';
import AppLayout from './AppLayout.vue';
import type { RouteMenu } from '@trace/base/typings';
import SidebarList from '@/components/drawer/SidebarList.vue';
import ProfileWidget from '@/components/extra/ProfileWidget.vue';
import { useLayoutRouteStore } from '@/composables/layout-routes';

const { modulesMenuFn, moduleFeaturesFn } = useLayoutRouteStore();
const props = withDefaults(
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
const workspaceValue = computed(() => props.workspace);
const modulesMenu = computed<RouteMenu[]>(() => modulesMenuFn());
const moduleFeatures = computed<RouteMenu[]>(() => moduleFeaturesFn());
const overviewModuleMenu = computed<RouteMenu[]>(
  () => appLayoutRef.value?.overviewModuleMenu ?? [],
);
const generalModuleMenu = computed<RouteMenu[]>(
  () => appLayoutRef.value?.generalModuleMenu ?? [],
);

provide('app:workspace', workspaceValue);
provide('app:modules', modulesMenu);
provide('app:modules-features', moduleFeatures);
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
    <router-view />
  </app-layout>
</template>
