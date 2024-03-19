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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue Mar 12 2024
 */

import type { Directive } from 'vue';
import { useAppPermission } from '@/composables/permission';
import { Workflow } from '@trace/model';

export default defineNuxtPlugin((nuxtApp) => {
  const { hasWorkflow } = useAppPermission();
  const updateElVisible = (el: HTMLElement, workflows: Workflow[]) => {
    if (!workflows)
      throw new Error(
        `need permission: like v-works="['telematics', 'system']"`,
      );

    if (!hasWorkflow(workflows)) el.parentElement?.removeChild(el);
  };

  const workflowDirective: Directive<HTMLElement, Workflow[]> = {
    mounted(el, binding) {
      updateElVisible(el, binding.value);
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value);
    },
  };

  nuxtApp.vueApp.directive('works', workflowDirective);
  nuxtApp.vueApp.directive('workflows', workflowDirective);

  return {
    provide: {
      works: (workflows: Workflow[]) => hasWorkflow(workflows),
      workflows: (workflows: Workflow[]) => hasWorkflow(workflows),
    },
  };
});
