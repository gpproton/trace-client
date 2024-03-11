<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
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
const layoutStores = useLayoutStore();
const theme = useThemeStore();

const {
  title,
  search,
  showPrimarySidebar,
  primaryMiniState,
  showSecondarySidebar,
  showIdentityList,
} = storeToRefs(layoutStores);

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
]);
</script>

<template>
  <q-layout view="lHr lpR fFf" @resize="setSize">
    <!-- TODO: re-evaluate desktop sidebar -->
    <!-- <slot name="desktop-sidebar">
      <desktop-sidebar v-if="isDesktop" $="showPrimarySidebar" $dark-mode="isDark" :drawer-mini-state="primaryMiniState"
        $show-identity="showIdentityList" :name="name" :identity-menu="identityItems" :overview-menu="overviewItems"
        :secondary-menu="items" :user-profile="userProfile" @update:dark-mode="setThemeState" />
    </slot> -->
    <q-page-container>
      <!-- Check inner layout -->
      <q-layout view="lhr lpr lfr">
        <slot name="mobile-header">
          <mobile-header v-show="!isDesktop" $title="title" $search="search" />
        </slot>
        <!-- TODO: re-evaluate desktop header -->
        <!-- <slot name="desktop-header">
          <desktop-header v-show="isDesktop" $="showSecondarySidebar" $search="search" $title="title"
            $show-title="showTitle" :header-menu="headerMenu" :app-sections="serviceItems"
            :quick-commands="quickCreateItems" :notification-tabs="notificationTabs" />
        </slot> -->

        <!-- TODO: re-evaluate desktop secondary sidebar -->
        <!-- <slot name="desktop-secondary-sidebar">
          <desktop-secondary-sidebar v-if="isDesktop && secondaryItemList.length > 0" $="showSecondarySidebar"
            $items="secondaryItemList" $title="title" />
        </slot> -->

        <q-page-container class="bg-app-container">
          <slot />
        </q-page-container>
      </q-layout>
    </q-page-container>
    <!-- TODO: re-evaluate mobile navigation -->
    <!-- <slot name="mobile-bottom-menu">
      <mobile-bottom-menu style="display: none" :style="isMobile ? { display: 'flex' } : {}" :items="mobileItems"
        :overflow-items="mobileOverviewItems" />
    </slot> -->
  </q-layout>
</template>
