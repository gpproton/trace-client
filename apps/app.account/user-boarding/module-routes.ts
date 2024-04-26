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
 * Modified At: Fri Apr 26 2024
 */

import type { Route } from '@trace/base/typings';

export const onboardRoutes: Route[] = [
  {
    path: 'create-account',
    name: 'user-boarding.create-account',
    component: () => import('./pages/CreateAccount.vue'),
    meta: {
      permission: 'auth',
      title: 'Create Account',
      description: 'Provide personal information required to use our plaform',
    },
  },
  {
    path: 'account-verification',
    name: 'user-boarding.account-verification',
    component: () => import('./pages/AccountVerification.vue'),
    meta: {
      permission: 'auth',
      title: 'Verification',
      description: 'Verify mobile number for account',
    },
  },
  {
    path: 'account-options',
    name: 'user-boarding.account-options',
    component: () => import('./pages/AccountOptions.vue'),
    meta: {
      permission: 'auth',
      title: 'Account Options',
      description: 'Select required and optional settings for you account',
    },
  },
  {
    path: 'confirmation',
    name: 'user-boarding.confirmation',
    component: () => import('./pages/AccountConfirmation.vue'),
    meta: {
      permission: 'auth',
      title: 'Confirmation',
      description: 'Complete onboarding process for your account',
    },
  },
];

const routes: Route[] = [
  {
    path: '/user-boarding',
    name: 'user-boarding',
    redirect: { name: 'user-boarding.getting-started' },
    component: () => import('./OnboardLayout.vue'),
    children: onboardRoutes,
    meta: {
      permission: 'auth',
    },
  },
  {
    path: '/user-boarding/getting-started',
    name: 'user-boarding.secondary',
    redirect: { name: 'user-boarding.getting-started' },
    component: () => import('./WelcomeLayout.vue'),
    meta: {
      permission: 'auth',
    },
    children: [
      {
        path: '',
        name: 'user-boarding.getting-started',
        component: () => import('./pages/GetttingStarted.vue'),
        meta: {
          permission: 'auth',
          title: 'Getting started',
        },
      },
    ],
  },
];

export default routes;
