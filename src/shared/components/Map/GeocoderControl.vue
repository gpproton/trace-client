<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapState } from '@/components/Map/stores';
import * as L from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

const mapState = useMapState();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();
    // @ts-ignore
    const nominatim = L.Control.Geocoder.nominatim({
      serviceUrl: process.env.API_GEOCODING_PATH,
    });
    const geocoder = new Geocoder({
      defaultMarkGeocode: false,
      geocoder: nominatim,
    });

    geocoder.on('markgeocode', (e: any) => {
      mapInstance.value.fitBounds(e.geocode.bbox);
    });
    geocoder.addTo(mapInstance.value);
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
});
</script>

<script lang="ts">
export default {
  name: 'GeocoderControl',
};
</script>

<template>
  <span v-show="false"></span>
</template>
