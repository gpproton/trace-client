<script setup lang="ts">
import UnderConstruction from '@trace/base/components/error/UnderConstruction.vue';

defineOptions({ name: 'Home' });
</script>

<template>
  <q-page class="fit page q-pa-sm" :padding="false">
    <under-construction />
  </q-page>
</template>
