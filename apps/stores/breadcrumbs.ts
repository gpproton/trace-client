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
 * Modified At: Tue Mar 12 2024
 */

import { defineStore } from 'pinia';
import type { RouteData } from "@trace/base/types/index";
import type { RouteRecordNormalized, LocationQuery } from "vue-router";
import { getFirst } from "@trace/base/utils/index";

export const useBreadcrumbsStore = defineStore(
  'breadCrumbs',
  () => {
    const breadcrumbs = ref<RouteData[]>([]);
    const getBreadCrumbs = computed(() => breadcrumbs.value);
    const setBreadcrumbs = (matched: RouteRecordNormalized[], query: LocationQuery): void => {
      const temp = [];
      for (let i = 0; i < matched.length; i++) {
        const breadcrumb: RouteData = {
          title: matched[i].meta.title,
          name: matched[i].name,
          fullPath: matched[i].path,
          icon: matched[i].meta.icon,
          keepAlive: matched[i].meta.keepAlive,
        };
        temp.push(breadcrumb);
      }

      const last = temp.length - 1
      if (Object.keys(query).length)
        temp[last].title += '：' + getFirst(query)

      breadcrumbs.value = temp;
    }

    return {
      breadcrumbs,
      getBreadCrumbs,
      setBreadcrumbs
    };
  }
);
