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
 * Created At: Sunday, 17th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat Mar 23 2024
 */

import type { Route } from '@trace/base/typings';
import type { Workspace } from '@trace/shared';

export default (service: Workspace): Route => ({
  name: `${service}-engagements`,
  path: 'engagements',
  redirect: { name: `${service}-engagements.activities` },
  meta: {
    menu: 'module',
    title: 'shared.engagements',
    icon: 'bi-activity',
    hideChildren: true,
  },
  children: [
    {
      name: `${service}-engagements.activities`,
      path: 'activities',
      component: () => import('./pages/ActivitiesView.vue'),
      meta: {
        menu: true,
        title: 'shared.activities',
        icon: 'bi-activity',
      },
    },
    {
      name: `${service}-engagements.conversations`,
      path: 'conversations',
      component: () => import('./pages/ConversationsView.vue'),
      meta: {
        menu: true,
        title: 'shared.conversations',
        icon: 'bi-chat-left-dots',
      },
    },
    {
      name: `${service}-engagements.meetings`,
      path: 'meetings',
      component: () => import('./pages/MeetingsView.vue'),
      meta: {
        menu: true,
        title: 'shared.meetings',
        icon: 'bi-calendar-check',
      },
    },
    {
      name: `${service}-engagements.leads`,
      path: 'leads',
      component: () => import('./pages/LeadsView.vue'),
      meta: {
        menu: true,
        title: 'shared.leads',
        icon: 'bi-signpost-2',
      },
    },
    {
      name: `${service}-engagements.quotations`,
      path: 'quotations',
      component: () => import('./pages/quotations/QuotationsView.vue'),
      meta: {
        menu: true,
        title: 'shared.quotations',
        icon: 'bi-receipt',
      },
    },
    {
      name: `${service}-engagements.pipeline`,
      path: 'pipeline',
      component: () => import('./pages/pipeline/PipelineView.vue'),
      meta: {
        menu: true,
        title: 'shared.pipeline',
        icon: 'bi-arrow-left-right',
      },
    },
  ],
});
