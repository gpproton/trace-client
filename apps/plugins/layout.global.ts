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
 * Created At: Thursday, 22nd Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon Mar 11 2024
 */

import { useTagViewStore } from "@/stores/tag-view";
import { useBreadcrumbsStore } from "@/stores/breadcrumbs";
import { useKeepAliveStore } from "@/stores/keep-alive";
import { LoadingBar } from "quasar";
import { storeToRefs } from 'pinia';
import type { RouteLocationNormalized, Router } from "vue-router";
import { anonymousRoutes } from '@/app/routes';
import { findRoute } from '@/utils/permission-util';
import type { RouteData } from '@trace/base/types/index';

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  const tagViewStore = useTagViewStore();
  const breadCrumbsStore = useBreadcrumbsStore();
  const keepAliveStore = useKeepAliveStore();

  const { setTagView, addTagView } = tagViewStore;
  const { getTagView, getStoredTagView } = storeToRefs(tagViewStore);
  const { setKeepAliveList } = keepAliveStore;
  const { getBreadCrumbs } = storeToRefs(breadCrumbsStore);
  const { setBreadcrumbs } = breadCrumbsStore;

  router.beforeEach((to, from) => {
    LoadingBar.stop();
    LoadingBar.start();

    if (to.name != null) {
      // is a public route
      if (findRoute(anonymousRoutes, to.name.toString()) !== undefined) return;

      const storedTagView = (getStoredTagView.value ?? []) as unknown as RouteData[];
      if (
        // @ts-ignore
        getTagView.value.length === 0 &&
        storedTagView.length !== 0
      ) {
        setTagView(storedTagView);
        setKeepAliveList(storedTagView);
      } else if (from.fullPath !== to.fullPath) {
        addTagView(to);
      }

      setBreadcrumbs(to.matched, to.query);
      handleKeepAlive(to);
    }
  });

  router.afterEach(() => {
    LoadingBar.stop();
  });
});

/**
 * Handle redundant layout: router-view and keep the current component under the first layer index <router-view>
 * This method cannot filter the on-demand loading <layout> used for nested routing
 * @param to
 */
function handleKeepAlive(to: RouteLocationNormalized) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i];
      const isLayout = element.components?.default.name?.toString();
      if (typeof isLayout === 'string' && isLayout.includes('Layout')) {
        to.matched.splice(i, 1);
        handleKeepAlive(to);
      }
    }
  }
}
