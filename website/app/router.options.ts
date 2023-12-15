import type { RouterConfig } from '@nuxt/schema';
import { getRoutes, setupRootRoute, mergeConstantRoutes } from '@trace/base/app/routes';
import OnboardRoutes from '@/modules/on-board/routes';

export default <RouterConfig>{
  routes: () => {
    setupRootRoute({
      path: '/',
      name: 'root',
      redirect: { name: 'home' },
    });

    mergeConstantRoutes([
      {
        path: '/',
        name: 'index',
        component: () => import('@/components/Layout.vue'),
        children: [
          {
            path: '',
            name: 'home',
            component: () => import('@/pages/Home.vue'),
          },
          {
            path: '/getting-started',
            name: 'getting-started',
            component: () => import('@/pages/GettingStarted.vue'),
          },
        ]
      },
    ]);

    mergeConstantRoutes(OnboardRoutes);
    mergeConstantRoutes([
      {
        path: '/:catchAll(.*)*',
        component: () => import('@/components/EmptyLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('@trace/base/pages/ErrorNotFound.vue'),
            meta: {
              title: 'router.error',
              icon: 'sync',
            },
          },
        ]
      },
    ]);

    return getRoutes();
  }
}
