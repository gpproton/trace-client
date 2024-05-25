<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const UnderConstruction = defineAsyncComponent(() => import('@trace/base/components/error/UnderConstruction.vue'));

defineOptions({ name: 'GettingStarted' });
</script>

<template>
  <q-page class="fit page q-pa-sm" :padding="false">
    <under-construction />
  </q-page>
</template>
