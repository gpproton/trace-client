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
  const name = 'dispatchers';
  const module = `${Workspace.Core}-${name}`;
  const mainView = `${module}.overview`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.dispatchers',
      icon: 'bi-file-earmark-person',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: 'overview',
        component: () => import('./pages/DispatchersOverview.vue'),
        meta: {
          title: 'shared.overview',
          icon: 'bi-arrow-repeat',
          menu: true,
        },
      },
      {
        name: `${module}.dispatchers`,
        path: 'all',
        component: () => import('./pages/DispatchersView.vue'),
        meta: {
          title: 'shared.dispatchers',
          icon: 'bi-file-earmark-person',
          menu: true,
        },
      },
      {
        name: `${module}.reviews`,
        path: 'reviews',
        component: () => import('./pages/DispatchersReview.vue'),
        meta: {
          title: 'shared.reviews',
          icon: 'bi-clipboard-check',
          menu: true,
        },
      },
      {
        name: `${module}.expenses`,
        path: 'expenses',
        redirect: { name: `${module}.expenses.all` },
        meta: {
          title: 'shared.expenses',
          icon: 'bi-piggy-bank',
          menu: true,
        },
        children: [
          {
            name: `${module}.expenses.all`,
            path: 'all',
            component: () => import('./pages/DispatchersExpensesView.vue'),
            meta: {
              title: 'shared.expenses',
              icon: 'bi-piggy-bank',
              menu: true,
            },
          },
          {
            name: `${module}.expense-requests`,
            path: 'requests',
            component: () => import('./pages/DispatchersExpensesRequests.vue'),
            meta: {
              title: 'shared.expenseRequests',
              icon: 'bi-input-cursor',
              menu: true,
            },
          },
        ],
      },
      {
        name: `${module}.incentives`,
        path: 'incentives',
        redirect: { name: `${module}.incentives.all` },
        meta: {
          title: 'shared.incentives',
          icon: 'bi-arrow-bar-down',
          menu: true,
        },
        children: [
          {
            name: `${module}.incentives.all`,
            path: 'all',
            component: () => import('./pages/incentives/IncentivesView.vue'),
            meta: {
              title: 'shared.incentives',
              icon: 'bi-arrow-bar-down',
              menu: true,
            },
          },
          {
            name: `${module}.incentive-requests`,
            path: 'requests',
            component: () =>
              import('./pages/incentives/IncentiveRequestsView.vue'),
            meta: {
              title: 'shared.incentiveRequests',
              icon: 'bi-input-cursor',
              menu: true,
            },
          },
          {
            name: `${module}.incentive.plans`,
            path: 'plans',
            component: () =>
              import('./pages/incentives/IncentivePlansView.vue'),
            meta: {
              title: 'shared.incentivePlans',
              icon: 'bi-list',
              menu: true,
            },
          },
          {
            name: `${module}.incentive.history`,
            path: 'history',
            component: () =>
              import('./pages/incentives/IncentiveHistoryView.vue'),
            meta: {
              title: 'shared.incentiveHistory',
              icon: 'bi-clock-history',
              menu: true,
            },
          },
        ],
      },

      {
        name: `${module}.violations`,
        path: 'violations',
        redirect: { name: `${module}.violations.summary` },
        meta: {
          title: 'shared.violations',
          icon: 'bi-piggy-bank',
          menu: true,
        },
        children: [
          {
            name: `${module}.violations.summary`,
            path: 'summary',
            component: () =>
              import('./pages/violations/ViolationsSummaryView.vue'),
            meta: {
              title: 'shared.summary',
              icon: 'bi-exclude',
              menu: true,
            },
          },
          {
            name: `${module}.violations.all`,
            path: 'all',
            component: () => import('./pages/violations/ViolationsView.vue'),
            meta: {
              title: 'shared.violations',
              icon: 'bi-input-cursor',
              menu: true,
            },
          },
          {
            name: `${module}.violations.history`,
            path: 'all',
            component: () => import('./pages/violations/ViolationsHistory.vue'),
            meta: {
              title: 'shared.history',
              icon: 'bi-clock-history',
              menu: true,
            },
          },
        ],
      },

      {
        name: `${module}.teams`,
        path: 'teams',
        redirect: { name: `${module}.teams.overview` },
        meta: {
          title: 'shared.teams',
          icon: 'bi-people',
          menu: true,
        },
        children: [
          {
            name: `${module}.teams.overview`,
            path: 'overview',
            component: () => import('./pages/teams/DispatchTeamsView.vue'),
            meta: {
              title: 'shared.overview',
              icon: 'bi-arrow-repeat',
              menu: true,
            },
          },
          {
            name: `${module}.teams.supervisors`,
            path: 'supervisors',
            component: () =>
              import('./pages/teams/DispatchTeamsSupervisorView.vue'),
            meta: {
              title: 'shared.supervisors',
              icon: 'bi-input-cursor',
              menu: true,
            },
          },
          {
            name: `${module}.teams.reviews`,
            path: 'reviews',
            component: () => import('./pages/teams/DispatchTeamsReview.vue'),
            meta: {
              title: 'shared.reviews',
              icon: 'bi-input-cursor',
              menu: true,
            },
          },
          //TODO: implement dispatch wallet route
        ],
      },
    ],
  };
};
