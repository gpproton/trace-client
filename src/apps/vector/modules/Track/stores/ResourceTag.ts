import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useResourceTagState = defineStore('app.track.resource-tag', () => {
  const resourceIsLoading = ref(true);
  const resourceIsLoaded = ref(false);
  const resourceTagValue = ref<Array<IResourceTag>>([]);
  const resourceTagSearchValue = ref('');

  const loadResourceTagValues = () => {
    resourceIsLoading.value = true;
    resourceIsLoaded.value = false;
    setTimeout(() => {
      resourceTagValue.value = resourceTagData;
      resourceIsLoading.value = false;
      resourceIsLoaded.value = true;
    }, 700);
  };

  return {
    resourceIsLoading,
    resourceIsLoaded,
    resourceTagValue,
    resourceTagSearchValue,
    loadResourceTagValues,
  };
});

interface IResourceTag {
  id: string;
  name: string;
  parentId?: string;
}

const resourceTagData: Array<IResourceTag> = [
  {
    id: '1',
    name: 'Mohit [ Indomie ]',
  },
  {
    id: '2',
    name: 'Vishal [ Nestle ]',
  },
];
