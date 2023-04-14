import { ref } from 'vue';
import { defineStore } from 'pinia';

export type TenantTestProfile = { name: string; id: number };

export const useSampleStore = defineStore(
  'counter',
  () => {
    const tenant = ref<TenantTestProfile>();
    const getTenant = () => tenant.value;
    const setTenant = (payload: TenantTestProfile) => {
      tenant.value = payload;
    };

    return {
      tenant,
      getTenant,
      setTenant,
    };
  }
  // {
  //   persist: true,
  // }
);

// import { useCounterStore } from '@/layouts/stores';
// import { storeToRefs } from 'pinia';
// const counterStore = useCounterStore();
// const { count } = storeToRefs(counterStore);
// const { increment } = counterStore;
