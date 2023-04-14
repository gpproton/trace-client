<script setup lang="ts">
import { IModule } from 'src/shared/libs/Menu';

const moduleItems: Array<IModule> = [];
</script>

<script lang="ts">
export default {
  name: 'TrackLayout',
};
</script>

<template>
  <layout-wrapper :header="false" :module-items="moduleItems">
    <router-view />
  </layout-wrapper>
</template>
