/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu Mar 21 2024
 */

import type { RouterConfig } from '@nuxt/schema';
import defaultRoutes, { addCatchAll, addUnAuthorized } from '@/routes.default';
import { routes as identityRoutes } from '@/app.identity/app-routes';
import coreRoutes from '@/app.core/app-routes';
import { ServiceVariant } from '@trace/shared';
import type { Route } from '@trace/base/typings';

export const addAppRoutes = (
  app: ServiceVariant,
  component: any,
  children: Route[],
  overview: string[] = [],
): Route => ({
  name: app,
  path: `/${app}`,
  component: component,
  children: children,
  meta: { menu: 'app' },
  redirect: { name: `${app}-overview` },
  props: { workspace: app, overviewFilter: overview },
});

export const routes = [
  {
    name: 'home',
    path: '/',
    redirect: { name: 'quick-start' },
    component: () => import('@/app/EmptyLayout.vue'),
    children: [addCatchAll(), addUnAuthorized(), ...defaultRoutes],
  },
  addAppRoutes(
    ServiceVariant.Core,
    () => import('@/app/DynamicLayout.vue'),
    coreRoutes,
    ['core-overview', 'core-calendar'],
  ),
  ...identityRoutes,
] as Route[];

export default <RouterConfig>{
  routes: () => routes,
};
