<script setup lang="ts">
import { IModule } from '@/libs/IModule';

const moduleItems: Array<IModule> = [
  {
    name: 'vec.task.activities',
    title: 'Activities',
    icon: 'bi-list-check',
    path: 'activities',
  },
  {
    name: 'vec.task.timeline',
    title: 'Timeline',
    icon: 'bi-list-check',
    path: 'timeline',
  },
  {
    name: 'vec.task.history',
    title: 'History',
    icon: 'bi-list-check',
    path: 'history',
  },
  {
    name: 'vec.task.request',
    title: 'Request',
    icon: 'bi-list-check',
    path: 'request',
  },
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <router-view />
  </layout-wrapper>
</template>
