<script setup lang="ts">
import { storeToRefs } from 'pinia';
import OnboardAsset from '@trace/base/assets/icons/banner/man-3.svg?url';
import LangSelector from '@trace/base/components/LangSelector.vue';
import GenericHeader from '@/app/GenericHeader.vue';
import BoardingFooter from '@/app.account/BoardingFooter.vue';
import SupportLinks from '@/app.account/SupportLinks.vue';
import { useServerStore } from '@/stores/app-server';

defineOptions({ name: 'WelcomeLayout' });

const serverStore = useServerStore();
const { getTenantName } = storeToRefs(serverStore);
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <div class="row fit" style="max-height: 100dvh">
        <q-card
          square
          fit
          class="gt-sm col-4 bg-primary window-height column justify-between"
        >
          <generic-header white :language="false"></generic-header>
          <div class="column justify-between q-px-lg q-py-sm">
            <div class="text-white text-h3 text-weight-medium">
              {{ $t('onboard.welcomeIntro') }}
            </div>
            <div class="text-white q-mr-lg">
              {{ `${getTenantName} ` + $t('onboard.welcomeDescription') }}
            </div>
          </div>
          <q-img
            no-native-menu
            no-spinner
            lazy
            :src="OnboardAsset"
            alt="Trace Asset"
            width="calc(28vw)"
          />
        </q-card>
        <q-card square fit class="col window-height">
          <q-layout>
            <q-header class="bg-transparent">
              <q-toolbar class="q-py-sm q-px-md gt-sm">
                <lang-selector />
                <q-space />
                <support-links></support-links>
              </q-toolbar>
              <generic-header class="lt-md"></generic-header>
            </q-header>
            <q-page-container class="q-pa-sm">
              <router-view />
            </q-page-container>
            <q-footer class="bg-transparent">
              <boarding-footer></boarding-footer>
            </q-footer>
          </q-layout>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>
