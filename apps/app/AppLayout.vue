<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { provide } from 'vue';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
import { useLayoutStore } from '@/stores/layout';
import { useLayoutRouteStore } from '@/composables/layout-routes';
import { useThemeStore } from '@/stores/theme';
import type { IModule, IModuleCommands, ServiceVariant } from '@trace/shared';
import DesktopHeader from '@/components/header/DesktopHeader.vue';
import DesktopSidebar from '@/components/drawer/DesktopSidebar.vue';
import DesktopSecondarySidebar from '@/components/drawer/DesktopSecondarySidebar.vue';
import MobileHeader from '@/components/header/MobileHeader.vue';
import MobileBottomMenu from '@/components/footer/MobileBottomMenu.vue';
import { profileData } from '@trace/shared';
import RouterInject from '@/components/RouterInject.vue';
import type { RouteMenu } from '@trace/base/typings';

interface IProps {
  workspace: ServiceVariant;
  overviewFilter?: string[];
  mobileFilter?: string[];
}

const breakpointStates = useAppBreakpoints();
const layoutStores = useLayoutStore();
const theme = useThemeStore();

const { modulesMenuFn, moduleFeaturesFn } = useLayoutRouteStore();

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

// TODO: Move theme trigger to app-root
initializeTheme();

const modulesMenu = computed<RouteMenu[]>(() => modulesMenuFn());
const moduleFeatures = computed<RouteMenu[]>(() => moduleFeaturesFn());
const showSecondaryToggle = computed(() => moduleFeatures.value.length > 0);
watchEffect(() => {
  showSecondarySidebar.value = moduleFeatures.value.length > 0;
});

const mobileMenu: RouteMenu[] = [];
const mobileOverflowMenu: RouteMenu[] = [];
const props = withDefaults(defineProps<IProps>(), {
  overviewFilter: () => [],
  mobileFilter: () => [],
});

const workspaceValue = computed(() => props.workspace);
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
  },
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
</script>

<template>
  <q-layout view="lHr lpR fFf" @resize="setSize">
    <!-- TODO: re-evaluate desktop sidebar -->
    <slot name="desktop-sidebar">
      <desktop-sidebar
        v-if="isDesktop"
        v-model:workspace="workspaceValue"
        v-model="showPrimarySidebar"
        v-model:dark-mode="isDark"
        v-model:show-identity="showIdentityList"
        v-model:modules="modulesMenu"
        :drawer-mini-state="primaryMiniState"
        :identity-menu="identityItems"
        :user-profile="profileData"
        :overview-filter="overviewFilter"
        @update:dark-mode="setThemeState"
      />
    </slot>
    <q-page-container>
      <q-layout view="lhr lpr lfr">
        <slot name="mobile-header">
          <mobile-header
            v-show="!isDesktop"
            v-model:title="title"
            v-model:search="search"
          />
        </slot>
        <!-- TODO: re-evaluate desktop header -->
        <slot name="desktop-header">
          <desktop-header
            v-show="isDesktop"
            v-model="showSecondarySidebar"
            v-model:show-secondary-sidebar-toogle="showSecondaryToggle"
            v-model:search="search"
            :quick-commands="quickCreateItems"
            :notification-tabs="notificationTabs"
          />
        </slot>
        <!-- TODO: re-evaluate desktop secondary sidebar -->
        <slot
          v-if="isDesktop && moduleFeatures.length > 0"
          name="desktop-secondary-sidebar"
        >
          <desktop-secondary-sidebar
            v-model="showSecondarySidebar"
            :menu-items="moduleFeatures"
          />
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
      <mobile-bottom-menu
        style="display: none"
        :style="isMobile ? { display: 'flex' } : {}"
        :items="mobileMenu"
        :overflow-items="mobileOverflowMenu"
      />
    </slot>
  </q-layout>
</template>
