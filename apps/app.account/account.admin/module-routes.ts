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
 * Created At: Wednesday, 20th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon May 20 2024
 */

import type { Route } from '@trace/base/typings';
import { Workspace } from '@trace/shared';

const base = `${Workspace.Account}-admin`;
const routes: Route = {
  path: `admin`,
  name: `${base}`,
  redirect: { name: `${base}.summary` },
  meta: {
    menu: 'module',
    hideChildren: true,
    title: 'shared.administration',
    icon: 'bi-person-gear',
  },
  children: [
    {
      path: 'summary',
      name: `${base}.summary`,
      component: () => import('./pages/TenantSummary.vue'),
      meta: {
        menu: true,
        title: 'shared.summary',
        icon: 'bi-front',
      },
    },
    {
      path: 'members',
      name: `${base}.members`,
      redirect: { name: `${base}.member-accounts` },
      meta: {
        menu: true,
        title: 'shared.members',
        icon: 'bi-people',
      },
      children: [
        {
          path: 'accounts',
          name: `${base}.member-accounts`,
          component: () => import('./pages/members/TenantMembers.vue'),
          meta: {
            menu: true,
            title: 'shared.members',
            icon: 'bi-people',
          },
        },
        {
          path: 'invites',
          name: `${base}.member-invites`,
          component: () => import('./pages/members/TenantMemberInvite.vue'),
          meta: {
            menu: true,
            title: 'shared.invites',
            icon: 'bi-person-plus',
          },
        },
        {
          path: 'roles',
          name: `${base}.member-roles`,
          component: () => import('./pages/members/TenantMemberRoles.vue'),
          meta: {
            menu: true,
            title: 'shared.roles',
            icon: 'bi-shield-check',
          },
        },
        {
          path: 'teams',
          name: `${base}.teams`,
          component: () => import('./pages/members/TenantTeams.vue'),
          meta: {
            menu: true,
            title: 'shared.teams',
            icon: 'bi-globe',
          },
        },
      ],
    },
    {
      path: 'general',
      name: `${base}.general`,
      component: () => import('./pages/TenantGeneralSettings.vue'),
      meta: {
        menu: true,
        title: 'shared.settings',
        icon: 'bi-gear',
      },
    },
    {
      path: 'alerts',
      name: `${base}.alerts`,
      component: () => import('./pages/TenantAlertSettings.vue'),
      meta: {
        menu: true,
        title: 'shared.alerts',
        icon: 'bi-bell',
      },
    },
    {
      path: 'map',
      name: `${base}.map`,
      component: () => import('./pages/TenantMapSettings.vue'),
      meta: {
        menu: true,
        title: 'settings.mapSettings',
        icon: 'bi-compass',
      },
    },
    {
      path: 'integration',
      name: `${base}.integration`,
      component: () => import('./pages/TenantIntegration.vue'),
      meta: {
        menu: true,
        title: 'shared.integration',
        icon: 'bi-intersect',
      },
    },
    {
      path: 'billing-settings',
      name: `${base}.billing-settings`,
      component: () => import('./pages/TenantBillingSettings.vue'),
      meta: {
        menu: true,
        title: 'settings.billingSettings',
        icon: 'bi-cash-coin',
      },
    },
    {
      path: 'task-options',
      name: `${base}.task-options`,
      component: () => import('./pages/TenantTaskOptions.vue'),
      meta: {
        menu: true,
        title: 'settings.taskOptions',
        icon: 'bi-list-task',
      },
    },
    {
      path: 'task-templates',
      name: `${base}.task-templates`,
      component: () => import('./pages/TenantTaskTemplates.vue'),
      meta: {
        menu: true,
        title: 'shared.taskTemplates',
        icon: 'bi-sliders2',
      },
    },
    {
      path: 'branches',
      name: `${base}.branches`,
      component: () => import('./pages/TenantBranches.vue'),
      meta: {
        menu: true,
        title: 'shared.branches',
        icon: 'bi-pin-map',
      },
    },
    {
      path: 'event-options',
      name: `${base}.event-options`,
      component: () => import('./pages/TenantEventOptions.vue'),
      meta: {
        menu: true,
        title: 'settings.eventOptions',
        icon: 'bi-bell',
      },
    },
    {
      path: 'violation-options',
      name: `${base}.violation-options`,
      component: () => import('./pages/TenantViolationOptions.vue'),
      meta: {
        menu: true,
        title: 'settings.violationOptions',
        icon: 'bi-x-diamond',
      },
    },
    {
      path: 'shortage-options',
      name: `${base}.shortage-options`,
      component: () => import('./pages/TennantShortageOptions.vue'),
      meta: {
        menu: true,
        title: 'settings.shortageOptions',
        icon: 'bi-exclamation-octagon',
      },
    },
    {
      path: 'domain',
      name: `${base}.domain`,
      component: () => import('./pages/TenantDomainOptions.vue'),
      meta: {
        menu: true,
        title: 'settings.domainOptions',
        icon: 'bi-globe',
      },
    },
    {
      path: 'faqs',
      name: `${base}.faqs`,
      component: () => import('./pages/TenantFaqItems.vue'),
      meta: {
        menu: true,
        title: 'shared.faqs',
        icon: 'bi-info-circle',
      },
    },
  ],
};

export default routes;
