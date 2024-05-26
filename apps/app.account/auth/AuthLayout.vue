<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import LightHouse from '@trace/base/assets/banner/lighthouse.svg?url';

const GenericHeader = defineAsyncComponent(
  () => import('@/app/GenericHeader.vue'),
);
const GenericFooter = defineAsyncComponent(
  () => import('@/app/GenericFooter.vue'),
);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row fit" style="max-height: 100dvh">
        <q-card square flat class="col window-height column justify-between">
          <generic-header></generic-header>
          <q-card class="full-width relative-position">
            <!-- Render page content here -->
            <router-view class="absolute-center" />
          </q-card>
          <generic-footer></generic-footer>
        </q-card>
        <div class="col-6 gt-sm window-height q-pa-md">
          <q-card
            square
            flat
            class="full-height bg-background-shift hide-scrollbar border-radius-lg"
          >
            <q-img
              no-native-menu
              no-spinner
              :src="LightHouse"
              alt="Trace Lighthouse"
              width="calc(32vw)"
              class="absolute-center"
            />
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
