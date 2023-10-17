import { RouteRecordRaw } from "vue-router";

export const extraRoutes: RouteRecordRaw[] = [
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
]

export const rootRoutes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '',
    children: extraRoutes
  }
]

export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'app.error',
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
    meta: {
      title: "router.error",
      icon: "sync",
    },
  },
];
