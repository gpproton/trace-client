import { IModule } from '@/libs/IModule';
import { reactive, toRefs, onBeforeMount } from 'vue';

export interface IModuleContext {
  moduleItems?: Array<IModule>;
  moduleSubItems?: Array<IModule>;
  showHeader?: boolean;
}

export const layoutState = reactive({
  moduleItems: [] as Array<IModule>,
  moduleSubItems: [] as Array<IModule>,
  showHeader: true,
});

export const setupLayout = (
  context: IModuleContext = { moduleItems: [], showHeader: true }
) => {
  onBeforeMount(() => {
    const { moduleItems, showHeader } = toRefs(layoutState);
    moduleItems.value = context.moduleItems || [];
    if (context.showHeader !== undefined) showHeader.value = context.showHeader;
  });
};
