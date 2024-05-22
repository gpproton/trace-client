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
 * Modified At: Wed May 22 2024
 */

import type { Route } from '@trace/base/typings';
import { Workspace } from '@trace/shared';

export default (): Route => {
  const name = 'fleet';
  const module = `${Workspace.Core}-${name}`;
  const mainView = `${module}.overview`;

  return {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.fleet',
      icon: 'bi-car-front',
      hideChildren: true,
      removeChildren: false,
    },
    children: [
      {
        name: mainView,
        path: 'overview',
        component: () => import('./pages/FleetOverview.vue'),
        meta: {
          title: 'shared.overview',
          icon: 'bi-arrow-repeat',
          menu: true,
        },
      },
      {
        name: `${module}.eco-driving`,
        path: 'eco-driving',
        component: () => import('./pages/FleetEcoView.vue'),
        meta: {
          title: 'shared.ecoDriving',
          icon: 'bi-clipboard-pulse',
          menu: true,
        },
      },
      {
        name: `${module}.vehicles`,
        path: 'vehicles',
        component: () => import('./pages/FleetVehiclesView.vue'),
        meta: {
          title: 'shared.vehicles',
          icon: 'bi-car-front',
          menu: true,
        },
      },
      {
        name: `${module}.devices`,
        path: 'devices',
        component: () => import('./pages/FleetDevicesView.vue'),
        meta: {
          title: 'shared.devices',
          icon: 'bi-motherboard',
          menu: true,
        },
      },
      {
        name: `${module}.trailers`,
        path: 'trailers',
        component: () => import('./pages/FleetTrailersView.vue'),
        meta: {
          title: 'shared.trailers',
          icon: 'bi-truck-flatbed',
          menu: true,
        },
      },
      {
        name: `${module}.driver-tags`,
        path: 'driver-tags',
        component: () => import('./pages/FleetEcoView.vue'),
        meta: {
          title: 'shared.driverTags',
          icon: 'bi-tags',
          menu: true,
        },
      },
    ],
  };
};
