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
 * Created At: Tuesday, 12th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu May 23 2024
 */

import 'vue-router';
import type { RouteRecordName, RouteRecordRedirectOption } from 'vue-router';
import '#app';
import type { ActionState } from '@trace/model';

declare module '@vue-js-cron/quasar';
declare module 'vue-draggable-resizable';

declare module '#app' {
  interface NuxtApp {
    $permit(action: ActionState): boolean;
    $permission(action: ActionState): boolean;
  }
}

declare type MenuType = boolean | 'app' | 'module' | 'x';
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    permission?: boolean | 'auth' | ActionState;
    menu?: MenuType;
    hideChildren?: boolean;
    removeChildren?: boolean;
    title: string;
    icon?: string;
    keepAlive?: boolean;
    isOpen?: boolean;
    layout?: string;
  }
}

declare interface Route {
  name: string;
  path: string;
  redirect?: RouteRecordRedirectOption | undefined;
  component?: any;
  children?: Route[];
  meta?: RouteMeta;
  props?: boolean | Record<string, any> | ((to: any) => Record<string, any>);
}

declare interface RouteData {
  permission?: ActionState | false;
  title: string;
  fullPath: string;
  icon?: string;
  keepAlive?: boolean;
  name: RouteRecordName | null | undefined;
  isHidden?: unknown;
  children?: RouteData[];
}

declare interface RouteMenu {
  permission?: boolean | ActionState;
  title: string;
  icon?: string;
  name: RouteRecordName | null | undefined;
  children?: RouteMenu[];
  hideChildren?: boolean;
  removeChildren?: boolean;
  layout?: string;
}
