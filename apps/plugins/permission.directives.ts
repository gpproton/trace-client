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
 * Created At: Friday, 12th Apr 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 25 2024
 */

import type { Directive } from 'vue';
import { useAppPermission } from '@/composables/permission';
import type { ActionState } from '@trace/model';

export default defineNuxtPlugin((nuxtApp) => {
  const { hasPermission } = useAppPermission();
  const updateElVisible = (el: HTMLElement, permission: ActionState) => {
    if (!permission)
      throw new Error(
        `need permission: like v-permit="{ feature: 'name', type: ActionType.Read }"`,
      );

    if (!hasPermission(permission)) el.parentElement?.removeChild(el);
  };

  const permissionDirective: Directive<HTMLElement, ActionState> = {
    mounted(el, binding) {
      updateElVisible(el, binding.value);
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value);
    },
  };

  nuxtApp.vueApp.directive('permit', permissionDirective);
  nuxtApp.vueApp.directive('permission', permissionDirective);

  return {
    provide: {
      permit: (action: ActionState) => hasPermission(action),
      permission: (action: ActionState) => hasPermission(action),
    },
  };
});
