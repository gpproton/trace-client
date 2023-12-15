import type { RouteData } from '@/types/index';
import { defineStore } from 'pinia';

export const useKeepAliveStore = defineStore(
  'keepAlive',
  () => {
    const keepAliveList = ref<string[]>([]);
    const getKeepAliveList = computed(() => keepAliveList.value);

    const setKeepAliveList = (payload: RouteData[]) => {
      keepAliveList.value = [];
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].keepAlive) {
          keepAliveList.value.push(payload[i].name as string);
        }
      }
      return keepAliveList.value;
    }

    return {
      keepAliveList,
      getKeepAliveList,
      setKeepAliveList
    };
  }
);
