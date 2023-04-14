<script setup lang="ts">
import { toRefs } from 'vue';
import { useQuasar } from 'quasar';
import { sampleUserProfile } from '@/libs/Account/Profile';
import VectorMenu from '@/vector/Menu';
import { layoutState } from '@/layouts/composables/Layout';
import DesktopLayout from '@/layouts/components/DesktopLayout.vue';
import MobileLayout from '@/layouts/components/MobileLayout.vue';
import HeaderLarge from '@/layouts/header/HeaderLarge.vue';
import HeaderMobile from '@/layouts/header/HeaderMobile.vue';
import TabMobile from '@/layouts/navigation/TabMobile.vue';

const $q = useQuasar();
const { showHeader } = toRefs(layoutState);
</script>

<script lang="ts">
export default {
  name: 'AppLayout',
};
</script>

<template>
  <mobile-layout
    v-if="$q.platform.is.mobile"
    :identity-items="VectorMenu.identity"
    :user-profile="sampleUserProfile"
    :root-app-items="VectorMenu.apps"
  >
    <template #header>
      <header-mobile
        :quick-commands="VectorMenu.quick"
        :module-list="VectorMenu.mobileStrings"
      ></header-mobile>
    </template>
    <slot>
      <router-view></router-view>
    </slot>
    <template #footer>
      <tab-mobile
        :tab-items="VectorMenu.mobileMenu"
        :tab-extended-items="VectorMenu.mobileMenuExtended"
      ></tab-mobile>
    </template>
  </mobile-layout>

  <desktop-layout
    v-else
    :overview-items="VectorMenu.overview"
    :module-items="VectorMenu.menu"
    :identity-items="VectorMenu.identity"
    :user-profile="sampleUserProfile"
    :root-app-items="VectorMenu.apps"
  >
    <template #header>
      <header-large
        v-show="showHeader"
        :quick-commands="VectorMenu.quick"
      ></header-large>
    </template>
    <slot>
      <router-view></router-view>
    </slot>
  </desktop-layout>
</template>
