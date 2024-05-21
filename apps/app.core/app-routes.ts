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
 * Created At: Thursday, 14th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 21 2024
 */

import { addCatchAll, addUnAuthorized } from '@/routes.default';
import addOverviewRoute from '@/app/overviews/module-routes';
import addCalendarRoute from '@/app/calendar/module-routes';
import addContactRoute from '@/app/contacts/module-routes';
import addEngagementRoute from '@/app/engagements/module-routes';
import addLocationsRoute from '@/app/locations/module-routes';
import addTrackingRoute from '@/app/live-tracking/module-routes';
import addTaskRoute from './tasks/module-routes';
import addHelpDeskRoute from '@/app/help-desk/module-routes';
import addOrderRoute from './orders/module-routes';
import addCustomerRoute from './customers/module-routes';
import addDispatchersRoute from './dispatchers/module-routes';
import addFleetRoute from './fleet/module-routes';
import addFuelingRoute from './fueling/module-routes';
import addInventoryRoute from './inventory/module-routes';
import addShortageRoute from '@/app/shortages/module-routes';
import { Workspace } from '@trace/shared';
import type { Route } from '@trace/base/typings';

export default [
  addCatchAll(Workspace.Core),
  addUnAuthorized(Workspace.Core),
  addOverviewRoute(Workspace.Core),
  addContactRoute(Workspace.Core),
  addEngagementRoute(Workspace.Core),
  addCalendarRoute(Workspace.Core),
  addTrackingRoute(Workspace.Core),
  addTaskRoute(),
  addDispatchersRoute(),
  addHelpDeskRoute(Workspace.Core),
  addOrderRoute(),
  addCustomerRoute(),
  addLocationsRoute(Workspace.Core),
  addFleetRoute(),
  addFuelingRoute(),
  addInventoryRoute(),
  addShortageRoute(Workspace.Core),
] as Route[];
