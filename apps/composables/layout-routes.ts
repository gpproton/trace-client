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
 * Created At: Friday, 22nd Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri Mar 22 2024
 */

import { getRouteMenuByType } from '@trace/base/types';
import type { RouteMenu } from '@trace/base/typings';

export const useLayoutRouteStore = defineStore('layout-routes', () => {
  const modulesMenuFn = (): RouteMenu[] => {
    const router = useRouter();
    const route = router.currentRoute.value;

    return getRouteMenuByType(router.options.routes, route.name, [
      'module',
      true,
    ]);
  };

  const moduleChildrenFn = (): RouteMenu[] => {
    const route = useRoute();
    const routeName: string = route.name;
    const children = modulesMenuFn()
      .filter((e) => e.name === routeName.split('.')[0])
      .flatMap((e) => (e.children ? e.children : []));

    return children;
  };

  const moduleFeaturesFn = (): RouteMenu[] => {
    const route = useRoute();
    return route.meta.hideChildren ? [] : moduleChildrenFn();
  };

  return {
    modulesMenuFn,
    moduleChildrenFn,
    moduleFeaturesFn,
  };
});
