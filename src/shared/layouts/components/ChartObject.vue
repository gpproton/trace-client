<script setup lang="ts">
import { ref, provide, onMounted } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';

interface IProps {
  modelValue: Record<string, unknown>;
}

const props = withDefaults(defineProps<IProps>(), {});

defineEmits<{
  (eventName: 'update:modelValue', value: Record<string, unknown>): void;
}>();

const visible = ref(false);

onMounted(() => {
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);

  provide(THEME_KEY, 'light');

  visible.value = true;
});
</script>

<template>
  <v-chart
    v-if="visible"
    class="text-center"
    :option="props.modelValue"
    v-bind="$attrs"
  />
</template>
