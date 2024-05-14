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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 14 2024
 */

import type { Route } from '@trace/base/typings';
import { Workspace } from '@trace/shared';
import AccountTags from '../account.tags/module-routes';
import AccountSettings from '../account.settings/module-routes';
import AccountAdmin from '../account.admin/module-routes';

const base = Workspace.Account;
const routes: Route[] = [
  {
    path: 'profile',
    name: `${base}-profile`,
    component: () => import('./pages/AccountProfile.vue'),
    meta: {
      menu: 'module',
      hideChildren: true,
      title: 'shared.profile',
      icon: 'bi-person',
    },
  },
  {
    path: 'sessions',
    name: `${base}-sessions`,
    component: () => import('./pages/AccountSessions.vue'),
    meta: {
      menu: 'module',
      title: 'shared.sessions',
      icon: 'bi-clock-history',
    },
  },
  {
    path: 'password',
    name: `${base}-password`,
    component: () => import('./pages/AccountPassword.vue'),
    meta: {
      menu: 'module',
      title: 'auth.password',
      icon: 'bi-shield-lock',
    },
  },
  {
    path: 'linked-accounts',
    name: `${base}-linked-accounts`,
    component: () => import('./pages/LinkedAccounts.vue'),
    meta: {
      menu: 'module',
      title: 'auth.linkedAccount',
      icon: 'bi-link-45deg',
    },
  },
  AccountTags,
  AccountSettings,
  AccountAdmin,
];

export default routes;
