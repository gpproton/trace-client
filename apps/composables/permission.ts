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
 * Modified At: Tue May 14 2024
 */

import { useUserAccountStore } from '@/stores/user-account';
import { useServerStore } from '@trace/base/stores/server';
import { type ActionState, Workflow } from '@trace/model';
import { storeToRefs } from 'pinia';

export const useAppPermission = () => {
  const userStore = useUserAccountStore();
  const serverStore = useServerStore();

  function hasPermission(action: ActionState) {
    const { getUserPermmisions } = storeToRefs(userStore);
    const permission = getUserPermmisions.value;
    if (permission) {
      const featurePermission = permission.find((x) => {
        const checkModule =
          action.module === undefined || x.module == action.module;
        const checkFeature = action.feature === x.feature;
        const checkType = x.actions[action.type] === true;

        return checkModule && checkFeature && checkType;
      });

      return featurePermission !== undefined;
    }
    return false;
  }

  const hasWorkflow = (workflows: Workflow[]) => {
    const { getWorkflow } = storeToRefs(serverStore);
    const workflow = getWorkflow.value;
    if (workflow) {
      return (
        getWorkflow.value === Workflow.System ||
        Object.values(workflows).includes(workflow)
      );
    }
    return false;
  };

  return {
    hasPermission,
    hasWorkflow,
  };
};
