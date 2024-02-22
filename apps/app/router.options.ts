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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu Feb 22 2024
 */

import type { RouterConfig } from '@nuxt/schema'
import type { ActionState, Workflow } from '@trace/model';
import { getRoutes, setupRootRoute, setupDefaultRoutes } from '@/app/routes';

declare module "vue-router" {
  interface RouteMeta {
    permission?: ActionState
    workflows?: Workflow[];
    anonymous?: boolean;
    title: string;
    icon?: string;
    itemLabel?: string;
    keepAlive?: boolean;
    isOpen?: boolean;
  }
}

export default <RouterConfig>{

  routes: () => {
    setupRootRoute({
      name: 'index',
      path: '/',
      component: () => import('@/components/layouts/Layout.vue'),
      redirect: '/'
    });

    setupDefaultRoutes();
    // mergeConstantRoutes(OnboardRoutes);

    return getRoutes();
  },
}
