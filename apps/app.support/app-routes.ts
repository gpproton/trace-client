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
 * Created At: Sunday, 24th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 21 2024
 */

import { addCatchAll, addUnAuthorized } from '@/routes.default';
import addOverviewRoute from '@/app/overviews/module-routes';
import addTicketRoute from './tickets/module-routes';
import addDisputesRoute from './disputes/module-routes';
import addBillingRoute from './account-billing/module-routes';
import addAnnoncementRoute from './announcements/module-routes';
import addFaqsRoute from './faqs/module-routes';
import { Workspace } from '@trace/shared';
import type { Route } from '@trace/base/typings';

export default [
  addCatchAll(Workspace.Support),
  addUnAuthorized(Workspace.Support),
  addOverviewRoute(Workspace.Support),
  addTicketRoute(),
  addDisputesRoute(),
  addBillingRoute(),
  addAnnoncementRoute(),
  addFaqsRoute(),
] as Route[];
