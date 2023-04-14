/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMapLayer = defineStore('app.map.layer', () => {
  const mapTraffic = ref<boolean>(false);
  const isMapTraffic = computed<boolean>(() => mapTraffic.value);
  const toggleMapTraffic = () => {
    mapTraffic.value = !mapTraffic.value;
  };

  return {
    mapTraffic,
    isMapTraffic,
    toggleMapTraffic,
  };
});
