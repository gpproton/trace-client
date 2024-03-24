/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://opensource.org/license/rpl-1-5
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Mar 24 2024
 */

import type { Route } from '@trace/base/typings';
import { Workspace } from '@trace/shared';

const base = `${Workspace.Account}-settings`;
const routes: Route = {
  path: `account`,
  name: `${base}`,
  redirect: { name: `${base}.general` },
  meta: {
    menu: 'module',
    hideChildren: true,
    title: 'shared.settings',
    icon: 'bi-gear',
  },
  children: [
    {
      path: 'general',
      name: `${base}.general`,
      component: () => import('./pages/GeneralSettings.vue'),
      meta: {
        menu: true,
        title: 'router.generalSettings',
        icon: 'bi-gear',
      },
    },
    {
      path: 'alerts',
      name: `${base}.alerts`,
      component: () => import('./pages/AlertSettings.vue'),
      meta: {
        menu: true,
        title: 'router.accountAlerts',
        icon: 'bi-bell',
      },
    },
    {
      path: 'appearance',
      name: `${base}.appearance`,
      component: () => import('./pages/AppearanceSettings.vue'),
      meta: {
        menu: true,
        title: 'router.appearanceSettings',
        icon: 'bi-palette',
      },
    },
    {
      path: 'map',
      name: `${base}.map`,
      component: () => import('./pages/MapSettings.vue'),
      meta: {
        menu: true,
        title: 'router.mapSettings',
        icon: 'bi-compass',
      },
    },
  ],
};

export default routes;
