import type { Directive } from 'vue';
import { useAppPermission } from '@/composables/permission';
import { Workflow } from '@trace/model';

export default defineNuxtPlugin((nuxtApp) => {
  const { hasWorkflow } = useAppPermission();
  const updateElVisible = (el: HTMLElement, workflows: Workflow[]) => {
    if (!workflows)
      throw new Error(`need permission: like v-works="['telematics', 'system']"`);

    if (!hasWorkflow(workflows))
      el.parentElement?.removeChild(el);
  }

  const workflowDirective: Directive<HTMLElement, Workflow[]> = {
    mounted(el, binding) {
      updateElVisible(el, binding.value);
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value);
    },
  };

  nuxtApp.vueApp.directive('works', workflowDirective)
  nuxtApp.vueApp.directive('workflows', workflowDirective)

  return {
    provide: {
      works: (workflows: Workflow[]) => hasWorkflow(workflows),
      workflows: (workflows: Workflow[]) => hasWorkflow(workflows)
    }
  }
});
