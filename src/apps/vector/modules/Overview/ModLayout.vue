<script setup lang="ts">
import { IModule } from '@/libs/IModule';

const moduleItems: Array<IModule> = [
  {
    title: 'Overview',
    name: 'vec.overview.dashboard',
    icon: 'bi-grid',
    path: 'dashboard',
  },
  {
    title: 'Trends',
    name: 'vec.overview.trends',
    icon: 'bi-compass',
    path: 'trends',
  },
];
</script>

<template>
  <!--
    <layout-wrapper :module-items="moduleItems">
    <layout-sub-wrapper :items="moduleSubItems">
      <div class="row justify-center items-start">
        <router-view />
      </div>
    </layout-sub-wrapper>
  </layout-wrapper>
  -->
  <layout-wrapper :module-items="moduleItems">
    <router-view />
  </layout-wrapper>
</template>
