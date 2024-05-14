<script setup lang="ts">
import LightHouse from '@trace/base/icons/banner/lighthouse.svg?url';
import AppLogo from '@trace/base/icons/logo.svg';
import LangSelector from '@trace/base/components/LangSelector.vue';

defineOptions({ name: 'AuthLayout' });
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row fit" style="max-height: 100dvh">
        <q-card square flat class="col window-height column justify-between">
          <q-toolbar class="text-primary q-pa-xs q-mx-sm">
            <app-logo class="app-logo" />
            <q-toolbar-title class="text-h5 text-weight-bold">
              {{ 'Trace' }}
            </q-toolbar-title>
            <q-space />
            <lang-selector class="q-mr-md" />
          </q-toolbar>
          <q-card class="full-width relative-position">
            <!-- Render page content here -->
            <router-view class="absolute-center" />
          </q-card>
          <div class="row q-pa-sm q-gutter-x-md">
            <div>
              {{ $t('shared.copyright') + ' @ ' }}
              <NuxtLink class="footer-link" to="https://drolx.com">{{
                'drolx Labs'
              }}</NuxtLink>
            </div>
            <div>|</div>
            <NuxtLink class="footer-link" to="/privacy-policy">
              {{ $t('shared.privacyPolicy') }}
            </NuxtLink>
          </div>
        </q-card>
        <q-card
          square
          flat
          class="col-6 gt-sm window-height bg-primary hide-scrollbar"
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
    </q-page-container>
  </q-layout>
</template>
