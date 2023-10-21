import type { RouterConfig } from '@nuxt/schema';
import { constantRoutes, asyncRootRoute } from './router.constants';
import type { ActionState, Workflow } from '@trace/model';

declare module "vue-router" {
  interface RouteMeta {
    permission?: ActionState
    workflows?: Workflow[];
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
      ...asyncRootRoute,
      ...constantRoutes,
    ]
  },
}
