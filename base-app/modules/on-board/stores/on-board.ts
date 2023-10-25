import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useOnboardStore = defineStore(
  'on-board',
  () => {
    const route = useRoute();
    const progress = ref<string[]>([]);

    const status = (name: string) => {
      const isRoute = route.name === name;
      const isCompleted = progress.value.includes(name);

      if (isCompleted) return true
      if (isRoute && !isCompleted) return false;

      return null;
    };

    const getColor = computed(() => {
      return (name: string) => status(name) === null ? 'secondary' : 'green';
    });

    const getIcon = computed(() => {
      return (name: string) => {
        const state = status(name);
        if (state === null) return ''

        return state ? 'done' : 'fiber_manual_record';
      };
    });
    const addPage = () => {
      const isContained = progress.value.includes(route.name);
      if (!isContained) {
        progress.value.push(route.name);
      }
    }

    return {
      progress,
      status,
      addPage,
      getColor,
      getIcon
    };
  }
);
