<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapState } from '@/components/Map/stores';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
// import {} from '@/components/Map/stores'
const mapState = useMapState();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);
const geofence = ref([]);

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();

    mapInstance.value.pm.addControls({
      position: 'topleft',
      drawCircle: true,
      marker: true,
      circlemarker: true,
      polyline: true,
    });

    mapInstance.value.on('pm:drawstart', ({ workingLayer }: any) => {
      geofence.value = [];
      workingLayer.on('pm:vertexadded', (e: any) => {
        const value = e.target.getLatLngs();
        geofence.value = value;
      });
    });

    mapInstance.value.on('pm:drawend', () => {
      console.log(geofence.value);
    });
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
});
</script>

<script lang="ts">
export default {
  name: 'GeozoneControl',
};
</script>

<template>
  <span v-show="false"></span>
</template>
