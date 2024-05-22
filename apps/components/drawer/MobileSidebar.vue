<script setup lang="ts">
import SidebarList from '@/components/drawer/SidebarList.vue';
import ThemeSwitcher from '@/components/extra/ThemeSwitcher.vue';
import SidebarHeader from '@/components/drawer/SidebarHeader.vue';
import ProfileWidget from '@/components/extra/ProfileWidget.vue';
import type { RouteMenu } from '@trace/base/typings';
import { inject } from 'vue';

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
