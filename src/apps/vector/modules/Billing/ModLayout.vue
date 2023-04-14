<script setup lang="ts">
import { IModule } from '@/libs/IModule';

const moduleItems: Array<IModule> = [
  {
    title: 'Summary',
    icon: 'bi-upc-scan',
    name: 'vec.billing.summary',
    path: 'summary',
  },
  {
    title: 'Orders',
    icon: 'bi-upc-scan',
    name: 'vec.billing.order',
    path: 'order',
  },
  {
    title: 'Invoice',
    icon: 'bi-upc-scan',
    name: 'vec.billing.invoce',
    path: 'invoice',
  },
  {
    title: 'Overrides',
    icon: 'bi-upc-scan',
    name: 'vec.billing.override',
    path: 'override',
  },
  {
    title: 'Manifest',
    icon: 'bi-upc-scan',
    name: 'vec.billing.manifest',
    path: 'manifest',
  },
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <router-view />
  </layout-wrapper>
</template>
