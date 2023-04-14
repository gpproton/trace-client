<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapState } from '@/components/Map/stores';
import * as L from 'leaflet';
import 'leaflet.polylinemeasure/Leaflet.PolylineMeasure.css';
import 'leaflet.polylinemeasure';

const mapState = useMapState();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();
    const options = {
      position: 'topright',
      unit: 'metres',
      clearMeasurementsOnStop: true,
    };
    const measure = L.control.polylineMeasure(options);
    measure.addTo(mapInstance.value);
    mapInstance.value.on('polylinemeasure:start', () => {
      /* e.sttus */
    });
    mapInstance.value.on('polylinemeasure:add', () => {
      /* e.sttus */
    });
    mapInstance.value.on('polylinemeasure:insert', () => {
      /* e.sttus */
    });
    mapInstance.value.on('polylinemeasure:change', () => {
      /* e.sttus */
    });
    mapInstance.value.on('polylinemeasure:toogle', () => {
      /* e.sttus */
    });
    mapInstance.value.on('polylinemeasure:finish', () => {
      /* e.sttus */
    });
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
});
</script>

<script lang="ts">
export default {
  name: 'MeasureControl',
};
</script>

<template>
  <span v-show="false"></span>
</template>
