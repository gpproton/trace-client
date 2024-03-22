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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri Mar 22 2024
 */

import type { Route } from '@trace/base/typings';

const routes: Route[] = [
  {
    name: 'work-spaces',
    path: '/work-spaces',
    component: () => import('@/pages/WorkSpaces.vue'),
    meta: {
      title: 'router.work-spaces',
      icon: 'sync',
    },
  },
  {
    name: 'app.testing',
    path: '/testing',
    component: () => import('@trace/base/pages/Testing.vue'),
    meta: {
      title: 'router.testing',
      icon: 'sync',
      permission: {
        feature: 'default',
        type: 'read',
      },
    },
  },
];

export const addCatchAll = (key: string = ''): Route => ({
  path: `:catchAll(.*)*`,
  name: key === '' ? 'error' : `${key}-error`,
  component: () => import('@trace/base/pages/ErrorNotFound.vue'),
  meta: {
    permission: false,
    title: 'router.error',
  },
  props: {
    home: key === '' ? 'home' : key,
  },
});

export const addUnAuthorized = (key: string = ''): Route => ({
  path: 'un-authorized',
  name: key === '' ? 'un-authorized' : `${key}-un-authorized`,
  component: () => import('@/pages/UnAuthorized.vue'),
  meta: {
    permission: false,
    title: 'router.un-authorized',
  },
});

export default routes;
