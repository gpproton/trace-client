<script setup lang="ts">
import { IModule } from '@trace/shared';
import { ref } from 'vue';

interface IProps {
  items: IModule[];
  dense?: boolean;
  route?: boolean;
  modelValue?: string;
  flat?: boolean;
  outsideArrows?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  dense: false,
  route: false,
  modelValue: '',
  flat: false,
  outsideArrows: true,
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

<template>
  <q-tabs
    v-model="placeHolderState"
    :dense="props.dense"
    no-caps
    inline-label
    :outside-arrows="props.outsideArrows"
    align="center"
    indicator-color="transparent"
    class="bg-app-background border-radius-sm text-accent"
    :active-class="
      props.flat
        ? 'shadow-0 bg-app-plainer text-action'
        : 'shadow-2 bg-app-plainer text-action'
    "
    content-class="text-body1 text-weight-regular"
    v-bind="$attrs"
    @update:model-value="updateValue"
  >
    <template v-if="props.route">
      <q-route-tab
        v-for="(moduleItem, moduleIndex) in props.items"
        :key="moduleIndex"
        :name="moduleItem.name"
        :to="{ name: moduleItem.name }"
        class="border-radius-sm q-ma-xs q-px-none"
        content-class="q-px-md"
      >
        {{ moduleItem.title }}
      </q-route-tab>
    </template>
    <q-tab
      v-for="(moduleItem, moduleIndex) in props.items"
      v-else
      :key="moduleIndex"
      :name="moduleItem.name"
      class="border-radius-sm q-ma-xs"
      content-class="q-px-sm"
    >
      {{ moduleItem.title }}
    </q-tab>
  </q-tabs>
</template>
