<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
import { useLayoutStore } from '@/stores/layout';
import { useThemeStore } from '@/stores/theme';
import type { IModule, IModuleCommands, ServiceVariant } from '@trace/shared';
import DesktopHeader from '@/components/header/DesktopHeader.vue';
import DesktopSidebar from '@/components/drawer/DesktopSidebar.vue';
import DesktopSecondarySidebar from '@/components/drawer/DesktopSecondarySidebar.vue';
import MobileHeader from '@/components/header/MobileHeader.vue';
import MobileBottomMenu from '@/components/footer/MobileBottomMenu.vue';
import { profileData } from '@trace/shared';
import RouterInject from '@/components/RouterInject.vue';
import { getRouteMenuByType } from '@trace/base/types';
import type { RouteMenu } from '@trace/base/typings';

const router = useRouter();
const route = router.currentRoute.value;
const modulesMenu: RouteMenu[] = getRouteMenuByType(router.options.routes, route.name, ['module', true]);
const featureMenu: RouteMenu[] = getRouteMenuByType(router.options.routes, route.name, [true]);
const mobileMenu: RouteMenu[] = [];
const mobileOverflowMenu: RouteMenu[] = [];

interface IProps {
  name?: string;
  workspace?: ServiceVariant;
}


const quickCreateItems: IModuleCommands[] = [
{
  name: 'action-1',
  title: 'Action 1',
  icon: 'bi-check-circle',
  command: '1',
},
{
  name: 'action-2',
  title: 'Action 2',
  icon: 'bi-file-earmark-text',
  path: 'sample-2',
  command: '2',
}
];
const identityItems: RouteMenu[] = [
    { title: 'shared.account', icon: 'bi-person', name: 'account.profile' },
    {
      title: 'shared.settings',
      icon: 'bi-gear-wide-connected',
      name: 'account.settings',
    },
    { title: 'shared.help', icon: 'bi-question-circle', name: 'help' },
];
const notificationTabs: IModule[] = [
    {
      name: '1',
      icon: '',
      title: 'Task',
    },
    {
      name: '2',
      icon: '',
      title: 'Unread',
    },
 ];

withDefaults(defineProps<IProps>(), {
  name: 'Trace',
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
</script>

<template>
  <q-layout view="lHr lpR fFf" @resize="setSize">
    <!-- TODO: re-evaluate desktop sidebar -->
    <slot name="desktop-sidebar">
      <desktop-sidebar v-if="isDesktop" v-model="showPrimarySidebar" v-model:dark-mode="isDark" :drawer-mini-state="primaryMiniState"
        v-model:show-identity="showIdentityList" :name="name" :identity-menu="identityItems" :secondary-menu="modulesMenu" :user-profile="profileData" @update:dark-mode="setThemeState" />
    </slot>
    <q-page-container>
      <q-layout view="lhr lpr lfr">
        <slot name="mobile-header">
          <mobile-header v-show="!isDesktop" v-model:title="title" v-model:search="search" />
        </slot>
        <!-- TODO: re-evaluate desktop header -->
        <slot name="desktop-header">
          <desktop-header v-show="isDesktop" v-model="showSecondarySidebar" $search="search" $title="title"
            v-model:show-title="showTitle" :quick-commands="quickCreateItems" :notification-tabs="notificationTabs" />
        </slot>
        <!-- TODO: re-evaluate desktop secondary sidebar -->
        <slot name="desktop-secondary-sidebar" v-if="isDesktop && featureMenu.length > 0">
          <desktop-secondary-sidebar :menu-items="featureMenu" v-model="showSecondarySidebar" $title="title" />
        </slot>

        <q-page-container class="bg-app-container">
          <slot>
            <router-inject />
          </slot>
        </q-page-container>
      </q-layout>
    </q-page-container>
    <!-- TODO: re-evaluate mobile navigation -->
    <slot name="mobile-bottom-menu">
      <mobile-bottom-menu style="display: none" :style="isMobile ? { display: 'flex' } : {}" :items="mobileMenu"
        :overflow-items="mobileOverflowMenu" />
    </slot>
  </q-layout>
</template>
