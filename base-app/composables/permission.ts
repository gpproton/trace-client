import { useUserAccountStore } from "@/stores/user-account";
import { ActionState } from "@trace/model";
import { storeToRefs } from 'pinia';

export const useAppPermission = () => {
  const userStore = useUserAccountStore();

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

  return {
    hasPermission,
  };
};
