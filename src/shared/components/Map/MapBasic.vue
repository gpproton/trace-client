<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LMap, LControlZoom } from '@vue-leaflet/vue-leaflet';
import 'leaflet-contextmenu';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import { computed, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { useMapState } from './stores';
import '@/css/leaflet.scss';
import TileLayers from './TileLayers.vue';
import GeocoderControl from './GeocoderControl.vue';
import ButtonMapDefault from './ButtonMapDefault.vue';
import FullscreenControl from './FullscreenControl.vue';
import MeasureControl from './MeasureControl.vue';

L.Icon.Default.imagePath = '';
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const $q = useQuasar();
const mapState = useMapState();
const {
  mapReady,
  mapPluginReady,
  mapReference,
  mapInstance,
  currentZoomValue,
  currentCenterValue,
  mapOptions,
  mapTiles,
  currentTileLayer,
} = storeToRefs(mapState);
const {
  onInitialize,
  onMapZoomStart,
  onMapZoomEnd,
  onCenterUpdate,
  onZoomUpdate,
  onMapReady,
} = mapState;

const isBrowser = computed(() => typeof window !== 'undefined');
onBeforeMount(async () => {
  onInitialize();
  if (isBrowser.value) {
    let Loader: any;
    ({ Loader } = await import('@googlemaps/js-api-loader'));
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });
    await loader.load();
    Loader = Loader.default;
  }
});

defineExpose({ mapReference, mapInstance, mapTiles, currentTileLayer });
</script>

<script lang="ts">
export default {
  name: 'MapBasic',
};
</script>

<template>
  <l-map
    v-show="mapReady"
    ref="mapReference"
    :use-global-leaflet="true"
    :zoom="currentZoomValue"
    :center="currentCenterValue"
    :options="mapOptions"
    :zoom-animation="true"
    :marker-zoom-animation="true"
    style="z-index: 0"
    @zoomstart="onMapZoomStart"
    @zoomend="onMapZoomEnd"
    @update:center="onCenterUpdate"
    @update:zoom="onZoomUpdate"
    @ready="onMapReady"
    v-bind="$attrs"
  >
    <slot name="first"></slot>
    <l-control-zoom
      :position="$q.platform.is.mobile ? 'topleft' : 'topright'"
    />
    <fullscreen-control v-if="mapPluginReady"></fullscreen-control>
    <measure-control v-if="mapPluginReady"></measure-control>
    <button-map-default v-if="mapPluginReady"></button-map-default>
    <geocoder-control v-if="mapPluginReady"></geocoder-control>
    <slot></slot>
    <slot name="last"></slot>
    <tile-layers v-if="mapPluginReady"></tile-layers>
  </l-map>
</template>
