<script setup lang="ts">
import AppLogo from '@trace/base/assets/icons/logo.svg';
import { appConstants } from '@trace/shared';

const links = [
  {
    name: 'home',
    label: 'router.home',
  },
  {
    name: 'pricing',
    label: 'router.pricing',
  },
  {
    name: 'solutions',
    label: 'router.solutions',
  },
  {
    name: 'contact',
    label: 'shared.contact',
  },
];
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-white text-white q-pa-md">
      <q-toolbar>
        <app-logo class="app-logo" />
        <q-toolbar-title class="text-h5 text-primary text-weight-bold">
          {{ appConstants.appName }}
        </q-toolbar-title>
        <q-space />
        <q-tabs
          no-caps
          shrink
          stretch
          content-class="gt-sm text-primary q-mr-lg"
        >
          <q-route-tab
            v-for="(link, index) in links"
            :key="index"
            exact
            :to="{ name: link.name }"
            :name="link.name"
            class="text-body1 border-radius-sm gt-sm"
            >{{ $t(link.label) }}</q-route-tab
          >
        </q-tabs>
        <q-btn
          unelevated
          no-caps
          size="lg"
          :to="{ name: 'getting-started' }"
          class="border-radius-sm gt-sm"
          color="primary"
          >{{ $t('router.getStarted') }}</q-btn
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <slot>
        <router-view />
      </slot>
    </q-page-container>
    <q-footer class="bg-secondary text-white q-pa-md">
      <div>
        {{ 'All right reserved' + ' @' }}
        <NuxtLink class="footer-link" :to="appConstants.website">{{
          appConstants.company
        }}</NuxtLink>
      </div>
    </q-footer>
  </q-layout>
</template>
