import { Route } from "@/types/index";
import { RouteRecordRaw } from "vue-router";
import AuthRoutes from '@/modules/authentication/router';

export const asyncRoutesChildren: Route[] = [
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

export const asyncRootRoute: Route[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '',
    children: asyncRoutesChildren
  }
]

export const constantRoutes: RouteRecordRaw[] = [
  ...AuthRoutes as RouteRecordRaw[],
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/layouts/EmptyLayout.vue'),
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
];
