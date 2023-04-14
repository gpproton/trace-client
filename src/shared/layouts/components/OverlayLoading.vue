<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref } from 'vue';

const overlayState = ref(false);
const loadingState = ref(false);
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): void;
  (eventName: 'update:loading', value: boolean): void;
}>();
const setModelValue = (value: boolean) => {
  emits('update:modelValue', value);
  overlayState.value = value;
};
const setLoading = (value: boolean) => {
  emits('update:loading', value);
  loadingState.value = value;
};

defineExpose({ setLoading, setModelValue });
</script>

<template>
  <q-overlay :no-scroll="true" v-model="overlayState">
    <template #body>
      <div class="absolute fit row justify-center items-center">
        <slot name="spinner">
          <q-spinner
            v-if="overlayState && loadingState"
            color="app-background"
            size="7em"
          ></q-spinner>
        </slot>
      </div>
    </template>
    <slot></slot>
  </q-overlay>
</template>
