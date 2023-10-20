<script setup lang="ts">
import AppLogo from '@/icons/logo.svg';
import LightHouse from '@/icons/lighthouse.svg?url';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row fit" style="max-height: 100vh">
        <q-card
          class="col no-border no-shadow window-height column justify-between"
        >
          <q-toolbar class="text-primary q-pa-xs">
            <!-- <app-logo
              style="height: 48px; width: 48px"
              class="text-primary border-radius-sm"
            />
            <q-toolbar-title class="text-h4 text-weight-bold">
              {{ 'Trace' }}
            </q-toolbar-title> -->
          </q-toolbar>
          <q-card class="full-width relative-position">
            <!-- Render page content here -->
            <router-view class="absolute-center" />
          </q-card>
          <div class="row q-pa-sm q-gutter-x-md">
            <div class="text-primary">
              {{ `Copyright @Trace ${new Date().getFullYear()}` }}
            </div>
            <div>|</div>
            <div class="text-primary">
              {{ 'Privacy policy' }}
            </div>
          </div>
        </q-card>
        <q-card
          class="col-6 gt-sm no-border window-height no-shadow bg-primary hide-scrollbar"
        >
          <q-img
            no-native-menu
            no-spinner
            :src="LightHouse"
            alt="Trace Lighthouse"
            width="calc(38vw)"
            class="absolute-center"
          />
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.app-logo {
  width: 96px;
  height: 96px;
  fill: white;
  border-radius: $border-radius-sm;
}
</style>
