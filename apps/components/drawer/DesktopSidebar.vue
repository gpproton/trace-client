<script setup lang="ts">
import SidebarList from '@/components/drawer/SidebarList.vue';
import SidebarHeader from '@/components/drawer/SidebarHeader.vue';
import ThemeSwitcher from '@/components/extra/ThemeSwitcher.vue';
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'DesktopSidebar' });

const props = withDefaults(
  defineProps<{
    mouseOver: boolean;
    overviewFilter: string[];
  }>(),
  {
    mouseOver: true,
  },
);

const { modelValue, drawerMiniState, modules, darkMode } = defineModels<{
  modelValue: boolean;
  darkMode: boolean;
  drawerMiniState: boolean;
  modules: RouteMenu[];
}>();
const overviewModuleMenu = computed(() =>
  modules.value.filter(
    (e) =>
      e.name !== undefined && props.overviewFilter.includes(e.name as string),
  ),
);
const generalModuleMenu = computed(() =>
  modules.value.filter(
    (e) =>
      e.name !== undefined && !props.overviewFilter.includes(e.name as string),
  ),
);
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
      <q-scroll-area style="height: 70dvh">
        <sidebar-list :items="overviewModuleMenu" />
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
