<script setup lang="ts">
import type { IProfile, Workspace } from '@trace/shared';
import SidebarList from '@/components/drawer/SidebarList.vue';
import SidebarHeader from '@/components/drawer/SidebarHeader.vue';
import ThemeSwitcher from '@/components/extra/ThemeSwitcher.vue';
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'DesktopSidebar' });

interface IProps {
  userProfile: IProfile;
  identityMenu: RouteMenu[];
  overviewFilter: string[];
}

const props = defineProps<IProps>();
const { modelValue, workspace, drawerMiniState, modules, darkMode } =
  defineModels<{
    workspace: Workspace;
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
const genralModuleMenu = computed(() =>
  modules.value.filter(
    (e) =>
      e.name !== undefined && !props.overviewFilter.includes(e.name as string),
  ),
);
const setMiniDrawer = (value: boolean) => (drawerMiniState.value = value);
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
    <sidebar-header
      v-model="drawerMiniState"
      v-model:workspace="workspace"
      class="q-mt-none"
    />
    <q-scroll-area
      class="fit fixed-bottom"
      style="padding-top: 96px; padding-bottom: 110px"
    >
      <sidebar-list :items="overviewModuleMenu" />
      <q-separator class="q-mx-sm" />
      <sidebar-list :items="genralModuleMenu" />
    </q-scroll-area>
    <div
      v-show="!drawerMiniState"
      class="fixed-bottom full-width column items-center q-mb-sm"
    >
      <theme-switcher v-model="darkMode" />
    </div>
  </q-drawer>
</template>
