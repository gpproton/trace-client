<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'BaseWidget' });

interface IProps {
  height: number;
  width: number;
}

const props = withDefaults(defineProps<IProps>(), {
  height: 1,
  width: 1,
});
const computedHeight = computed(() => `${props.height * 150}px`);
</script>

<template>
  <div class="widget" :class="`col-md-${width * 3} col-xs-12`">
    <q-card class="widget-inner">
      <slot></slot>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
@import './widget-styles';

.widget {
  height: v-bind(computedHeight);
}
</style>
