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
  const name = 'tasks';
  const module = `${Workspace.Core}-${name}`;
  const mainView = `${module}.summary`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.tasks',
      icon: 'bi-list-task',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: 'summary',
        component: () => import('./pages/TaskSummaryView.vue'),
        meta: {
          title: 'shared.summary',
          icon: 'bi-exclude',
          menu: true,
        },
      },
      {
        name: `${module}.requests`,
        path: 'requests',
        component: () => import('./pages/TaskRequestsView.vue'),
        meta: {
          title: 'shared.requests',
          icon: 'bi-box-arrow-in-up-right',
          menu: true,
        },
      },
      {
        name: `${module}.board`,
        path: 'board',
        component: () => import('./pages/TaskBoardView.vue'),
        meta: {
          title: 'shared.board',
          icon: 'bi-kanban',
          menu: true,
        },
      },
      {
        name: `${module}.view-dispatchers`,
        path: 'view-dispatchers',
        component: () => import('./pages/TaskViewDispatchers.vue'),
        meta: {
          title: 'shared.viewDispatchers',
          icon: 'bi-file-earmark-person',
          menu: true,
        },
      },
      {
        name: `${module}.view-shipments`,
        path: 'view-shipments',
        component: () => import('./pages/TaskViewShipments.vue'),
        meta: {
          title: 'shared.viewShipments',
          icon: 'bi-truck',
          menu: true,
        },
      },
      {
        name: `${module}.view-packages`,
        path: 'view-packages',
        component: () => import('./pages/TaskViewPackages.vue'),
        meta: {
          title: 'shared.viewPackages',
          icon: 'bi-boxes',
          menu: true,
        },
      },
      {
        name: `${module}.view-passengers`,
        path: 'view-passengers',
        component: () => import('./pages/TaskViewPassengers.vue'),
        meta: {
          title: 'shared.viewPassengers',
          icon: 'bi-people',
          menu: true,
        },
      },
      {
        name: `${module}.trips`,
        path: 'trips',
        component: () => import('./pages/TaskTripView.vue'),
        meta: {
          title: 'shared.trips',
          icon: 'bi-sign-turn-right',
          menu: true,
        },
      },
      {
        name: `${module}.proofs`,
        path: 'proofs',
        component: () => import('./pages/TaskProofView.vue'),
        meta: {
          title: 'shared.proofs',
          icon: 'bi-clipboard-check',
          menu: true,
        },
      },
      {
        name: `${module}.authorization-requests`,
        path: 'authorization-requests',
        component: () => import('./pages/TaskAuthorizationRequests.vue'),
        meta: {
          title: 'shared.authorizationRequests',
          icon: 'bi-shield-check',
          menu: true,
        },
      },
      {
        name: `${module}.optimizations`,
        path: 'optimizations',
        component: () => import('./pages/TaskOptimizationsView.vue'),
        meta: {
          title: 'shared.optimizations',
          icon: 'bi-arrow-up-square',
          menu: true,
        },
      },
      {
        name: `${module}.expenses`,
        path: 'expenses',
        component: () => import('./pages/TaskExpensesView.vue'),
        meta: {
          title: 'shared.expenses',
          icon: 'bi-cash-coin',
          menu: true,
        },
      },
      {
        name: `${module}.schedules`,
        path: 'schedules',
        component: () => import('./pages/TaskSchedulesView.vue'),
        meta: {
          title: 'shared.schedules',
          icon: 'bi-stopwatch',
          menu: true,
        },
      },
      {
        name: `${module}.reports`,
        path: 'reports',
        component: () => import('./pages/TaskReportsView.vue'),
        meta: {
          title: 'shared.reports',
          icon: 'bi-clipboard-data',
          menu: true,
        },
      },
    ],
  };
};
