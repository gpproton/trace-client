import type { RouterConfig } from '@nuxt/schema'
import type { ActionState, Workflow } from '@trace/model';
import { getRoutes, setupRootRoute, mergeConstantRoutes, mergeRoutes } from '@/app/routes';
import AuthRoutes from '@/modules/authentication/router';
import routes from './routes.default';

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
    
    mergeConstantRoutes(AuthRoutes);
    mergeRoutes(routes);

    mergeConstantRoutes([
      {
        path: '/:catchAll(.*)*',
        component: () => import('@/components/layouts/EmptyLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('@/pages/ErrorNotFound.vue'),
            meta: {
              title: 'router.error',
              icon: 'sync',
            },
          },
        ]
      },
    ]);

    return getRoutes();
  },
}
