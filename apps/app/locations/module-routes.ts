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
 * Created At: Sunday, 17th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 21 2024
 */

import type { Route } from '@trace/base/typings';
import type { Workspace } from '@trace/shared';

export default (service: Workspace): Route => {
  const name = 'locations';
  const module = `${service}-${name}`;
  const mainView = `${module}.root`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: `shared.${name}`,
      icon: 'bi-compass',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: 'all',
        component: () => import('./pages/LocationView.vue'),
        meta: {
          menu: true,
          title: `shared.${name}`,
          icon: 'bi-compass',
        },
      },
      {
        name: `${module}.routes`,
        path: 'routes',
        component: () => import('./pages/RouteView.vue'),
        meta: {
          menu: true,
          title: 'shared.routes',
          icon: 'bi-sign-turn-right',
        },
      },
      {
        name: `${module}.warehouses`,
        path: 'warehouses',
        component: () => import('./pages/WarehouseView.vue'),
        meta: {
          menu: true,
          title: 'shared.warehouses',
          icon: 'bi-building-check',
        },
      },
      {
        name: `${module}.route-templates`,
        path: 'route-templates',
        component: () => import('./pages/RouteTemplates.vue'),
        meta: {
          menu: true,
          title: 'shared.route-templates',
          icon: 'bi-backpack',
        },
      },
      {
        name: `${module}.route-prices`,
        path: 'route-prices',
        component: () => import('./pages/RoutePrices.vue'),
        meta: {
          menu: true,
          title: 'shared.routePrices',
          icon: 'bi-coin',
        },
      },
    ],
  };
};
