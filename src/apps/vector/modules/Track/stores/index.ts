import { ref } from 'vue';
import { defineStore } from 'pinia';

export enum WindowTypes {
  Object,
  History,
  Event,
  Location,
}

export const useTrackWindowState = defineStore('vec.track.panel', () => {
  const windowVisibility = ref(true);
  const currentWindow = ref<number>(WindowTypes.Object);
  const showOverlay = ref(false);

  const toggleWindowVisibility = () => {
    windowVisibility.value = !windowVisibility.value;
  };

  const setCurrentWindow = (type: WindowTypes) => {
    currentWindow.value = type;
  };

  const setShowOverlay = (value: boolean) => {
    showOverlay.value = value;
  };

  return {
    windowVisibility,
    currentWindow,
    showOverlay,
    toggleWindowVisibility,
    setCurrentWindow,
    setShowOverlay,
  };
});
