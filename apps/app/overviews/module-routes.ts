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
 * Created At: Thursday, 14th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

import type { Route } from '@trace/base/typings';
import type { Workspace } from '@trace/shared';

export default (service: Workspace): Route => {
  const name: string = 'overview';
  const module: string = `${service}-${name}`;
  const mainView: string = `${module}.dashboard`;

  return {
    name: module,
    path: name,
    component: () => import('./OverviewLayout.vue'),
    meta: {
      menu: 'module',
      title: 'shared.overview',
      icon: 'bi-grid',
      hideChildren: true,
      removeChildren: true,
    },
    redirect: { name: mainView },
    children: [
      {
        name: mainView,
        path: 'dashboard',
        component: () => import('./pages/OverviewDashboard.vue'),
        meta: {
          menu: true,
          title: 'shared.overview',
          icon: 'bi-columns-gap',
        },
      },
      {
        name: `${module}.trends`,
        path: 'trends',
        component: () => import('./pages/OverviewTrends.vue'),
        meta: {
          menu: true,
          title: 'shared.trends',
          icon: 'bi-clipboard-data',
        },
      },
    ],
  };
};
