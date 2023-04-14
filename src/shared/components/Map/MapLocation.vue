<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MapBasic from './MapBasic.vue';
import GeozoneControl from './GeozoneControl.vue';
import { useMapState } from './stores';

const mapState = useMapState();
const { mapPluginReady } = storeToRefs(mapState);
</script>

<script lang="ts">
export default {
  name: 'MapLocation',
};
</script>

<template>
  <map-basic v-bind="$attrs">
    <geozone-control v-if="mapPluginReady"></geozone-control>
    <slot></slot>
  </map-basic>
</template>
