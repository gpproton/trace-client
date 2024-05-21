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
 * Modified At: Mon May 20 2024
 */

import type { Route } from '@trace/base/typings';
import type { Workspace } from '@trace/shared';

export default (service: Workspace): Route => {
  const name = 'shortages';
  const module = `${service}-${name}`;
  const mainView = `${module}.summary`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: `shared.${name}`,
      icon: 'bi-exclamation-diamond',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: '',
        component: () => import('./pages/ShortageSummaryView.vue'),
        meta: {
          menu: true,
          title: 'shared.summary',
          icon: 'bi-exclude',
        },
      },
      {
        name: `${module}.all`,
        path: 'all',
        component: () => import('./pages/ShortageView.vue'),
        meta: {
          menu: true,
          title: `shared.${name}`,
          icon: 'bi-exclamation-diamond',
        },
      },
      {
        name: `${module}.settlements`,
        path: 'settlements',
        component: () => import('./pages/ShortageSettlementView.vue'),
        meta: {
          menu: true,
          title: 'shared.settlements',
          icon: 'bi-cash-stack',
        },
      },
    ],
  };
};
