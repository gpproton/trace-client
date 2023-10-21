<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppBreakpoints } from '@/composables/breakpoints';
import { useLayoutStore } from '@/stores/layout';
import { useThemeStore } from '@/stores/theme';
import type { IModule, IProfile } from '@trace/shared';
import DesktopHeader from '@/components/header/DesktopHeader.vue';
import DesktopSidebar from '@/components/drawer/DesktopSidebar.vue';
import DesktopSecondarySidebar from '@/components/drawer/DesktopSecondarySidebar.vue';
import MobileHeader from '@/components/header/MobileHeader.vue';
import MobileBottomMenu from '@/components/footer/MobileBottomMenu.vue';

interface IProps {
  name: string;
  userProfile: IProfile;
  items: IModule[];
  overviewItems: IModule[];
  identityItems: IModule[];
  serviceItems: IModule[];
  quickCreateItems: IModule[];
  mobileItems: IModule[];
  mobileOverviewItems: IModule[];
  notificationTabs: IModule[];
}

withDefaults(defineProps<IProps>(), {
  name: 'Trace Default',
  items: () => [],
  overviewItems: () => [],
  identityItems: () => [],
  serviceItems: () => [],
  quickCreateItems: () => [],
  mobileItems: () => [],
  mobileOverviewItems: () => [],
  notificationTabs: () => [],
});

const showTitle = ref(true);
const breakpointStates = useAppBreakpoints();
const layout = useLayoutStore();
const theme = useThemeStore();

const {
  title,
  search,
  showPrimarySidebar,
  primaryMiniState,
  showSecondarySidebar,
  showIdentityList,
} = storeToRefs(layout);

const { isDesktop, isMobile } = storeToRefs(breakpointStates);
const { isDark } = storeToRefs(theme);
const { setSize } = breakpointStates;
const { initializeTheme, setThemeState } = theme;
initializeTheme();

const headerMenu: IModule[] = [
  {
    title: 'router.home',
    name: 'home',
    icon: 'bi-grid',
    path: '/',
  },
  {
    title: 'router.testing',
    name: 'app.testing',
    icon: 'bi-0-square',
    path: '/testing',
  },
  {
    title: 'router.quick-start',
    name: 'quick-start',
    icon: 'bi-0-square',
    path: '/testing',
  },
];

const secondaryItemList = ref<IModule[]>([
  {
    name: 'content-00',
    icon: 'bi-0-square',
    title: 'Content 00',
    separator: false,
  },
  {
    name: 'content-01',
    icon: 'bi-0-square',
    title: 'Content 01',
    separator: true,
  },
  {
    name: 'content-02',
    icon: 'bi-0-square',
    title: 'Content 02',
    separator: false,
  },
  {
    name: 'preview-0x',
    icon: 'bi-0-square',
    title: 'Preview 0x',
    separator: false,
    items: [
      {
        name: 'preview-00',
        icon: 'bi-0-square',
        title: 'Preview 00',
        separator: false,
      },
      {
        name: 'preview-01',
        icon: 'bi-1-square',
        title: 'Preview 11',
        separator: false,
      },
    ],
  },
  {
    name: 'content-11',
    icon: 'bi-1-square',
    color: 'primary',
    title: 'Content 11',
    separator: false,
  },
]);
</script>

<template>
  <q-layout view="lHr lpR fFf" @resize="setSize">
    <slot name="desktop-sidebar">
      <desktop-sidebar v-if="isDesktop" v-model="showPrimarySidebar" v-model:dark-mode="isDark"
        v-model:drawer-mini-state="primaryMiniState" v-model:show-identity="showIdentityList" :name="name"
        :identity-menu="identityItems" :overview-menu="overviewItems" :secondary-menu="items" :user-profile="userProfile"
        @update:dark-mode="setThemeState" />
    </slot>
    <q-page-container>
      <!-- Check inner layout -->
      <q-layout view="lhr lpr lfr">
        <slot name="mobile-header">
          <mobile-header v-show="!isDesktop" v-model:title="title" v-model:search="search" />
        </slot>

        <slot name="desktop-header">
          <desktop-header v-show="isDesktop" v-model="showSecondarySidebar" v-model:search="search" v-model:title="title"
            v-model:show-title="showTitle" :header-menu="headerMenu" :app-sections="serviceItems"
            :quick-commands="quickCreateItems" :notification-tabs="notificationTabs" />
        </slot>
        <slot name="desktop-secondary-sidebar">
          <desktop-secondary-sidebar v-if="isDesktop && secondaryItemList.length > 0" v-model="showSecondarySidebar"
            v-model:items="secondaryItemList" v-model:title="title" />
        </slot>

        <q-page-container class="bg-app-container">
          <slot />
        </q-page-container>
      </q-layout>
    </q-page-container>
    <!-- Mobile standard navigation menu -->
    <slot name="mobile-bottom-menu">
      <mobile-bottom-menu v-show="isMobile" :items="mobileItems" :overflow-items="mobileOverviewItems" />
    </slot>
  </q-layout>
</template>
