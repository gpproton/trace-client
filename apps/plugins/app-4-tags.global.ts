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
 * Created At: Thursday, 22nd Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Jun 02 2024
 */

import { useTagViewStore } from '@/stores/tag-view';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs';
import { useKeepAliveStore } from '@/stores/keep-alive';
import { LoadingBar } from 'quasar';
import { storeToRefs } from 'pinia';
import type { RouteLocationNormalized, Router } from 'vue-router';
import type { RouteData } from '@trace/base/typings';
import { Workspace, workspaceApps } from '@trace/shared';

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  const tagViewStore = useTagViewStore();
  const breadCrumbsStore = useBreadcrumbsStore();
  const keepAliveStore = useKeepAliveStore();
  const { setTagView, addTagView } = tagViewStore;
  const { getTagView, getStoredTagView, tagViewEnabled } =
    storeToRefs(tagViewStore);
  const { setKeepAliveList } = keepAliveStore;
  const { setBreadcrumbs } = breadCrumbsStore;

  router.beforeEach((to, from) => {
    LoadingBar.stop();
    LoadingBar.start();

    // Filter for only workspaces
    if (
      workspaceApps.filter(
        (e) => to.fullPath.startsWith(`/${e}/`) && e !== Workspace.Account,
      ).length < 1
    ) {
      return;
    }

    if (to.name != null && tagViewEnabled.value) {
      // is a public route
      if (to.meta.permission === false) return;
      const storedTagView = (getStoredTagView.value ??
        []) as unknown as RouteData[];

      if (getTagView.value.length === 0 && storedTagView.length !== 0) {
        setTagView(storedTagView);
        setKeepAliveList(storedTagView);
      }
      // else if (from.fullPath !== to.fullPath) {
      else {
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
