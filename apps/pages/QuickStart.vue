<script setup lang="ts">
import { routes } from '@/app/router.options';
import { getRouteParent } from '@trace/base/types';

defineOptions({ name: 'QuickStart' });

const triggerTest = () => {
  const test = getRouteParent(routes, 'app.testing');

  console.log(test);
}
</script>

<template>
  <page-wrapper>
    <div>{{ 'Quick Start' }}</div>
    <q-btn @click="triggerTest" color="primary" label="Testing"></q-btn>
  </page-wrapper>
</template>
