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
 * Created At: Monday, 26th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 14 2024
 */

export type ActionType = 'create' | 'read' | 'update' | 'delete';

export enum Workflow {
  Custom = 'custom',
  Telematics = 'telematics',
  Courier = 'courier',
  Passenger = 'passenger',
  Logistics = 'logistics',
  System = 'system'
}

export type Action = { create?: boolean, read?: boolean, update?: boolean, delete?: boolean }
export type ActionState = { module?: string, feature: string, type: ActionType, workflows?: Workflow[] }
export type Permission = { module?: string, feature: string, actions: Action }
