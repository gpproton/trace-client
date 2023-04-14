import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usepositionState = defineStore('vec.track.position', () => {
  const positionIsLoading = ref(true);
  const positionIsLoaded = ref(false);
  const positionValue = ref<Array<IPosition>>([]);
  const positionSearchValue = ref('');

  const loadPositionValues = () => {
    positionIsLoading.value = true;
    positionIsLoaded.value = false;
    setTimeout(() => {
      positionValue.value = positionData;
      positionIsLoading.value = false;
      positionIsLoaded.value = true;
    }, 1000);
  };

  return {
    positionIsLoading,
    positionIsLoaded,
    positionValue,
    positionSearchValue,
    loadPositionValues,
  };
});

interface IPosition {
  id: string;
  lat: number;
  lng: number;
  address: string;
}

const positionData: Array<IPosition> = [
  {
    id: '1',
    lat: 6.4343,
    lng: 3.4343,
    address: '',
  },
  {
    id: '2',
    lat: 6.4343,
    lng: 3.4343,
    address: '',
  },
];
