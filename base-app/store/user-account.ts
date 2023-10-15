import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayout = defineStore(
  'app',
  () => {
    const reloadFlag = ref(true);


    return {
      reloadFlag,
    };
  }
);
