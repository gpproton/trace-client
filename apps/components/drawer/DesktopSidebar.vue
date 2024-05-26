<script setup lang="ts">
import { inject, defineAsyncComponent } from 'vue';
import type { RouteMenu } from '@trace/base/typings';

const SidebarList = defineAsyncComponent(
  () => import('@/components/drawer/SidebarList.vue'),
);
const SidebarHeader = defineAsyncComponent(
  () => import('@/components/drawer/SidebarHeader.vue'),
);
const ThemeSwitcher = defineAsyncComponent(
  () => import('@/components/extra/ThemeSwitcher.vue'),
);

defineOptions({ name: 'DesktopSidebar' });

const overviewMenuActive = inject('app:overview-active', true);
const overviewModuleMenu = inject<RouteMenu[]>('app:overview-modules', []);
const generalModuleMenu = inject<RouteMenu[]>('app:general-modules', []);

const props = withDefaults(
  defineProps<{
    mouseOver: boolean;
    overviewFilter: string[];
  }>(),
  {
    mouseOver: true,
  },
);

const { modelValue, drawerMiniState, darkMode } = defineModels<{
  modelValue: boolean;
  darkMode: boolean;
  drawerMiniState: boolean;
}>();

const setMiniDrawer = (value: boolean) => {
  if (props.mouseOver) {
    drawerMiniState.value = value;
  }
};
</script>

<template>
  <q-drawer
    v-model="modelValue"
    show-if-above
    bordered
    :width="295"
    :mini-width="64"
    side="left"
    :mini="drawerMiniState"
    mini-to-overlay
    @mouseover="setMiniDrawer(false)"
    @mouseout="setMiniDrawer(true)"
  >
    <slot name="header">
      <sidebar-header v-model="drawerMiniState" class="q-mt-none" />
    </slot>
    <slot name="start"></slot>
    <slot>
      <q-scroll-area class="q-py-md hide-scrollbar" style="height: 80dvh">
        <sidebar-list v-if="overviewMenuActive" :items="overviewModuleMenu" />
        <q-separator class="q-mx-sm" />
        <sidebar-list :items="generalModuleMenu" />
      </q-scroll-area>
    </slot>
    <slot name="end">
      <div class="fixed-bottom full-width q-mb-sm">
        <slot name="bottom"></slot>
        <div class="row justify-center">
          <theme-switcher v-show="!drawerMiniState" v-model="darkMode" />
        </div>
      </div>
    </slot>
  </q-drawer>
</template>
