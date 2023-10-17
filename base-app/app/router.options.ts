import type { RouterConfig } from '@nuxt/schema';
import { constantRoutes, rootRoutes } from './router.constants';
import { ActionState } from '@trace/model';

declare module "vue-router" {
  interface RouteMeta {
    permission?: ActionState
    title: string;
    icon?: string;
    itemLabel?: string;
    keepAlive?: boolean;
    isOpen?: boolean;
  }
}

export default <RouterConfig>{
  routes: () => {
    // default routes
    return [
      ...rootRoutes,
      ...constantRoutes,
    ]
  },
}
