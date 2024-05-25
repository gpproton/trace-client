<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const PageError = defineAsyncComponent(() => import('./PageError.vue'));
defineOptions({ name: 'NotFound' });
</script>

<template>
  <page-error description="Not Found"></page-error>
</template>
