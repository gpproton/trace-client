<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useServerStore } from '@/stores/app-server';

const serverStore = useServerStore();
const { getAttribution, getAttributionUrl } = storeToRefs(serverStore);
</script>

<template>
  <div class="row q-pa-md q-gutter-x-sm">
    <div>
      {{ $t('shared.copyright') + ' @ ' }}
      <NuxtLink class="footer-link" :to="getAttributionUrl">{{
        getAttribution
      }}</NuxtLink>
    </div>
    <span>|</span>
    <NuxtLink class="footer-link" to="/privacy-policy">
      {{ $t('shared.privacyPolicy') }}
    </NuxtLink>
  </div>
</template>
