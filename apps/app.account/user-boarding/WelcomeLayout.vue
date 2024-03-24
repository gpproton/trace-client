<script setup lang="ts">
import AppLogo from '@trace/base/icons/logo.svg';
import OnboardAsset from '@trace/base/icons/banner/man-3.svg?url';
import LangSelector from '@trace/base/components/LangSelector.vue';
import links from './layout-routes';

defineOptions({ name: 'WelcomeLayout' });

const intro = `A few clicks away from maximum cohesiveness.`;
const extraInfo =
  'Trace allows full transportation digitization allowing adaptation to workflow/process';
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <div class="row fit" style="max-height: 100vh">
        <q-card
          square
          fit
          class="gt-sm col-4 bg-primary window-height column justify-between"
        >
          <q-toolbar class="q-px-md">
            <app-logo class="welcome-logo" />
            <q-toolbar-title class="text-h5 text-white text-weight-bold">
              {{ 'Trace' }}
            </q-toolbar-title>
          </q-toolbar>
          <div class="column justify-between q-px-lg q-py-sm">
            <div class="text-white text-h3 text-weight-medium">{{ intro }}</div>
            <div class="text-white q-mr-lg">{{ extraInfo }}</div>
          </div>
          <q-img
            no-native-menu
            no-spinner
            :src="OnboardAsset"
            alt="Trace Asset"
            width="calc(28vw)"
          />
        </q-card>
        <q-card square fit class="col window-height column justify-between">
          <q-toolbar class="q-py-sm q-px-md">
            <lang-selector />
            <q-space />
            <q-tabs no-caps shrink stretch content-class="text-primary">
              <q-route-tab
                v-for="(link, index) in links"
                :key="index"
                :to="{ name: link.name }"
                :name="link.name"
                class="text-body1 border-radius-sm"
                >{{ $t(link.label) }}</q-route-tab
              >
            </q-tabs>
          </q-toolbar>
          <div class="q-pa-sm col-10">
            <router-view />
          </div>
          <div class="row q-py-md">
            <div class="q-px-lg">
              <span>{{ 'Already have an account?' }}</span>
              <nuxt-link
                class="text-body1 text-primary q-ml-sm text-capitalize"
                :to="{ name: 'auth.sign-in' }"
              >
                {{ $t('auth.signIn') }}
              </nuxt-link>
            </div>
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.welcome-logo {
  height: 38px;
  width: 38px;
  :deep(path) {
    fill: #fff !important;
  }
}
</style>
