<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMapState } from './stores';
import MapBasic from './MapBasic.vue';
import ButtonObjectToggle from './ButtonObjectToggle.vue';

const mapState = useMapState();
const { mapPluginReady } = storeToRefs(mapState);
</script>

<script lang="ts">
export default {
  name: 'MapLive',
};
</script>

<template>
  <map-basic v-bind="$attrs">
    <template #last>
      <button-object-toggle v-if="mapPluginReady"></button-object-toggle>
    </template>
    <slot></slot>
  </map-basic>
</template>
