/*
 * Copyright (c) 2023 - 2024 drolx Labs
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://trace.ng/licenses/license-1-0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

import type { RouterConfig } from '@nuxt/schema';
import defaultRoutes, { addCatchAll, addUnAuthorized } from '@/routes.default';
import { routes as identityRoutes } from '@/app.account/app-routes';
import type { Route } from '@trace/base/typings';
import type { RouteRecordRaw } from '@/.nuxt/vue-router-stub';
import { workRoutes } from '@/plugins/app-2-routes.global';
import { Workspace } from '@trace/shared';

const accountRoutes = workRoutes.filter((x) => x.name === Workspace.Account);
export const extendedRoutes: Route[] = [];

export const routes = [
  {
    name: 'home',
    path: '/',
    redirect: { name: 'work-spaces' },
    component: () => import('@trace/base/layouts/empty.vue'),
    children: [addCatchAll(), addUnAuthorized(), ...defaultRoutes],
  },
  ...identityRoutes,
  accountRoutes,
  extendedRoutes,
] as Route[];

export default <RouterConfig>{
  routes: (_routes) => _routes.concat(routes as unknown as RouteRecordRaw),
};
