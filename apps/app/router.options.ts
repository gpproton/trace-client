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
 * Modified At: Thu Mar 14 2024
 */

import type { RouterConfig } from '@nuxt/schema';
import type { RouteRecordRaw } from "vue-router";
import type { Route } from '@trace/base/types';
import defaultRoutes, { addCatchAll, addUnAuthorized } from '@/routes.default';
import { routes as identityRoutes } from '@/app.identity/app-routes';
import coreRoutes from '@/app.core/app-routes';
import { ServiceVariant } from '@trace/shared';

export const routes = [
  {
    name: 'home',
    path: '/',
    redirect: { name: 'quick-start' },
    component: () => import('@/layouts/EmptyLayout.vue'),
    children: [
      addCatchAll(),
      addUnAuthorized(),
      ...defaultRoutes,
    ]
  },
  ...identityRoutes,
  {
    name: ServiceVariant.Core,
    path: `/${ServiceVariant.Core}`,
    component: () => import('@/layouts/Layout.vue'),
    children: coreRoutes,
    props: {
      workspace: ServiceVariant.Core
    },
  },
] as Route[];

export default <RouterConfig>{
  routes: () => routes as RouteRecordRaw[],
}

