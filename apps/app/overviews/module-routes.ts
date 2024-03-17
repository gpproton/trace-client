/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace License
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
 * Created At: Thursday, 14th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Mar 17 2024
 */

import type { Route } from '@trace/base/typings';
import type { ServiceVariant } from '@trace/shared';

export default (service: ServiceVariant): Route => ({
  name: `${service}.overview`,
  path: 'overview',
  meta: { menu: 'module', title: 'shared.overview', icon: 'bi-grid' },
  redirect: { name: `${service}.overview.dashboard` },
  children: [
    {
      name: `${service}.overview.dashboard`,
      path: 'dashboard',
      component: () => import('./pages/Dashboard.vue'),
      meta: {
        menu: true,
        title: 'shared.dashboard',
        icon: 'bi-columns-gap',
      },
    },
    {
      name: `${service}.overview.trends`,
      path: 'trends',
      component: () => import('./pages/Trends.vue'),
      meta: {
        menu: true,
        title: 'shared.trends',
        icon: 'bi-clipboard-data',
      },
    },
  ]
});
