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
import { Workspace } from '@trace/shared';
import addCatalogueRoute from '@/app/catalogue/module-routes';

export default (): Route => {
  const name = 'inventory';
  const module = `${Workspace.Core}-${name}`;
  const mainView = `${module}.summary`;
  const catalogueRoutes = addCatalogueRoute(
    Workspace.Core,
    false,
    module,
  ) as Route[];

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.inventory',
      icon: 'bi-boxes',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: 'summary',
        component: () => import('./pages/InventorySummaryView.vue'),
        meta: {
          title: 'shared.summary',
          icon: 'bi-exclude',
          menu: true,
        },
      },
      ...catalogueRoutes,
      {
        name: `${module}.stock-items`,
        path: 'stock-items',
        component: () => import('./pages/StockItemsView.vue'),
        meta: {
          title: 'shared.stockItems',
          icon: 'bi-box',
          menu: true,
        },
      },
      {
        name: `${module}.stock-transfers`,
        path: 'stock-transfers',
        component: () => import('./pages/StockTransfersView.vue'),
        meta: {
          title: 'shared.stockTransfers',
          icon: 'bi-box-arrow-in-up-right',
          menu: true,
        },
      },
      {
        name: `${module}.stock-purchases`,
        path: 'stock-purchases',
        component: () => import('./pages/StockTransfersView.vue'),
        meta: {
          title: 'shared.stockTransfers',
          icon: 'bi-cash-stack',
          menu: true,
        },
      },
    ],
  };
};
