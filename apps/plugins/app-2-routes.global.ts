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
 * Created At: Friday, 24th May 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

import type { Router } from 'vue-router';
import { Workspace, workspaceApps } from '@trace/shared';
import type { Route } from '@trace/base/typings';
import { useTagViewStore } from '@/stores/tag-view';
import coreRoutes from '@/app.core/app-routes';
import trackRoutes from '@/app.track/app-routes';
import supportRoutes from '@/app.support/app-routes';
import dispatchRoutes from '@/app.dispatch/app-routes';
import portalRoutes from '@/app.portal/app-routes';
import partnerRoutes from '@/app.partner/app-routes';
import accountRoutes from '@/app.account/app-routes';
import type { RouteRecordRaw } from '@/.nuxt/vue-router-stub';

export const addWorkspaceRoute = (
  app: Workspace,
  component: any,
  children: Route[],
  filter: string[] = [],
  mobileFilter: string[] = [],
  root: string = 'overview',
): Route => ({
  name: app,
  path: `/${app}`,
  component: component,
  children: children,
  meta: { menu: 'app' },
  redirect: { name: `${app}-${root}` },
  props: {
    workspace: app,
    overviewFilter: filter,
    mobileFilter: mobileFilter,
  },
});

export const accountRouteObject = addWorkspaceRoute(
  Workspace.Account,
  () => import('@/app/AppLayout.vue'),
  accountRoutes,
  [],
  [],
  'profile',
);

export const workRoutes: Route[] = [
  accountRouteObject,
  addWorkspaceRoute(
    Workspace.Core,
    () => import('@/app/AppLayout.vue'),
    coreRoutes,
    ['core-overview', 'core-calendar'],
    ['core-overview', 'core-calendar', 'core-tracking', 'core-engagements'],
  ),
  addWorkspaceRoute(
    Workspace.Track,
    () => import('@/app/LiveLayout.vue'),
    trackRoutes,
    ['track-alerts', 'track-objects', 'track-help'],
    [],
    'live',
  ),
  addWorkspaceRoute(
    Workspace.Support,
    () => import('@/app/AppLayout.vue'),
    supportRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Dispatch,
    () => import('@/app/AppLayout.vue'),
    dispatchRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Portal,
    () => import('@/app/AppLayout.vue'),
    portalRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Partner,
    () => import('@/app/AppLayout.vue'),
    partnerRoutes,
    [],
    [],
  ),
] as Route[];

const routes: Array<{ path: string; name?: any; type?: string }> = [];

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  const tagViewStore = useTagViewStore();
  const { clearAllTagView } = tagViewStore;

  router.beforeEach(async (to, from, next) => {
    const matchedRoutes = workspaceApps.filter((e) => {
      return (
        e !== accountRouteObject.name &&
        (to.fullPath.startsWith(`/${e}/`) || to.fullPath.startsWith(`/${e}`))
      );
    });

    if (matchedRoutes.length > 0) {
      const currentWorkspaceName = to.fullPath
        .trim()
        .split('/')
        .filter((x) => x !== '')[0];

      const currentWorkspaceRoutes = workRoutes.filter(
        (x) => x.name === currentWorkspaceName,
      )[0];

      if (!routes.some((route) => route.path === to.fullPath)) {
        router.addRoute(currentWorkspaceRoutes as RouteRecordRaw);
        routes.push({
          path: to.path,
          name: to.name,
          type: currentWorkspaceName,
        });
        next({ path: to.fullPath, replace: true });

        // Filter routes for removal from router
        const routesToRemove = workRoutes.filter(
          (x) =>
            x.name !== currentWorkspaceName &&
            x.name !== accountRouteObject.name,
        );

        // REMOVE ROUTE FROM ROUTER
        routesToRemove.map((route) => {
          if (router.hasRoute(route.name)) {
            router.removeRoute(route.name);
            clearAllTagView();
          }
        });
        return;
      }
    }

    next();
  });
});
