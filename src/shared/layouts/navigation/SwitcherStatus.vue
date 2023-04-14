<script setup lang="ts">
import { IStatusTypes } from '@/libs/Track/Status';
import { ref } from 'vue';

interface IProps {
  items: Array<IStatusTypes>;
  modelValue?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  dense: true,
  modelValue: 'none',
});
const placeHolderState = ref(props.modelValue);
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: string): void;
}>();
const updateValue = (value: string) => {
  if (placeHolderState.value === value) placeHolderState.value = 'none';
  else placeHolderState.value = value;
  emits('update:modelValue', placeHolderState.value);
};
</script>
<script lang="ts">
export default {
  name: 'SwitcherStatus',
};
</script>

<template>
  <div class="row justify-center aligns-center q-my-xs">
    <span
      v-for="(statusItem, statusIndex) in props.items"
      :key="statusIndex"
      class="status-indicator text-nowrap q-mx-xs q-pa-xs text-secondary"
      :class="
        statusItem.id === placeHolderState
          ? 'status-indicator-active shadow-1 q-mx-sm q-px-sm'
          : ''
      "
      @click="updateValue(statusItem.id)"
    >
      <span
        class="status-indicator-circle border-radius-xs text-center text-nowrap text-white q-mr-xs"
        :style="'background-color: ' + statusItem.color"
        >{{ statusItem.count }}</span
      >
      {{ statusItem.title }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.status-indicator {
  display: inline-block;
  vertical-align: middle;
}
.status-indicator:active,
.status-indicator:hover {
  cursor: pointer;
}
.status-indicator-active {
  background-color: #fff;
  border-radius: $border-radius-sm;
}
.status-indicator-circle {
  display: inline-block;
  min-width: 22px;
  background-color: $grey-5;
  vertical-align: middle;
}
</style>
