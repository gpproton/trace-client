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
 * Created At: Monday, 26th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat Mar 23 2024
 */

import type { MenuType, Route, RouteMenu } from '@/typings';

export const getRouteByName = (
  routes: Route[],
  name: string,
): Route | undefined => {
  const isRouteName = (element: Route): boolean => {
    if (element.name === name) return true;
    if (Array.isArray(element.children)) element.children.find(isRouteName);

    return false;
  };

  return routes.find(isRouteName);
};

export const getRouteChildren = (routes: Route[], name: string): Route[] => {
  const result = getRouteByName(routes, name);
  return typeof result?.children !== 'undefined' ? result?.children : [];
};

export const getRoutesByNames = (routes: Route[], names: string[]): Route[] => {
  /** names array filter helper function */
  const filterRouteByNames = (element: Route): boolean => {
    if (names.includes(element.name)) return true;
    if (Array.isArray(element.children))
      element.children.filter(filterRouteByNames);

    return false;
  };

  return routes.filter(filterRouteByNames);
};

export const getAuthenticatedRoutes = (
  routes: Route[],
  authenticated: boolean = true,
): Route[] => {
  /** auth filter helper function */
  const filterRoute = (element: Route): boolean => {
    let authState: boolean = false;
    if (!authenticated)
      authState =
        typeof element.meta?.permission === 'boolean' &&
        !element.meta?.permission;
    if (authenticated && typeof element.meta?.permission !== 'boolean')
      authState =
        typeof element.meta?.permission === 'undefined' ||
        typeof element.meta?.permission === 'object' ||
        element.meta?.requiresAuth === true;
    if (Array.isArray(element.children)) element.children.filter(filterRoute);

    return authState;
  };

  return routes.filter(filterRoute);
};

export const getRouteParent = (routes: Route[], routeName: string): Route[] => {
  const find = ({ name, children }: Route) =>
    name === routeName || (children && children.some(find));
  return routes.filter(find);
};

export const getMenuRoutes = (routes: Route[], rootName: string = '') => {
  /** menu filter helper function */
  const isMenuRoute = (result: RouteMenu[], value: Route): any => {
    if (value.meta.menu === undefined) return;
    const item: RouteMenu = {
      title: value.meta.title,
      name: value.name,
      icon: value.meta.icon,
      permission: value.meta.permission,
      hideChildren: value.meta.hideChildren,
      removeChildren: value.meta.removeChildren,
    };
    if (value.children) item.children = value.children.reduce(isMenuRoute, []);
    result.push(item);

    return result;
  };
  if (rootName.length > 0)
    return getRouteChildren(routes, rootName).reduce(isMenuRoute, []);

  return routes.reduce(isMenuRoute, []);
};

export const getRouteMenuByType = (
  routes: Route[],
  routeName: string,
  menuTypes: MenuType[],
): RouteMenu[] => {
  const routeStack = getRouteParent(routes, routeName);
  const find = (result: Route[], value: Route): Route[] => {
    const isFound = menuTypes.includes(value.meta?.menu);
    if (Array.isArray(value.children) && isFound)
      value.children = value.children.reduce(find, []);
    if (isFound) result.push(value);
    if (Array.isArray(value.children) && !isFound) {
      const children = value.children.reduce(find, []);
      children.forEach((e) => {
        result.push(e);
      });
    }

    return result;
  };
  const items = routeStack.reduce(find, []);

  return getMenuRoutes(items);
};

export const getMenusByNames = (
  routes: Route[],
  names: string[],
): RouteMenu[] => getMenuRoutes(getRoutesByNames(routes, names));
