<script setup lang="ts">
import SidebarList from '@/components/drawer/SidebarList.vue';
import ThemeSwitcher from '@/components/extra/ThemeSwitcher.vue';
import type { RouteMenu } from '@trace/base/typings';
import { computed, inject } from 'vue';

defineOptions({ name: 'MobileSidebar' });

const { modelValue, modules, darkMode } = defineModels<{
  modelValue: boolean;
  darkMode: boolean;
  modules: RouteMenu[];
}>();
const workspace = inject<any>('app:workspace');
const genralModuleMenu = computed(() => modules.value);
</script>

<template>
  <q-drawer v-model="modelValue" show-if-above side="left">
    <div>{{ workspace }}</div>
    <q-scroll-area class="fit fixed-bottom">
      <sidebar-list :items="genralModuleMenu" />
    </q-scroll-area>
    <div class="fixed-bottom full-width column items-center q-mb-sm">
      <theme-switcher v-model="darkMode" />
    </div>
  </q-drawer>
</template>
