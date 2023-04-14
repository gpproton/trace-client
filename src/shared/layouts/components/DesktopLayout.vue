<script setup lang="ts">
import { IProfile } from '@/libs/Account/Profile';
import { IModule } from '@/libs/IModule';
import { computed, ref, watch, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from '@/layouts/stores';
import MenuUser from '@/layouts/navigation/MenuUser.vue';
import ThemeSwitcher from '@/layouts/navigation/ThemeSwitcher.vue';
import ModuleNavigation from 'src/shared/layouts/navigation/ModuleNavigation.vue';

interface IProps {
  overviewItems: Array<IModule>;
  moduleItems: Array<IModule>;
  identityItems: Array<IModule>;
  userProfile: IProfile;
  rootAppItems: Array<IModule>;
}

const props = defineProps<IProps>();

const layoutStore = useLayoutStore();
const { drawerState, drawerMiniState } = storeToRefs(layoutStore);
const showIdentityMenu = ref(false);
const miniDrawer = computed(() => drawerMiniState.value);
const timeout = ref();

watch(miniDrawer, () => {
  timeout.value = setTimeout(() => {
    if (miniDrawer.value) showIdentityMenu.value = false;
  }, 500);
});

const setMiniDrawer = (value: boolean) => {
  drawerMiniState.value = value;
};

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>

<script lang="ts">
export default {
  name: 'DesktopLayout',
};
</script>

<template>
  <q-layout view="lHh lpR lfr" class="non-selectable hide-scrollbar">
    <div class="app-main-drawer">
      <q-drawer
        v-model="drawerState"
        show-if-above
        bordered
        :width="320"
        :mini-width="64"
        side="left"
        :mini="miniDrawer"
        mini-to-overlay
        @mouseover="setMiniDrawer(false)"
        @mouseout="setMiniDrawer(true)"
      >
        <q-scroll-area class="fit">
          <sidebar-desktop-header
            v-model="drawerMiniState"
            name="Trace Vector"
            :root-items="props.rootAppItems"
          ></sidebar-desktop-header>
          <module-navigation
            v-model="showIdentityMenu"
            :overview-items="props.overviewItems"
            :module-items="props.moduleItems"
            :identity-items="props.identityItems"
          ></module-navigation>
          <!-- Fixed navigation action -->
          <div class="fixed-bottom full-width column items-center q-mb-sm">
            <div v-show="!miniDrawer" class="q-mb-md">
              <q-btn
                v-show="showIdentityMenu"
                no-caps
                size="lg"
                color="primary"
                text-color="primary-inverted"
                icon="bi-box-arrow-in-right"
                label="Sign Out"
                class="full-width text-weight-thin border-radius-sm q-mx-md"
              ></q-btn>

              <theme-switcher v-show="!showIdentityMenu" />
            </div>

            <!-- App user widget for mini and normal state -->
            <menu-user
              v-show="miniDrawer"
              :mini="true"
              :profile="props.userProfile"
              class="q-mb-md"
            />
            <div
              @click="showIdentityMenu = !showIdentityMenu"
              class="full-width q-px-sm"
            >
              <menu-user
                v-show="!miniDrawer"
                :mini="false"
                :profile="props.userProfile"
                class="q-mb-sm"
              />
            </div>
          </div>
        </q-scroll-area>
      </q-drawer>
    </div>

    <!-- Module grid drawer -->
    <slot name="module-drawer"></slot>
    <slot name="header"></slot>
    <q-page-container class="bg-app-container hide-scrollbar">
      <slot>
        <router-view />
      </slot>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.q-drawer {
  border-radius: $border-radius-sm !important;
}
</style>
