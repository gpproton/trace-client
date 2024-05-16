<script setup lang="ts">
import OnboardAsset from '@trace/base/icons/banner/man-3.svg?url';
import LangSelector from '@trace/base/components/LangSelector.vue';
import GenericHeader from '@/app/GenericHeader.vue';
import BoardingFooter from '@/app.account/BoardingFooter.vue';
import SupportLinks from '@/app.account/SupportLinks.vue';

defineOptions({ name: 'WelcomeLayout' });
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
              {{ $t('onboard.welcomeDescription') }}
            </div>
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
          <q-toolbar class="q-py-sm q-px-md gt-sm">
            <lang-selector />
            <q-space />
            <support-links></support-links>
          </q-toolbar>
          <generic-header class="lt-md"></generic-header>
          <div class="q-pa-sm col-10">
            <router-view />
          </div>
          <boarding-footer></boarding-footer>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>
