<script setup lang="ts">
import { ref, withDefaults, defineProps } from 'vue';
import PanelToggle from './PanelToggle.vue';

const windowVisibility = ref(true);

// TODO: prop for minimum width
withDefaults(defineProps<{ height?: string; width?: string }>(), {
  height: '165px',
  width: '385px',
});
</script>

<template>
  <panel-toggle v-model="windowVisibility" type="closed" />
  <div v-show="windowVisibility" class="panel-wrapper border-radius-sm">
    <q-card
      class="panel-content no-padding border-radius-sm column justify-between no-scroll"
    >
      <!-- Panel contents -->
    </q-card>
    <panel-toggle v-model="windowVisibility" type="opened" />
  </div>
</template>

<style lang="scss" scoped>
.panel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.panel-content {
  width: v-bind(width);
  min-height: calc(100dvh - v-bind(height));
}
</style>
