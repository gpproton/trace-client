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
 * Modified At: Thu Mar 21 2024
 */

import type { Route } from '@trace/base/typings';
import { ServiceVariant } from '@trace/shared';

const routes: Route[] = [
  {
    path: '/authentication',
    name: 'auth',
    redirect: { name: 'auth.sign-in' },
    component: () => import('./AuthLayout.vue'),
    meta: {
      permission: false,
    },
    props: {
      workspace: ServiceVariant.Identity,
    },
    children: [
      {
        path: 'sign-in',
        name: 'auth.sign-in',
        component: () => import('./pages/SignIn.vue'),
        meta: {
          title: 'Sign In',
          permission: false,
        },
      },
      {
        path: 'forgot-password',
        name: 'auth.forgot-password',
        component: () => import('./pages/ForgotPassword.vue'),
        meta: {
          title: 'Forgot Password',
          permission: false,
        },
      },
      {
        path: 'password-update',
        name: 'auth.password-update',
        component: () => import('./pages/PasswordUpdate.vue'),
        meta: {
          title: 'Password Update',
          permission: false,
        },
      },
      {
        path: 'otp-choice',
        name: 'auth.otp-choice',
        component: () => import('./pages/OtpChoice.vue'),
        meta: {
          title: 'OTP Choice',
          permission: false,
        },
      },
      {
        path: 'verify-otp',
        name: 'auth.verify-otp',
        component: () => import('./pages/VerifyOtp.vue'),
        meta: {
          title: 'Verify OTP',
          permission: false,
        },
      },
    ],
  },
];

export default routes;
