<script setup lang="ts">
import { IModule } from '@/libs/IModule';

const moduleItems: Array<IModule> = [];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <q-page class="row items-start justify-center">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
