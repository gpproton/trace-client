import type { Directive } from 'vue';
import { useAppPermission } from '@/composables/permission';
import { ActionState } from '@trace/model';

export default defineNuxtPlugin((nuxtApp) => {
  const { hasPermission } = useAppPermission();
  const updateElVisible = (el: HTMLElement, permission: ActionState) => {
    if (!permission)
      throw new Error(`need permission: like v-permit="{ feature: 'name', type: ActionType.Read }"`);

    if (!hasPermission(permission))
      el.parentElement?.removeChild(el);
  }

  const permissionDirective: Directive<HTMLElement, ActionState> = {
    mounted(el, binding) {
      updateElVisible(el, binding.value);
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value);
    },
  };

  nuxtApp.vueApp.directive('permit', permissionDirective)
  nuxtApp.vueApp.directive('permission', permissionDirective)

  return {
    provide: {
      permit: (action: ActionState) => hasPermission(action),
      permission: (action: ActionState) => hasPermission(action)
    }
  }
})
