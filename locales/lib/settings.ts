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
 * Created At: Monday, 20th May 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

export default {
  mapSettings: '@:shared.map @:shared.settings',
  generalSettings: '@:shared.general @:shared.settings',
  accountAlerts: '@:shared.account @:shared.alerts',
  appearanceSettings: '@:shared.appearance @:shared.settings',
  billingSettings: '@:shared.billing @:shared.settings',
  taskOptions: '@:shared.task @:shared.options',
  eventOptions: '@:shared.event @:shared.options',
  violationOptions: '@:shared.violation @:shared.options',
  shortageOptions: '@:shared.shortage @:shared.options',
  domainSettings: '@:shared.domain @:shared.settings',
  domainOptions: '@:shared.domain @:shared.options',
};
