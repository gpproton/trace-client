<script setup lang="ts">
import type { RouteMenu } from '@trace/base/typings';
import { inject, defineAsyncComponent } from 'vue';

const SidebarList = defineAsyncComponent(
  () => import('@/components/drawer/SidebarList.vue'),
);
const ThemeSwitcher = defineAsyncComponent(
  () => import('@/components/extra/ThemeSwitcher.vue'),
);
const SidebarHeader = defineAsyncComponent(
  () => import('@/components/drawer/SidebarHeader.vue'),
);
const ProfileWidget = defineAsyncComponent(
  () => import('@/components/extra/ProfileWidget.vue'),
);

defineOptions({ name: 'MobileSidebar' });

const { modelValue, darkMode } = defineModels<{
  modelValue: boolean;
  darkMode: boolean;
}>();
const modules = inject<RouteMenu[]>('app:modules', []);
</script>

<template>
  <q-drawer v-model="modelValue" show-if-above side="left">
    <sidebar-header class="q-mt-none" />
    <profile-widget class="q-my-md"></profile-widget>
    <q-scroll-area style="height: 75vh">
      <sidebar-list :items="modules" />
    </q-scroll-area>
    <div class="fixed-bottom full-width column items-center q-mb-sm">
      <theme-switcher v-if="false" v-model="darkMode" />
    </div>
  </q-drawer>
</template>
