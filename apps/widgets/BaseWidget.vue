<script lang="ts" setup>
import { computed } from 'vue';
// import { storeToRefs } from 'pinia';
// import VueDraggableResizable from 'vue-draggable-resizable';

defineOptions({ name: 'BaseWidget' });
const props = withDefaults(
  defineProps<{ heightValue: number; widthValue: number }>(),
  {
    heightValue: 1,
    widthValue: 1,
  },
);
const computedHeight = computed(() => {
  return props.heightValue === 1
    ? props.heightValue * 150
    : props.heightValue * 150;
});
const computedHeightStyle = computed(() => `${computedHeight.value}px`);
const computedWidthClass = computed(() => {
  const mobileSize = props.widthValue * 6 > 12 ? 12 : props.widthValue * 6;
  const desktopSize = props.widthValue * 3 > 12 ? 12 : props.widthValue * 3;

  return `col-md-${desktopSize} col-sm-${mobileSize} col-xs-12`;
});
const render = ref(false);
const timeout = ref();
onMounted(() => {
  timeout.value = setTimeout(() => {
    render.value = true;
  }, 500);
});

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <div class="col widget" :class="computedWidthClass">
    <q-card class="widget-inner q-pa-0 q-ma-0">
      <slot></slot>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
@import 'vue-draggable-resizable/style.css';
@import './widget-styles';

.widget {
  height: v-bind(computedHeightStyle);
}
</style>
