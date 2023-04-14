<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapState } from '@/components/Map/stores';
import * as L from 'leaflet';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

const mapState = useMapState();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();
    // @ts-ignore
    const fullScreen = new L.Control.Fullscreen({
      position: 'topright',
      title: 'Fullscreen',
      titleCancel: 'Exit Fullscreen',
      content: '',
      forceSeparateButton: true,
      forcePseudoFullscreen: true,
      fullscreenElement: false,
    });

    fullScreen.addTo(mapInstance.value);
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
});
</script>

<script lang="ts">
export default {
  name: 'FullscreenControl',
};
</script>

<template>
  <span v-show="false"></span>
</template>
