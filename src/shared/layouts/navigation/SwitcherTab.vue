<script setup lang="ts">
import { IModule } from '@/libs/IModule';
import { ref } from 'vue';

interface IProps {
  items: Array<IModule>;
  dense?: boolean;
  route?: boolean;
  modelValue?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  dense: false,
  route: false,
  modelValue: '',
});

const placeHolderState = ref(props.modelValue);
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: string): void;
}>();
const updateValue = (value: string) => {
  placeHolderState.value = value;
  emits('update:modelValue', value);
};
</script>
<script lang="ts">
export default {
  name: 'SwitcherTab',
};
</script>

<template>
  <div class="q-mx-lg" v-bind="$attrs">
    <q-tabs
      :dense="props.dense"
      no-caps
      inline-label
      v-model="placeHolderState"
      align="center"
      indicator-color="primary"
      active-color="primary"
      class="transparent text-accent-more"
      active-class="text-primary"
      content-class="text-body1 text-weight-medium"
      v-bind="$attrs"
      @update:model-value="updateValue"
    >
      <template v-if="props.route">
        <q-route-tab
          v-for="(moduleItem, moduleRouteIndex) in props.items"
          :key="moduleRouteIndex"
          :name="moduleItem.name"
          :to="{ name: moduleItem.name }"
          :label="moduleItem.title"
          class="q-px-md"
        >
        </q-route-tab
      ></template>
      <q-tab
        v-else
        v-for="(moduleItem, moduleIndex) in props.items"
        :key="moduleIndex"
        :name="moduleItem.name"
        :label="moduleItem.title"
        class="q-px-md"
      ></q-tab>
    </q-tabs>
    <q-separator color="app-background-more"></q-separator>
  </div>
</template>
