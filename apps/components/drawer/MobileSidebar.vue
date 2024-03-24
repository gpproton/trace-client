<script setup lang="ts">
import type { Workspace } from '@trace/shared';
import SidebarList from '@/components/drawer/SidebarList.vue';
import ThemeSwitcher from '@/components/extra/ThemeSwitcher.vue';
import type { RouteMenu } from '@trace/base/typings';
import { computed } from 'vue';

defineOptions({ name: 'MobileSidebar' });

interface IProps {
  overviewFilter: string[];
}

defineProps<IProps>();
const { modelValue, modules, darkMode } = defineModels<{
  workspace: Workspace;
  modelValue: boolean;
  darkMode: boolean;
  modules: RouteMenu[];
}>();
const genralModuleMenu = computed(() => []);
</script>

<template>
  <q-drawer v-model="modelValue" show-if-above side="left">
    <q-scroll-area class="fit fixed-bottom">
      <sidebar-list :items="genralModuleMenu" />
    </q-scroll-area>
    <div class="fixed-bottom full-width column items-center q-mb-sm">
      <theme-switcher v-model="darkMode" />
    </div>
  </q-drawer>
</template>
