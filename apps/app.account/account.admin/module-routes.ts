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
 * Created At: Wednesday, 20th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Mar 24 2024
 */

import type { Route } from '@trace/base/typings';

const base = 'account-admin';
const routes: Route = {
  path: `${base}`,
  name: `${base}`,
  redirect: { name: `${base}.summary` },
  meta: {
    menu: 'module',
    hideChildren: true,
    title: 'Administration',
    icon: 'bi-gear',
  },
  children: [
    {
      path: 'summary',
      name: `${base}.summary`,
      component: () => import('./pages/TenantSummary.vue'),
      meta: {
        menu: true,
        title: 'Administration Summary',
        icon: 'bi-gear',
      },
    },
    {
      path: 'domain',
      name: `${base}.domain`,
      component: () => import('./pages/TenantDomainSetting.vue'),
      meta: {
        menu: true,
        title: 'Domain Setting',
        icon: 'bi-gear',
      },
    },
  ],
};

export default routes;
