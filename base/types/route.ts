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
 * Created At: Monday, 26th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue Mar 12 2024
 */

import type { ActionState } from "@trace/model";
import type {
  RouteMeta,
  RouteRecordName,
  RouteRecordRaw,
  RouteRecordRedirectOption,
} from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    permission?: ActionState | false;
    menu?: boolean;
    title: string;
    icon?: string;
    keepAlive?: boolean;
    isOpen?: boolean;
  }
}

export interface Route {
  name: string;
  path: string;
  redirect?: RouteRecordRedirectOption | undefined;
  component?: any;
  children?: Route[];
  meta?: RouteMeta;
  props?: boolean | Record<string, any> | ((to: any) => Record<string, any>);
}

export interface RouteData {
  permission?: ActionState | false;
  menu?: boolean;
  title: string;
  fullPath: string;
  icon?: string;
  keepAlive?: boolean;
  name: RouteRecordName | null | undefined;
  isHidden?: unknown;
}

export const getRouteByName = (routes: RouteRecordRaw[], name: string): RouteRecordRaw | undefined => {
  for (const route of routes) {
    if (route.name === name) return route;
    if (route.children?.length) {
      const innerResult = getRouteByName(route.children, name);
      if (innerResult) return innerResult;
    }
  }

  return undefined;
};

export const getRoutesByName = (routes: Route[] | RouteRecordRaw[]) => {
  // filter matched routes by their names
}

export const getRouteChildren = (routes: Route[] | RouteRecordRaw[]) => {
  // filter matched routes by their names
}

export const getAnonymousRoutes = (routes: Route[] | RouteRecordRaw[]) => {
  // Filter routes with meta.permission/requireAuth === false
}

export const getMenuRoutes = (routes: Route[] | RouteRecordRaw[]) => {
  // Filter routes with meta.menu === false
}
