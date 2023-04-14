<script setup lang="ts">
import { IModule } from '@/libs/IModule';
import MenuList from './MenuList.vue';

interface IProps {
  modelValue: boolean;
  overviewItems: Array<IModule>;
  moduleItems: Array<IModule>;
  identityItems: Array<IModule>;
}

const props = defineProps<IProps>();
defineEmits<{
  (eventName: 'update:modelValue', value: boolean): void;
}>();
</script>

<script lang="ts">
export default {
  name: 'ModuleNavigation',
};
</script>

<template>
  <fragment>
    <div v-show="!props.modelValue" class="q-mt-lg">
      <menu-list :mini="true" :items="props.overviewItems"></menu-list>
      <q-separator class="q-my-xs q-mx-sm" />
      <menu-list :mini="true" :items="props.moduleItems"></menu-list>
    </div>
    <div v-show="props.modelValue" class="q-mt-xl">
      <menu-list
        :mini="true"
        :items="props.identityItems"
        class="q-mt-xl"
      ></menu-list>
    </div>
  </fragment>
</template>
