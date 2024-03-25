<script lang="ts" setup>
import PanelWindow from '../components/PanelWindow.vue';

const mapReference = ref();
const mapInstance = ref();
const mapReady = ref(false);
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const zoom = ref(10);
const center = ref([6.5296993, 3.281127]);
const markerLatLng = [6.5296993, 3.281127];

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
  <page-wrapper class="no-border" :padding="false">
    <div class="map-view">
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
        <l-control-zoom position="topright" />
        <l-marker :lat-lng="markerLatLng"></l-marker>
        <!-- <fullscreen-control></fullscreen-control> -->
        <!-- <measure-control></measure-control> -->
        <!-- <button-map-default></button-map-default> -->
        <!-- <geocoder-control></geocoder-control> -->
        <slot>
          <l-control :disable-scroll-propagation="true" position="topleft">
            <panel-window></panel-window>
          </l-control>
        </slot>
        <slot name="last"></slot>
        <!-- <tile-layers v-if="mapPluginReady"></tile-layers> -->
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      </l-map>
    </div>
  </page-wrapper>
</template>

<style>
.map-view {
  min-width: calc(100vw - 65px);
  height: calc(100vh - 100px);
}
</style>
