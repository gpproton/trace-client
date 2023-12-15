import type { Route } from '@/types/index';

const routes: Route[] = [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/QuickStart.vue'),
      meta: {
        title: "router.home",
        icon: "home",
      },
    },
    {
      name: 'quick-start',
      path: "/quick-start",
      component: () => import("@/pages/QuickStart.vue"),
      meta: {
        title: "router.quick-start",
        icon: "sync",
      },
    },
    {
      name: 'app.testing',
      path: "/testing",
      component: () => import("@/pages/Testing.vue"),
      meta: {
        title: "router.testing",
        icon: "sync",
      },
    },
    {
      name: 'app.un-authorized',
      path: "/un-authorized",
      component: () => import("@/pages/UnAuthorized.vue"),
      meta: {
        title: "router.un-authorized",
        icon: "sync",
      },
    },
  ];

  export default routes;
  