<script setup lang="ts">
import { ref } from 'vue';
import { CronQuasar } from '@vue-js-cron/quasar';
const expr = ref('0 * * * *');
</script>

<template>
  <page-wrapper>
    <cron-quasar v-model="expr" />
    <div class="q-ma-md">
      {{ expr }}
    </div>

    <div v-permit="{ feature: 'default.0', type: 'read' }">
      Check Permission
    </div>
  </page-wrapper>
</template>
