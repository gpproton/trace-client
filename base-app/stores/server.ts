import { Tenant, Workflow } from '@trace/model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useServerStore = defineStore(
  'server',
  () => {
    const tenant = ref<Tenant | null>(null);
    const getTenant = computed(() => tenant.value);
    const setTenant = (value: Tenant) => tenant.value = value;
    const getWorkflow = computed<Workflow | null>(() => tenant.value?.workflow ?? null);

    return {
      tenant,
      getTenant,
      getWorkflow,
      setTenant
    };
  }
);
