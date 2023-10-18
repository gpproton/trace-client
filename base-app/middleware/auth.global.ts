import { Router } from 'vue-router';
import { useUserAccountStore } from "@/stores/user-account";
import { constantRoutes } from '@/app/router.constants';

export default defineNuxtRouteMiddleware(() => {
  const router: Router = useRouter();
  const userAccount = useUserAccountStore();
  const { getAccessToken } = userAccount;

  // router.beforeEach((to, from, next) => {
  //   const accessToken = getAccessToken();

  //   if (accessToken) {
  //     console.log(`Authorized navigation ${to.path} :: ${from.path}`)
  //     if (to.name === 'auth.sign-in') next({ name: 'home' });
  //   } else {
  //     console.log(`Un-authorized navigation ${to.path} :: ${from.path}`)
  //     const isConstantRoute = constantRoutes.some((item) => {
  //       return item.path === to.path;
  //     });
  //     if (isConstantRoute) {
  //       next();
  //     } else {
  //       next({ name: 'auth.sign-in' });
  //     }
  //   }
  // });

})
