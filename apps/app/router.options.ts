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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Wed Mar 13 2024
 */

import type { RouterConfig } from '@nuxt/schema';
import type { RouteRecordRaw } from "vue-router";
import type { Route } from '@trace/base/types';
import defaultRoutes from '@/routes.default';
import AuthRoutes from '@/app.identity/authentication/routes';
import OnboardRoutes from '@/app.identity/on-board/routes';

export const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/layouts/Layout.vue'),
    redirect: '/',
    children: [
      ...defaultRoutes,
    ]
  },
  ...AuthRoutes,
  ...OnboardRoutes,
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/layouts/EmptyLayout.vue'),
    meta: {
      permission: false
    },
    children: [
      {
        path: '',
        component: () => import('@trace/base/pages/ErrorNotFound.vue'),
        meta: {
          permission: false,
          title: 'router.error',
        },
      },
    ]
  },
  {
    name: 'un-authorized',
    path: "/un-authorized",
    component: () => import("@/pages/UnAuthorized.vue"),
    meta: {
      permission: false,
      title: "router.un-authorized",
    },
  },
] as Route[];

export default <RouterConfig>{
  routes: () => routes as RouteRecordRaw[],
}
