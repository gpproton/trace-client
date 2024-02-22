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
 * Modified At: Thu Feb 22 2024
 */

import type { Route } from "@trace/base/types/index";
import type { RouteRecordRaw } from "vue-router";

import routes from './routes.default';

export const setupRootRoute = (route: Route) => {
  route.children = asyncRoutesChildren;
  asyncRootRoute = [route];
};

export const setupDefaultRoutes = () => {
  mergeRoutes(routes);
  mergeConstantRoutes([
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/components/layouts/EmptyLayout.vue'),
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
  ...constantRoutes,
  ...asyncRootRoute,
];

export const asyncRoutesChildren: Route[] = [];

export let asyncRootRoute: Route[] = [];

export const constantRoutes: RouteRecordRaw[] = [];

