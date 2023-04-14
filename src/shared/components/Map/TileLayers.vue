<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { computed, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapState } from '@/components/Map/stores';
import * as L from 'leaflet';
import 'leaflet-switch-basemap';
import 'leaflet-switch-basemap/src/L.switchBasemap.css';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';

const mapState = useMapState();
const { mapInstance, mapTiles, currentTileLayer, mapPluginReady } =
  storeToRefs(mapState);

interface ILayer {
  id?: string;
  layer: L.TileLayer | L.GridLayer | any;
  icon: string;
  name: string;
  option?: any;
}

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();
    const getTileLayers = () => {
      return mapTiles.value.map((tile) => {
        const layer = !tile.custom
          ? L.tileLayer(String(tile.url), {})
          : // @ts-ignore
            L.gridLayer.googleMutant({
              trafficLayer: true,
              ...tile.options,
            });

        if (currentTileLayer.value.id === tile.id)
          layer.addTo(mapInstance.value);
        const layerItems: ILayer = {
          id: tile.id,
          layer,
          icon: '/map/tile-0.png',
          name: tile.name,
          option: tile,
        };
        if (tile.custom)
          layerItems.layer.addGoogleLayer(String(tile.layerType));
        return layerItems;
      });
    };

    const tiledMapTiles = computed<Array<ILayer>>(() => getTileLayers());
    // @ts-ignore
    L.basemapsSwitcher(tiledMapTiles.value, {
      position: 'bottomright',
    }).addTo(mapInstance.value);
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
});
</script>

<script lang="ts">
export default {
  name: 'TileLayers',
};
</script>

<template>
  <span v-show="false"></span>
</template>
