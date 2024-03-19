import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const reloadFlag = ref(true);
  const isDrawerMini = ref(false);

  const reloadPage = async (duration: number = 0) => {
    reloadFlag.value = false;
    await nextTick();
    if (duration) {
      setTimeout(() => {
        reloadFlag.value = true;
      }, duration);
    } else {
      reloadFlag.value = true;
    }
  };

  const setDrawerMini = (mini: boolean) => {
    isDrawerMini.value = mini;
  };

  return {
    reloadFlag,
    isDrawerMini,
    reloadPage,
    setDrawerMini,
  };
});
