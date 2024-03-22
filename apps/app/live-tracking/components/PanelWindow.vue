<script setup lang="ts">
import { ref } from 'vue';
import PanelToggle from './PanelToggle.vue';

const windowVisibility = ref(true);
</script>

<template>
  <panel-toggle v-model="windowVisibility" type="closed" />
  <div v-show="windowVisibility" class="panel-wrapper border-radius-sm">
    <q-card
      class="panel-content no-padding border-radius-sm column justify-between no-scroll"
    >
      <!-- Panel content-->
    </q-card>
    <panel-toggle v-model="windowVisibility" type="opened" />
  </div>
</template>

<style lang="scss" scoped>
.panel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.panel-content {
  width: 385px;
  min-height: calc(100vh - 175px);
  // max-height: calc(100vh - 96px);
}
</style>
