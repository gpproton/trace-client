<script setup lang="ts">
import LightHouse from '@/icons/lighthouse.svg?url';
import AppLogo from '@/icons/logo.svg';
import LangSelector from '@/components/extra/LangSelector.vue';

defineOptions({ name: 'AuthLayout' });
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row fit" style="max-height: 100vh">
        <q-card class="col no-border no-shadow window-height column justify-between">
          <q-toolbar class="text-primary q-pa-xs q-mx-sm">
            <app-logo style="height: 38px; width: 38px; fill: var(--q-primary)" class="border-radius-sm text-primary" />
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
            <div class="text-primary">
              {{
                `${$t('shared.copyright')} @Trace ${new Date().getFullYear()}`
              }}
            </div>
            <div>|</div>
            <div class="text-primary">
              {{ $t('shared.privacyPolicy') }}
            </div>
          </div>
        </q-card>
        <q-card class="col-6 gt-sm no-border window-height no-shadow bg-primary hide-scrollbar">
          <q-img no-native-menu no-spinner :src="LightHouse" alt="Trace Lighthouse" width="calc(38vw)"
            class="absolute-center" />
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
