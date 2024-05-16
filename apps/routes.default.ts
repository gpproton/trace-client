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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu May 16 2024
 */

import type { Route } from '@trace/base/typings';

const routes: Route[] = [
  {
    name: 'work-spaces',
    path: '/work-spaces',
    component: () => import('@/app/WorkSpaces.vue'),
    meta: {
      title: 'router.work-spaces',
      icon: 'sync',
    },
  },
  {
    name: 'app.testing',
    path: '/testing',
    component: () => import('@trace/base/components/TestingPage.vue'),
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

export const addCatchAll = (key: string = ''): Route => {
  const name = key === '' ? 'error' : `${key}-error`;
  const stack = {
    path: `:catchAll(.*)*`,
    name,
    component: undefined as any,
    children: [
      {
        name: `${name}-content`,
        path: '',
        component: () => import('@trace/base/components/NotFound.vue'),
        meta: {
          permission: false,
          title: 'router.error',
        },
        props: {
          home: key === '' ? 'home' : key,
        },
      },
    ],
  };

  if (key === '') stack.component = () => import('@/layouts/empty.vue');

  return stack;
};

export const addUnAuthorized = (key: string = ''): Route => {
  const name = key === '' ? 'un-authorized' : `${key}-un-authorized`;
  const stack = {
    path: 'un-authorized',
    name,
    component: undefined as any,
    children: [
      {
        name: `${name}-content`,
        path: '',
        component: () => import('@/app/UnAuthorized.vue'),
        meta: {
          permission: false,
          title: 'router.un-authorized',
        },
      },
    ],
  };

  if (key === '') stack.component = () => import('@/layouts/empty.vue');

  return stack;
};

export default routes;
