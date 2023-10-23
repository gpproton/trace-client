import type { RouterConfig } from '@nuxt/schema'
import type { ActionState, Workflow } from '@trace/model';
import { getRoutes, setupRootRoute, setupDefaultRoutes } from '@/app/routes';

declare module "vue-router" {
  interface RouteMeta {
    permission?: ActionState
    workflows?: Workflow[];
    anonymous?: boolean;
    title: string;
    icon?: string;
    itemLabel?: string;
    keepAlive?: boolean;
    isOpen?: boolean;
  }
}

export default <RouterConfig>{
  
  routes: () => {
    setupRootRoute({
      name: 'index',
      path: '/',
      component: () => import('@/components/layouts/Layout.vue'),
      redirect: '/'
    });

    setupDefaultRoutes();

    return getRoutes();
  },
}
