<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const NotFound = defineAsyncComponent(
  () => import('@/components/error/NotFound.vue'),
);

defineOptions({ name: 'NotFoundPage' });
</script>

<template>
  <page-wrapper>
    <not-found />
  </page-wrapper>
</template>
