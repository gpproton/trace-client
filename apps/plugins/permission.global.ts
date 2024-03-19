/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace License
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://opensource.org/license/rpl-1-5
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Thursday, 22nd Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Wed Mar 13 2024
 */

import type { Router } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRouterStore } from '@/stores/router';
import { useUserAccountStore } from '@/stores/user-account';
import {
  authtenticatedRoutes,
  authtenticatedRoutesChildren,
} from '@/app/routes';
import { constructionRouters } from '@/utils/permission-util';
import type { RouteRecordRaw } from 'vue-router';

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  const routerStore = useRouterStore();
  const userAccountStore = useUserAccountStore();

  const { setRoutes } = routerStore;
  const { getPermissionRoutes } = storeToRefs(routerStore);
  const { setUserInfo } = userAccountStore;
  const { getUserPermmisions } = storeToRefs(userAccountStore);

  // router.beforeEach((to, from, next) => {

  //   // There is user authority, and the route is not empty, then let go
  //   if (
  //     getUserPermmisions.value.length > 0 &&
  //     getPermissionRoutes.value.length
  //   ) {
  //     next();
  //   } else {
  //     if (getUserPermmisions.value.length <= 0) {
  //       const { data, error } = await me();
  //       if (!error.value) {
  //         setUserInfo(data.value);
  //       }
  //     }

  //     // And set the corresponding route according to the permissions
  //     const accessRoutes = deepClone(authtenticatedRoutesChildren);
  //     authtenticatedRoutes[0].children = constructionRouters(accessRoutes);
  //     routerStore.setRoutes(authtenticatedRoutes);
  //     // If you are prompted that addRoutes is deprecated, use the spread operator to complete the operation
  //     for (const item of authtenticatedRoutes) {
  //       router.addRoute(item as RouteRecordRaw);
  //     }
  //     // If addRoutes is not completed, the guard will execute it again
  //     next({ ...to, replace: true });
  //   }
  // });
});
