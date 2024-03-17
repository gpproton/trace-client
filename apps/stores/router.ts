import { defineStore } from 'pinia';
import { type Route } from "@trace/base/typings"

export const useRouterStore = defineStore(
  'routes',
  () => {

    const permissionRoutes = ref<Route[]>([]);
    const getPermissionRoutes = computed(() => permissionRoutes.value);
    const setRoutes = (routes: Route[]) => permissionRoutes.value = routes;

    return {
      permissionRoutes,
      getPermissionRoutes,
      setRoutes
    };
  }
);
