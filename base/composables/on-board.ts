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

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useOnboardStore = defineStore(
  'on-board',
  () => {
    const route = useRoute();
    const progress = ref<string[]>([]);

    const status = (name: string) => {
      const isRoute = route.name === name;
      const isCompleted = progress.value.includes(name);

      if (isCompleted) return true
      if (isRoute && !isCompleted) return false;

      return null;
    };

    const getColor = computed(() => {
      return (name: string) => status(name) === null ? 'secondary' : 'green';
    });

    const getIcon = computed(() => {
      return (name: string) => {
        const state = status(name);
        if (state === null) return ''

        return state ? 'done' : 'fiber_manual_record';
      };
    });
    const addPage = () => {
      const currentRoute: string = route.name as string;
      const isContained = progress.value.includes(currentRoute);
      if (!isContained) {
        progress.value.push(currentRoute);
      }
    }

    return {
      progress,
      status,
      addPage,
      getColor,
      getIcon
    };
  }
);
