import type { Route } from "@/types/index";
import type { RouteRecordRaw } from "vue-router";

export const setupRootRoute = (route: Route) => {
  route.children = asyncRoutesChildren;
  asyncRootRoute = [route];
};

export const mergeRoutes = (routes: Route[]) => {
  routes.forEach(item => {
    asyncRoutesChildren.push(item);
  });
};

export const mergeConstantRoutes = (routes: RouteRecordRaw[] | Route[]) => {
  routes.forEach(item => {
    constantRoutes.push(item as RouteRecordRaw);
  })
};

export const getRoutes = () => [
  ...asyncRootRoute,
  ...constantRoutes,
];

export const asyncRoutesChildren: Route[] = [];

export let asyncRootRoute: Route[] = [];

export const constantRoutes: RouteRecordRaw[] = [];

