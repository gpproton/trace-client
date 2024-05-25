<script lang="ts" setup>
import TwoFactor from '@trace/base/assets/banner/two-factor-authentication.svg?url';
import GenericHeader from '@/app/GenericHeader.vue';
import GenericFooter from '@/app/GenericFooter.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header :elevated="false" class="bg-transparent" height-hint="64">
      <generic-header></generic-header>
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
              lazy
              :src="TwoFactor"
              alt="Trace Lighthouse"
              width="calc(32vw)"
              class="absolute-center"
            />
          </q-card>
          <q-card square flat class="full-height col">
            <q-card class="full-height q-pa-sm row justify-center items-center">
              <router-view />
            </q-card>
          </q-card>
        </q-card>
        <generic-footer></generic-footer>
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
