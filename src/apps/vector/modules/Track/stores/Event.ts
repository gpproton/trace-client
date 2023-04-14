import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useEventState = defineStore('vec.track.event', () => {
  const eventIsLoading = ref(true);
  const eventIsLoaded = ref(false);
  const eventValue = ref<Array<IEvent>>([]);
  const eventSearchValue = ref('');

  const loadeventValues = () => {
    eventIsLoading.value = true;
    eventIsLoaded.value = false;
    setTimeout(() => {
      eventValue.value = eventData;
      eventIsLoading.value = false;
      eventIsLoaded.value = true;
    }, 1000);
  };

  return {
    eventIsLoading,
    eventIsLoaded,
    eventValue,
    eventSearchValue,
    loadeventValues,
  };
});

interface IEvent {
  id: string;
}

const eventData: Array<IEvent> = [
  {
    id: '1',
  },
  {
    id: '2',
  },
];
