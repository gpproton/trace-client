import { Router } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRouterStore } from "@/stores/router";
import { useUserAccountStore } from "@/stores/user-account";
import { asyncRootRoute, asyncRoutesChildren } from '@/app/router.constants';
import { constructionRouters } from '@/utils/permission-util';
import { RouteRecordRaw } from 'vue-router';

export default defineNuxtRouteMiddleware(() => {
  const router: Router = useRouter();
  const routerStore = useRouterStore();
  const userAccountStore = useUserAccountStore();

  const { setRoutes } = routerStore;
  const { getPermissionRoutes } = storeToRefs(routerStore);
  const { getUserPermmisions, setUserInfo } = userAccountStore;

  // router.beforeEach((to, from, next) => {

  //   // There is user authority, and the route is not empty, then let go
  //   if (
  //     getUserPermmisions.length > 0 &&
  //     getPermissionRoutes.value.length
  //   ) {
  //     next();
  //   } else {
  //     if (getUserPermmisions.length <= 0) {
  //       const { data, error } = await me();
  //       if (!error.value) {
  //         setUserInfo(data.value);
  //       }
  //     }

  //     // And set the corresponding route according to the permissions
  //     const accessRoutes = deepClone(asyncRoutesChildren);
  //     asyncRootRoute[0].children = constructionRouters(accessRoutes);
  //     routerStore.setRoutes(asyncRootRoute);
  //     // If you are prompted that addRoutes is deprecated, use the spread operator to complete the operation
  //     for (const item of asyncRootRoute) {
  //       router.addRoute(item as RouteRecordRaw);
  //     }
  //     // If addRoutes is not completed, the guard will execute it again
  //     next({ ...to, replace: true });
  //   }
  // });

});
