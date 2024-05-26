<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const AppRoot = defineAsyncComponent(() => import('@/components/AppRoot.vue'));
</script>

<template>
  <app-root />
</template>
