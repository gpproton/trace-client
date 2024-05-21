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
  const name = 'billing';
  const module = `${Workspace.Portal}-${name}`;
  const mainView = `${module}.overview`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.billing',
      icon: 'bi-cash-stack',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: '',
        component: () => import('./pages/BillingSummaryView.vue'),
        meta: {
          title: 'shared.summary',
          icon: 'bi-arrow-repeat',
          menu: true,
        },
      },
      {
        name: `${module}.qoutes`,
        path: 'qoutes',
        component: () => import('./pages/BillingQuotesView.vue'),
        meta: {
          title: 'shared.qoutes',
          icon: 'bi-square',
          menu: true,
        },
      },

      {
        name: `${module}.invoices`,
        path: 'invoices',
        component: () => import('./pages/BillingInvoicesView.vue'),
        meta: {
          title: 'shared.invoices',
          icon: 'bi-receipt',
          menu: true,
        },
      },

      {
        name: `${module}.payments`,
        path: 'payments',
        component: () => import('./pages/BillingPaymentsView.vue'),
        meta: {
          title: 'shared.payments',
          icon: 'bi-cash-coin',
          menu: true,
        },
      },
    ],
  };
};
