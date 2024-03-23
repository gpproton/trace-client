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
 * Created At: Wednesday, 20th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat Mar 23 2024
 */

import type { IModule } from '@trace/shared';
import { defineStore, storeToRefs } from 'pinia';
import { usePageStore } from './page';

export const useLayoutStore = defineStore('app-layout', () => {
  const { title } = storeToRefs(usePageStore());
  /** States */
  const name = ref<string>('Trace');
  const search = ref<string>('');
  const sencondaryNavigation = ref<IModule[]>([]);
  const showPrimarySidebar = ref<boolean>(false);
  const primaryMiniState = ref<boolean>(true);
  const showSecondarySidebar = ref<boolean>(false);

  const setLayoutOptions = () => {};

  return {
    name,
    title,
    search,
    sencondaryNavigation,
    showPrimarySidebar,
    primaryMiniState,
    showSecondarySidebar,
    setLayoutOptions,
  };
});
