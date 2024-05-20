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
 * Created At: Monday, 25th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon May 20 2024
 */

import { addCatchAll, addUnAuthorized } from '@/routes.default';
import addOverviewRoute from '@/app/overviews/module-routes';
import addTrackingRoute from '@/app/live-tracking/module-routes';
import addCalendarRoute from '@/app/calendar/module-routes';
import addContactRoute from '@/app/contacts/module-routes';
import addLocationsRoute from '@/app/locations/module-routes';
import { Workspace } from '@trace/shared';
import type { Route } from '@trace/base/typings';

export default [
  addCatchAll(Workspace.Portal),
  addUnAuthorized(Workspace.Portal),
  addOverviewRoute(Workspace.Portal),
  addCalendarRoute(Workspace.Portal),
  addContactRoute(Workspace.Portal),
  addTrackingRoute(Workspace.Portal),
  addLocationsRoute(Workspace.Portal),
] as Route[];
