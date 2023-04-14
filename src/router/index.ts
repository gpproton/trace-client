/* eslint-disable brace-style */
import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { ServiceVariant } from '@/shared/libs/Service';
import { useRouteStore } from 'src/stores/route';

import routes from './routes';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    let currentService: keyof typeof ServiceVariant;
    const store = useRouteStore();
    const service = store.getService();

    try {
      currentService = to.fullPath
        .toUpperCase()
        .split('/')[1] as keyof typeof ServiceVariant;

      if (typeof ServiceVariant[currentService] !== 'undefined') {
        console.log('Active Service: ', service);
        // INFO: Handle service routing
        if (currentService.toLowerCase() === service) next();
        else next(`/${service}`);
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
    }
  });

  return Router;
});
