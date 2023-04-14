import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTaskState = defineStore('app.track.task', () => {
  const taskIsLoading = ref(true);
  const taskIsLoaded = ref(false);
  const taskValue = ref<Array<ITask>>([]);
  const taskSearchValue = ref('');

  const loadTaskValues = () => {
    taskIsLoading.value = true;
    taskIsLoaded.value = false;
    setTimeout(() => {
      taskValue.value = taskData;
      taskIsLoading.value = false;
      taskIsLoaded.value = true;
    }, 1000);
  };

  return {
    taskIsLoading,
    taskIsLoaded,
    taskValue,
    taskSearchValue,
    loadTaskValues,
  };
});

interface ITask {
  id: string;
}

const taskData: Array<ITask> = [
  {
    id: '1',
  },
  {
    id: '2',
  },
];
