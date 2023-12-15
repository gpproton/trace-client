import { IModule } from '@trace/shared';
import { defineStore, storeToRefs } from 'pinia';
import { usePageStore } from './page';

export const useLayoutStore = defineStore(
  'app-layout',
  () => {
    const { title } = storeToRefs(usePageStore());
    /** States */
    const name = ref<string>('Trace');
    const search = ref<string>('');
    const sencondaryNavigation = ref<IModule[]>([]);
    const showPrimarySidebar = ref<boolean>(false);
    const primaryMiniState = ref<boolean>(true);
    const showSecondarySidebar = ref<boolean>(false);
    const showIdentityList = ref<boolean>(false);

    const setLayoutOptions = () => {

    }

    return {
      name,
      title,
      search,
      sencondaryNavigation,
      showPrimarySidebar,
      primaryMiniState,
      showSecondarySidebar,
      showIdentityList,
      setLayoutOptions
    };
  }
);
