<script setup lang="ts">
import type { IProfile } from '@trace/shared';
import SidebarList from '@/components/drawer/SidebarList.vue';
import SidebarHeader from '@/components/drawer/SidebarHeader.vue';
import SidebarUser from '@/components/drawer/SidebarUser.vue';
import ThemeSwitcher from '@/components/extra/ThemeSwitcher.vue';
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'DesktopSidebar' });

interface IProps {
  name: string;
  userProfile: IProfile;
  identityMenu: RouteMenu[];
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'Trace',
});
const { modelValue, darkMode, drawerMiniState, showIdentity, overviewMenu, secondaryMenu } = defineModels<{
  modelValue: boolean;
  darkMode: boolean;
  drawerMiniState: boolean;
  showIdentity: boolean;
  overviewMenu?: RouteMenu[];
  secondaryMenu: RouteMenu[];
}>();

const timeout = ref();
const setMiniDrawer = (value: boolean) => drawerMiniState.value = value;
const toggleIdentityMenu = () => showIdentity.value = !showIdentity.value;

watch(drawerMiniState, () => {
  timeout.value = setTimeout(() => {
    if (drawerMiniState.value) showIdentity.value = false;
  }, 250);
});
onUnmounted(() => clearTimeout(timeout.value));
</script>

<template>
  <q-drawer v-model="modelValue" show-if-above bordered :width="295" :mini-width="64" side="left" :mini="drawerMiniState"
    mini-to-overlay @mouseover="setMiniDrawer(false)" @mouseout="setMiniDrawer(true)">
    <sidebar-header v-model="drawerMiniState" class="q-mt-sm" :name="props.name" />
    <q-scroll-area class="fit fixed-bottom" style="padding-top: 96px; padding-bottom: 110px">
      <div v-show="!showIdentity">
        <!-- <sidebar-list :items="overviewMenu" /> -->
        <q-separator class="q-mx-sm" />
        <sidebar-list :items="secondaryMenu" />
      </div>
      <div v-show="showIdentity">
        <sidebar-list :items="identityMenu" />
      </div>
    </q-scroll-area>

    <!-- Fixed navigation action -->
    <div class="fixed-bottom full-width column items-center q-mb-sm">
      <div v-show="!drawerMiniState" class="full-width q-px-lg q-mb-md column items-center">
        <theme-switcher v-show="showIdentity" v-model="darkMode" />
        <q-btn v-show="showIdentity" no-caps size="lg" color="primary" text-color="primary-inverted"
          icon="bi-box-arrow-in-right" label="Sign Out" class="full-width text-weight-thin border-radius-sm q-my-md" />
      </div>
      <!-- App user widget for mini and normal state -->
      <sidebar-user @click="toggleIdentityMenu" $mini="drawerMiniState" :profile="userProfile"
        :class="drawerMiniState ? 'q-mb-sm' : 'full-width q-px-sm q-mb-sm'" />
    </div>
  </q-drawer>
</template>
