import type { Tenant, Workflow } from '@trace/model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useServerStore = defineStore(
  'server',
  () => {
    const reloading = ref<boolean>(true);
    const tenant = ref<Tenant | null>(null);
    const getTenant = computed(() => tenant.value);
    const getReloading = computed(() => reloading.value);
    const getWorkflow = computed<Workflow | null>(() => tenant.value?.workflow ?? null);
    const setReloading = (value: boolean) => reloading.value = value;
    const setTenant = (value: Tenant) => tenant.value = value;
    
    return {
      getReloading,
      tenant,
      getTenant,
      getWorkflow,
      setReloading,
      setTenant
    };
  }
);
