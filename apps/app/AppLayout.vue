<script setup lang="ts">
import { provide } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
import { useLayoutStore } from '@/stores/layout';
import { useLayoutRouteStore } from '@/composables/layout-routes';
import { useThemeStore } from '@/stores/theme';
import type { IModuleCommands, Workspace } from '@trace/shared';
import DesktopHeader from '@/components/header/DesktopHeader.vue';
import DesktopSidebar from '@/components/drawer/DesktopSidebar.vue';
import DesktopSecondarySidebar from '@/components/drawer/DesktopSecondarySidebar.vue';
import MobileHeader from '@/components/header/MobileHeader.vue';
import MobileSidebar from '@/components/drawer/MobileSidebar.vue';
// import MobileBottomMenu from '@/components/footer/MobileBottomMenu.vue';
// import RouterInject from '@/components/RouterInject.vue';
import type { RouteMenu } from '@trace/base/typings';

interface IProps {
  mouseOver?: boolean;
  workspace: Workspace;
  overviewFilter?: string[];
  mobileFilter?: string[];
}

const props = withDefaults(defineProps<IProps>(), {
  mouseOver: true,
  overviewFilter: () => [],
  mobileFilter: () => [],
});
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
} = storeToRefs(layoutStores);
const { isDesktop, isMobile } = storeToRefs(breakpointStates);
const { isDark } = storeToRefs(theme);
const { setSize } = breakpointStates;
const { initializeTheme, setThemeState } = theme;

// TODO: Move theme trigger to app-root
initializeTheme();
const mobileSidebarRef = ref(false);
const modulesMenu = computed<RouteMenu[]>(() => modulesMenuFn());
const moduleFeatures = computed<RouteMenu[]>(() => moduleFeaturesFn());
const showSecondaryToggle = computed(() => moduleFeatures.value.length > 0);
watchEffect(() => {
  showSecondarySidebar.value = moduleFeatures.value.length > 0;
});
const workspaceValue = computed(() => props.workspace);
const mouseTriggerValue = shallowRef(props.mouseOver);
const overviewModuleMenu = computed(() =>
  modulesMenu.value.filter(
    (e) =>
      e.name !== undefined && props.overviewFilter.includes(e.name as string),
  ),
);
const generalModuleMenu = computed(() =>
  modulesMenu.value.filter(
    (e) =>
      e.name !== undefined && !props.overviewFilter.includes(e.name as string),
  ),
);

provide('app:workspace', workspaceValue);
provide('app:modules', modulesMenu);
provide('app:modules-features', moduleFeatures);
provide('app:overview-modules', overviewModuleMenu);
provide('app:general-modules', generalModuleMenu);
provide('app:sidebar-mouse', mouseTriggerValue);

defineExpose({
  modulesMenu,
  overviewModuleMenu,
  generalModuleMenu,
});

const quickCreateItems: IModuleCommands[] = [
  {
    name: 'action-1',
    title: 'Action 1',
    icon: 'bi-check-circle',
    command: '1',
  },
];
</script>

<template>
  <q-layout view="lHr lpR fFf" class="no-scroll" @resize="setSize">
    <!-- Mobile layout contents -->
    <slot v-if="isMobile" name="mobile-sidebar">
      <mobile-sidebar v-model="mobileSidebarRef" v-model:dark-mode="isDark" />
    </slot>
    <slot v-if="isMobile" name="mobile-header">
      <mobile-header
        v-model:title="title"
        v-model:search="search"
        v-model="mobileSidebarRef"
      />
    </slot>
    <q-page-container v-if="isMobile" class="no-scroll">
      <slot>
        <router-view />
      </slot>
    </q-page-container>
    <!-- TODO: re-evaluate mobile navigation -->
    <!--
      <slot v-if="isMobile" name="mobile-bottom-menu">
      <mobile-bottom-menu
        v-model:modules="modulesMenu"
        style="display: none"
        :style="isMobile ? { display: 'flex' } : {}"
        :overflow-filters="mobileFilter"
      />
    </slot>
    -->

    <!-- Desktop layout contents -->
    <slot name="desktop-sidebar">
      <desktop-sidebar
        v-if="isDesktop"
        v-model="showPrimarySidebar"
        v-model:dark-mode="isDark"
        v-model:modules="modulesMenu"
        :drawer-mini-state="primaryMiniState"
        :mouse-over="mouseOver"
        :overview-filter="overviewFilter"
        @update:dark-mode="setThemeState"
      >
        <template #start>
          <slot name="sidebar-start"></slot>
        </template>
        <template #bottom>
          <slot name="sidebar-bottom"></slot>
        </template>
      </desktop-sidebar>
    </slot>
    <!-- Desktop and page content -->
    <q-page-container v-if="isDesktop" class="no-scroll">
      <q-layout view="hHh lpR fFf">
        <slot name="desktop-header">
          <desktop-header
            v-model="showSecondarySidebar"
            v-model:show-secondary-sidebar-toogle="showSecondaryToggle"
            v-model:search="search"
            :quick-commands="quickCreateItems"
          />
        </slot>
        <slot v-if="moduleFeatures.length > 0" name="desktop-secondary-sidebar">
          <desktop-secondary-sidebar
            v-model="showSecondarySidebar"
            :menu-items="moduleFeatures"
          />
        </slot>
        <q-page-container class="bg-app-container no-scroll">
          <slot>
            <router-view />
          </slot>
        </q-page-container>
      </q-layout>
    </q-page-container>
  </q-layout>
</template>
