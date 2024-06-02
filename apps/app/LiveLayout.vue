<script lang="ts" setup>
import { ref, provide, defineAsyncComponent } from 'vue';
import type { Workspace } from '@trace/shared';
import type { RouteMenu } from '@trace/base/typings';
import { useLayoutRouteStore } from '@/composables/layout-routes';
import AppLayout from './AppLayout.vue';

const SidebarList = defineAsyncComponent(
  () => import('@/components/drawer/SidebarList.vue'),
);
const ProfileWidget = defineAsyncComponent(
  () => import('@/components/extra/ProfileWidget.vue'),
);

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

const { modulesMenuFn, moduleFeaturesFn } = useLayoutRouteStore();

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
