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
 * Created At: Wednesday, 20th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 25 2024
 */

import { defineStore, storeToRefs } from 'pinia';
import { usePageStore } from './page';
import { Workspace, appConstants } from '@trace/shared';
import type { Router } from '@/.nuxt/vue-router-stub';

export const useLayoutStore = defineStore('state-app-layout', () => {
  const router: Router = useRouter();
  const { title } = storeToRefs(usePageStore());

  /** States */
  const name = ref<string>(appConstants.appName);
  const search = ref<string>('');
  const showHeaderToolbar = ref(true);
  const showPrimarySidebar = ref<boolean>(false);
  const primaryMiniState = ref<boolean>(true);
  const showSecondarySidebar = ref<boolean>(false);
  const getShowHeaderToolbar = computed(() => showHeaderToolbar.value);

  const setLayoutOptions = () => {};
  const setShowHeaderToolbar = (value: boolean) => {
    showHeaderToolbar.value = value;
  };

  watchEffect(() => {
    const isTrackWorkflow = router.currentRoute.value.fullPath.startsWith(
      `/${Workspace.Track}`,
    );
    if (isTrackWorkflow) {
      setShowHeaderToolbar(false);
    } else {
      setShowHeaderToolbar(true);
    }
  });

  return {
    name,
    title,
    search,
    showHeaderToolbar,
    showPrimarySidebar,
    primaryMiniState,
    showSecondarySidebar,
    getShowHeaderToolbar,
    setLayoutOptions,
    setShowHeaderToolbar,
  };
});
