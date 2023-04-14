import { ref } from 'vue';
import { defineStore } from 'pinia';

export const liveMarkers = defineStore('app.map.markers', () => {
  const liveMarkerList = ref();
  const initialize = () => {};

  return {
    liveMarkerList,
    initialize,
  };
});
