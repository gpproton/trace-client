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
import coreRoutes from '@/app.core/app-routes';
import trackRoutes from '@/app.track/app-routes';
import supportRoutes from '@/app.support/app-routes';
import dispatchRoutes from '@/app.dispatch/app-routes';
import portalRoutes from '@/app.portal/app-routes';
import partnerRoutes from '@/app.partner/app-routes';
import accountRoutes from '@/app.account/app-routes';
// import type { RouteRecordRaw } from '@/.nuxt/vue-router-stub';

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

export const workRoutes: Route[] = [
  addWorkspaceRoute(
    Workspace.Account,
    () => import('@/app/AppLayout.vue'),
    accountRoutes,
    [],
    [],
    'profile',
  ),
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

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  router.beforeEach((to, from, next) => {
    const matchedRoutes = workspaceApps.filter((e) => {
      return (
        to.fullPath.startsWith(`/${e}/`) || to.fullPath.startsWith(`/${e}`)
      );
    });
    const isWorkspace = matchedRoutes.length > 0;
    if (isWorkspace) {
      const currentWorkspaceName = to.fullPath
        .trim()
        .split('/')
        .filter((x) => x !== '')[0];

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const currentWorkspaceRoutes = workRoutes.filter(
        (x) => x.name === currentWorkspaceName && x.meta.menu === 'app',
      )[0];
      const hasWorkspaceRoute = router.hasRoute(currentWorkspaceName);
      if (!hasWorkspaceRoute) {
        // router.addRoute(currentWorkspaceRoutes as RouteRecordRaw);
        // router.replace(to.fullPath);
      } else {
        // next();
      }
    } else {
      // next();
    }
    next();
  });
});
