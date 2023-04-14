<script setup lang="ts">
import { IModule } from '@/libs/IModule';

const moduleItems: Array<IModule> = [
  {
    title: 'Summary',
    icon: 'bi-hdd-stack',
    name: 'vec.resource.summary',
    path: 'summary',
  },
  {
    title: 'Locations',
    icon: 'bi-hdd-stack',
    name: 'vec.resource.location',
    path: 'location',
  },
  {
    title: 'Routes',
    icon: 'bi-hdd-stack',
    name: 'vec.resource.route',
    path: 'route',
  },
  {
    title: 'Assets',
    icon: 'bi-hdd-stack',
    name: 'vec.resource.asset',
    path: 'asset',
  },
  {
    title: 'Products',
    icon: 'bi-hdd-stack',
    name: 'vec.resource.product',
    path: 'product',
  },
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <router-view />
  </layout-wrapper>
</template>
