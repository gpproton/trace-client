<script lang="ts" setup>
import { computed } from 'vue';
// import { storeToRefs } from 'pinia';
// import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
// @ts-ignore
// import VueDraggableResizable from 'vue-draggable-resizable';

defineOptions({ name: 'BaseWidget' });

interface IProps {
  heightValue: number;
  widthValue: number;
}

// const { currentWidth, isDesktop } = storeToRefs(useAppBreakpoints());
const props = withDefaults(defineProps<IProps>(), {
  heightValue: 1,
  widthValue: 1,
});
const computedHeight = computed(() => props.heightValue * 150);
const computedHeightStyle = computed(() => `${computedHeight.value - 8}px`);
// const computedWidth = computed(() => {
//   let localWidth = currentWidth.value;
//   if (isDesktop.value) localWidth -= 80;
//   else {
//     localWidth -= 24;
//   }

//   return (localWidth / 12) * (props.widthValue * 3);
// });
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

// watchEffect(() => {
//   console.log(`Computed width: ${computedWidth.value}`);
// });
</script>

<template>
  <!-- <vue-draggable-resizable
    v-if="render"
    :resizable="true"
    :draggable="true"
    class-name="widget"
    :disable-user-select="false"
    :lock-aspect-ratio="true"
    :w="computedWidth"
    :h="computedHeight"
    :prevent-deactivation="true"
    :active="true"
    :handles="['tm', 'bm', 'ml', 'mr']"
  > -->
  <div class="widget" :class="computedWidthClass">
    <q-card class="widget-inner">
      <slot></slot>
    </q-card>
  </div>
  <!-- </vue-draggable-resizable> -->
</template>

<style lang="scss" scoped>
@import 'vue-draggable-resizable/style.css';
@import './widget-styles';

.widget {
  height: v-bind(computedHeightStyle);
}
</style>
