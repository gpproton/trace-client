<script setup lang="ts">
import {  getRouteParent, getRouteMenuByType, getMenusByNames } from '@trace/base/types';
import type { Route } from '@trace/base/typings';

const router = useRouter();
const route = useRoute();

defineOptions({ name: 'OverviewDashboard' });

const triggerTest = () => {
  const routes = router.options.routes as Route[];
  // const result = getRouteMenuByType(routes, route.name, true);
  const result = getRouteMenuByType(routes, route.name, true);
  console.log(result);
};
</script>

<template>
  <page-wrapper>
    <div>{{ 'Overview.Dashboard' }}</div>
    <q-btn @click="triggerTest" color="primary" label="Testing"></q-btn>
  </page-wrapper>
</template>
