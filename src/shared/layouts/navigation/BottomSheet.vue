<script setup lang="ts">
import { ref, watch } from 'vue';
import { Sheet } from 'bottom-sheet-vue3';
import 'bottom-sheet-vue3/css/style.css';

const isOpen = ref(false);

interface IProps {
  sliderIconColor?: string;
  sheetColor?: string;
  containerColor?: string;
  radius?: string;
  height?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  radius: '16px',
  height: '30%',
  sliderIconColor: 'var(--q-app-surface)',
  sheetColor: 'var(--q-app-sheet)',
  containerColor: 'var(--q-app-shade)',
});

const emits = defineEmits<{
  (eventName: 'update:modelValue:visible', value: boolean): void;
}>();

watch(isOpen, () => {
  emits('update:modelValue:visible', isOpen.value);
});
</script>

<script lang="ts">
export default {
  name: 'BottomSheet',
};
</script>

<template>
  <sheet
    v-bind="$attrs"
    v-model:visible="isOpen"
    :radius="props.radius"
    :height="props.height"
    :slider-icon-color="props.sliderIconColor"
    :sheet-color="props.sheetColor"
    :container-color="props.containerColor"
  >
    <slot>
      <h6 class="text-center">Bottom Sheet</h6>
    </slot>
  </sheet>
</template>
