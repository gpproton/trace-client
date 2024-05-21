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

export default (): Route => {
  const name = 'orders';
  const module = `${Workspace.Portal}-${name}`;
  const mainView = `${module}.overview`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.orders',
      icon: 'bi-arrow-down-right-square',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: '',
        component: () => import('./pages/OrderOverviewView.vue'),
        meta: {
          title: 'shared.overview',
          icon: 'bi-arrow-repeat',
          menu: true,
        },
      },

      {
        name: `${module}.requests`,
        path: 'requests',
        component: () => import('./pages/OrderRequestsView.vue'),
        meta: {
          title: 'shared.requests',
          icon: 'bi-box-arrow-in-up-right',
          menu: true,
        },
      },

      {
        name: `${module}.documents`,
        path: 'documents',
        component: () => import('./pages/OrderDocumentView.vue'),
        meta: {
          title: 'shared.documents',
          icon: 'bi-files-alt',
          menu: true,
        },
      },
      {
        name: `${module}.history`,
        path: 'history',
        component: () => import('./pages/OrderHistoryView.vue'),
        meta: {
          title: 'shared.history',
          icon: 'bi-clock-history',
          menu: true,
        },
      },
    ],
  };
};
