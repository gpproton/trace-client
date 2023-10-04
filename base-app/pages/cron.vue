<script setup lang="ts">
import { ref } from 'vue';
import { CronQuasar } from '@vue-js-cron/quasar';

definePageMeta({ name: 'cron' });
const expr = ref('* 0 * * *');
</script>

<template>
  <page-wrapper name="cron" layout="default" :options="{ title: 'Cron Test' }">
    <cron-quasar v-model="expr"></cron-quasar>
    <div class="q-ma-md">{{ expr }}</div>
  </page-wrapper>
</template>
