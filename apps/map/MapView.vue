<script lang="ts" setup>
import { ref, onMounted, nextTick, defineAsyncComponent } from 'vue';

const TileLayers = defineAsyncComponent(() => import('./TileLayers.vue'));

const mapReference = ref();
const mapInstance = ref();
const mapReady = ref(false);
const zoom = ref(10);
const center = ref([6.5296993, 3.281127]);

onMounted(() => {
  mapReady.value = true;
});

const onMapReady = async () => {
  await nextTick();
  if (mapReference.value !== null) {
    mapInstance.value = mapReference.value.leafletObject;
  }
};
</script>

<template>
  <client-only>
    <l-map
      v-if="mapReady"
      ref="mapReference"
      :zoom-animation="true"
      :marker-zoom-animation="true"
      :options="{
        center: center,
        zoomControl: false,
        zoom: zoom,
        minZoom: 4,
        maxZoom: 19,
        attributionControl: false,
        preferCanvas: true,
      }"
      v-bind="$attrs"
      @ready="onMapReady"
    >
      <slot name="first"></slot>
      <!-- <fullscreen-control></fullscreen-control> -->
      <!-- <measure-control></measure-control> -->
      <!-- <geocoder-control></geocoder-control> -->
      <slot></slot>
      <slot name="last">
        <lazy-l-control-zoom position="bottomright" />
      </slot>
      <tile-layers></tile-layers>
    </l-map>
  </client-only>
</template>

<style>
.map-view {
  min-width: calc(100vw - 65px);
  height: calc(100dvh - 100px);
}
</style>
