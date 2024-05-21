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
  const name = 'finance';
  const module = `${Workspace.Core}-${name}`;
  const mainView = `${module}.overview`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.finance',
      icon: 'bi-cash-coin',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: 'overview',
        component: () => import('./pages/FinanceOverview.vue'),
        meta: {
          title: 'shared.overview',
          icon: 'bi-arrow-repeat',
          menu: true,
        },
      },
      {
        name: `${module}.invoices`,
        path: 'invoices',
        component: () => import('./pages/FinanceInvoicesView.vue'),
        meta: {
          title: 'shared.invoices',
          icon: 'bi-receipt',
          menu: true,
        },
      },
      {
        name: `${module}.payments`,
        path: 'payments',
        redirect: { name: `${module}.payments.summary` },
        meta: {
          title: 'shared.payments',
          icon: 'bi-coin',
          menu: true,
        },
        children: [
          {
            name: `${module}.payments.summary`,
            path: 'summary',
            component: () => import('./pages/FinancePaymentsView.vue'),
            meta: {
              title: 'shared.summary',
              icon: 'bi-exclude',
              menu: true,
            },
          },
          {
            name: `${module}.payments.requests`,
            path: 'requests',
            component: () => import('./pages/FinancePaymentRequestsView.vue'),
            meta: {
              title: 'shared.paymentRequests',
              icon: 'bi-arrow-left-right',
              menu: true,
            },
          },
        ],
      },
      {
        name: `${module}.transactions`,
        path: 'transactions',
        component: () => import('./pages/FinanceTransactionsView.vue'),
        meta: {
          title: 'shared.transactions',
          icon: 'bi-money',
          menu: true,
        },
      },
      {
        name: `${module}.expenses`,
        path: 'expenses',
        redirect: { name: `${module}.expenses.overview` },
        meta: {
          title: 'shared.expenses',
          icon: 'bi-bank',
          menu: true,
        },
        children: [
          {
            name: `${module}.expenses.overview`,
            path: 'overview',
            component: () => import('./pages/FinanceExpensesView.vue'),
            meta: {
              title: 'shared.overview',
              icon: 'bi-arrow-repeat',
              menu: true,
            },
          },
          {
            name: `${module}.expenses.requests`,
            path: 'requests',
            component: () => import('./pages/FinanceExpenseRequestsView.vue'),
            meta: {
              title: 'shared.expenseRequests',
              icon: 'bi-arrow-left-right',
              menu: true,
            },
          },
        ],
      },
      {
        name: `${module}.loans`,
        path: 'loans',
        redirect: { name: `${module}.loans.overview` },
        meta: {
          title: 'shared.loans',
          icon: 'bi-bank',
          menu: true,
        },
        children: [
          {
            name: `${module}.loans.overview`,
            path: 'overview',
            component: () => import('./pages/FianceLoanView.vue'),
            meta: {
              title: 'shared.overview',
              icon: 'bi-arrow-repeat',
              menu: true,
            },
          },
          {
            name: `${module}.loans.requests`,
            path: 'requests',
            component: () => import('./pages/FianceLoanRequests.vue'),
            meta: {
              title: 'shared.loanRequests',
              icon: 'bi-arrow-left-right',
              menu: true,
            },
          },
        ],
      },
    ],
  };
};
