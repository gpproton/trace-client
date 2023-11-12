import { useUserAccountStore } from "@/stores/user-account";
import { useServerStore } from '@/stores/server';
import { ActionState, Workflow } from "@trace/model";
import { storeToRefs } from 'pinia';

export const useAppPermission = () => {
  const userStore = useUserAccountStore();
  const serverStore = useServerStore();

  function hasPermission(action: ActionState) {
    const { getUserPermmisions } = storeToRefs(userStore);
    const permission = getUserPermmisions.value;
    if (permission) {
      const featurePermission = permission.find(x => {
        const checkModule = action.module === undefined || x.module == action.module;
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
      return getWorkflow.value === Workflow.System || Object.values(workflows).includes(workflow);
    }
    return false;
  }

  return {
    hasPermission,
    hasWorkflow,
  };
};
