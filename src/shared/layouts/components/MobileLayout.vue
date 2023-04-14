<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { IProfile } from '@/libs/Account/Profile';
import { IModule } from '@/libs/IModule';
import { useLayoutStore } from '@/layouts/stores';
import MenuList from '@/layouts/navigation/MenuList.vue';
import MenuUser from '@/layouts/navigation/MenuUser.vue';
import ThemeSwitcher from '@/layouts/navigation/ThemeSwitcher.vue';
import MenuGridRoute from '@/layouts/navigation/MenuGridRoute.vue';
import { IMenu } from '@/libs/constants/Menu';

interface IProps {
  identityItems: Array<IModule>;
  userProfile: IProfile;
  rootAppItems: Array<IModule>;
}

const props = defineProps<IProps>();

const layoutStore = useLayoutStore();
const { drawerState } = storeToRefs(layoutStore);
</script>

<script lang="ts">
export default {
  name: 'MobileLayout',
};
</script>

<template>
  <q-layout view="lHh lpR fFf" class="non-selectable hide-scrollbar">
    <div class="app-main-drawer">
      <q-drawer
        :width="320"
        v-model="drawerState"
        overlay
        behavior="mobile"
        side="left"
      >
        <q-scroll-area class="fit q-px-sm column items-center">
          <div class="full-width q-mb-sm q-mt-lg q-mx-sm">
            <menu-user :mini="false" :profile="props.userProfile">
              <q-menu
                transition-show="scale"
                transition-hide="scale"
                anchor="center middle"
                self="center middle"
                class="shadow-0"
                @mouseover="drawerState = true"
                fit
              >
                <menu-grid-route :items="props.rootAppItems" />
              </q-menu>
            </menu-user>
          </div>
          <div class="q-pt-xl">
            <menu-list :mini="false" :items="props.identityItems as IMenu[]" />
          </div>
          <div class="fixed-bottom column items-center q-mb-lg q-px-lg">
            <div class="q-mb-lg">
              <theme-switcher></theme-switcher>
            </div>
            <q-btn
              no-caps
              size="lg"
              color="primary"
              text-color="primary-inverted"
              icon="bi-box-arrow-in-right"
              label="Sign Out"
              class="full-width text-weight-thin border-radius-sm"
            ></q-btn>
          </div>
        </q-scroll-area>
      </q-drawer>
    </div>
    <slot name="header"> </slot>

    <q-page-container class="bg-app-container">
      <slot>
        <router-view />
      </slot>
    </q-page-container>

    <slot name="footer"> </slot>
  </q-layout>
</template>
