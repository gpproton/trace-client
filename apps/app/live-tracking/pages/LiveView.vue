<script lang="ts" setup>
import PanelWindow from '../components/PanelWindow.vue';
const mapReference = ref();
const mapInstance = ref();
const mapReady = ref(false);

const onMapReady = async () => {
  await nextTick();
  if (mapReference.value !== null) {
    mapInstance.value = mapReference.value.leafletObject;
    mapReady.value = true;
  }
};
</script>

<template>
  <page-wrapper class="no-border">
    <l-map
      v-show="mapReady"
      ref="mapReference"
      :zoom-animation="true"
      :marker-zoom-animation="true"
      :options="{
        zoomControl: false,
        zoom: 10,
        minZoom: 7,
        maxZoom: 19,
        attributionControl: false,
        preferCanvas: true,
      }"
      style="z-index: 0"
      v-bind="$attrs"
      @ready="onMapReady"
    >
      <slot name="first"></slot>
      <l-control-zoom position="topright" />
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
    </l-map>
  </page-wrapper>
</template>
