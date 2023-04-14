import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
  'vec.task.activities',
  () => {
    const loading = ref(false);
    const objects = ref(0);

    return {
      loading,
      objects,
    };
  },
  {
    persist: true,
  }
);

// import { useCounterStore } from '@/layouts/stores';
// import { storeToRefs } from 'pinia';
// const counterStore = useCounterStore();
// const { count } = storeToRefs(counterStore);
// const { increment } = counterStore;
