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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Mar 17 2024
 */

import type { Route } from '@trace/base/typings';

export const onboardRoutes: Route[] = [
  {
    path: 'profile-type',
    name: 'on-board.profile-type',
    component: () => import('./pages/ProfileType.vue'),
    meta: {
      title: 'shared.profileType',
      description: 'Select your preffered profile type'
    },
  },
  {
    path: 'workflow-type',
    name: 'on-board.workflow-type',
    component: () => import('./pages/WorkflowType.vue'),
    meta: {
      title: 'shared.workflowType',
      description: 'Choose organization operation type'
    },
  },
  {
    path: 'organization-information',
    name: 'on-board.organization-information',
    component: () => import('./pages/OrganizationInformation.vue'),
    meta: {
      title: 'shared.organizationInformation',
      description: 'Enter required organization information'
    },
  },
  {
    path: 'registration',
    name: 'on-board.registration',
    component: () => import('./pages/Registration.vue'),
    meta: {
      title: 'shared.registration',
      description: 'Start registration process for account'
    },
  },
  {
    path: 'representative',
    name: 'on-board.representative',
    component: () => import('./pages/Reprensentative.vue'),
    meta: {
      title: 'shared.representative',
      description: 'Required representative details for account'
    },
  },
  {
    path: 'verification',
    name: 'on-board.verification',
    component: () => import('./pages/Verify.vue'),
    meta: {
      title: 'shared.verification',
      description: 'OPT verification for representative'
    },
  },
  {
    path: 'confirmation',
    name: 'on-board.confirmation',
    component: () => import('./pages/Confirmation.vue'),
    meta: {
      title: 'shared.confirmation',
      description: ''
    },
  },
];

const routes: Route = {
  path: '/on-board',
  name: 'on-board',
  redirect: { name: 'on-board.profile-type' },
  component: () => import('./OnboardLayout.vue'),
  children: onboardRoutes
};

export default routes;
