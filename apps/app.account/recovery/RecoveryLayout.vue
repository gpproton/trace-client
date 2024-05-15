<script lang="ts" setup>
import TwoFactor from '@trace/base/icons/banner/two-factor-authentication.svg?url';
import AppLogo from '@trace/base/icons/logo.svg';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header :elevated="false" class="bg-transparent" height-hint="64">
      <q-toolbar class="text-primary q-pa-xs q-mx-sm">
        <app-logo class="app-logo" />
        <q-toolbar-title class="text-h5 text-weight-bold">
          {{ 'Trace' }}
        </q-toolbar-title>
        <q-space />
        <lang-selector class="q-mr-md" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="fit page q-pa-xs column justify-center items-center">
        <q-card class="row content-card">
          <q-card
            square
            flat
            class="col-6 gt-sm bg-app-background hide-scrollbar"
          >
            <q-img
              no-native-menu
              no-spinner
              :src="TwoFactor"
              alt="Trace Lighthouse"
              width="calc(32vw)"
              class="absolute-center"
            />
          </q-card>
          <q-card square flat class="full-height col column justify-between items-center">
            <q-card class="full-width full-height q-pa-sm row justify-center items-center">
              <router-view />
              <div class="row q-pa-sm q-gutter-x-sm">
              <div>
                {{ $t('shared.copyright') + ' @ ' }}
                <NuxtLink class="footer-link" to="https://drolx.com">{{
                  'drolx Labs'
                }}</NuxtLink>
              </div>
              <div>|</div>
              <NuxtLink class="footer-link" to="#">
                {{ $t('shared.privacyPolicy') }}
              </NuxtLink>
            </div>
            </q-card>
          </q-card>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.content-card {
  min-width: calc(100vw - 300px);
  height: 65vh;

  @media screen and (max-width: $breakpoint-md-min) {
    width: 90vw;
    height: 75vh;
  }
}
</style>
