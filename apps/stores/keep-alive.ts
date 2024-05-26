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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 25 2024
 */

import type { RouteData } from '@trace/base/typings';
import { defineStore } from 'pinia';

export const useKeepAliveStore = defineStore(
  'state-keep-alive',
  () => {
    const keepAliveList = ref<string[]>([]);
    const getKeepAliveList = computed(() => keepAliveList.value);

    const setKeepAliveList = (payload: RouteData[]) => {
      keepAliveList.value = [];
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].keepAlive) {
          keepAliveList.value.push(payload[i].name as string);
        }
      }
      return keepAliveList.value;
    };

    return {
      keepAliveList,
      getKeepAliveList,
      setKeepAliveList,
    };
  },
  {
    share: {
      enable: true,
    },
    persist: {
      paths: ['keepAliveList'],
    },
  },
);
