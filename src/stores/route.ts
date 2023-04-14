import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ServiceVariant, ITenantProfile } from '@/shared/libs/Service';

export const useRouteStore = defineStore(
  'route',
  () => {
    /** States */
    const tenant = ref<ITenantProfile>();
    const services = ref<Array<ServiceVariant>>([ServiceVariant.VECTOR]);
    const service = ref<ServiceVariant>(services.value[0]);

    const getTenant = () => tenant.value;

    const setTenant = (payload: ITenantProfile) => {
      tenant.value = payload;
    };

    const getPermittedServices = () => services;

    const setPermittedServices = (svs: Array<ServiceVariant>): void => {
      services.value = svs;
    };

    const getService = (): ServiceVariant => process.env.APP_VARIANT === 'manager' ? ServiceVariant.MANAGER : service.value;

    const setService = (sv: ServiceVariant): void => {
      service.value = sv;
    };

    return {
      getTenant,
      setTenant,
      getPermittedServices,
      setPermittedServices,
      getService,
      setService,
    };
  },
  {
    persist: true,
  }
);
