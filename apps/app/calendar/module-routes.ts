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
 * Modified At: Sun May 26 2024
 */

import type { Route } from '@trace/base/typings';
import type { Workspace } from '@trace/shared';

export default (service: Workspace): Route => {
  const name = 'schedules';
  const module = `${service}-${name}`;
  const mainView = `${module}.personal`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    component: () => import('./CalendarLayout.vue'),
    meta: {
      menu: 'module',
      title: 'shared.schedules',
      icon: 'bi-calendar4-week',
      hideChildren: true,
      removeChildren: true,
    },
    children: [
      {
        name: mainView,
        path: 'personal',
        component: () => import('./pages/CalendarView.vue'),
        meta: {
          title: 'shared.schedules',
          icon: 'bi-calendar4-week',
          menu: true,
        },
      },
      {
        name: `${module}.timeline`,
        path: 'timeline',
        component: () => import('./pages/CalendarTaskTimline.vue'),
        meta: {
          title: 'shared.timeline',
          icon: 'bi-calendar4-week',
          menu: true,
        },
      },
    ],
  };
};
