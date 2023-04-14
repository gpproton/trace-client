<script setup lang="ts">
import { IModule } from '@/libs/IModule';

type IWindowItems = IModule & {
  id: number;
};

interface IProps {
  items: Array<IWindowItems>;
  modelValue?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0,
});
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: number): void;
  (eventName: 'gridAction', value: number): void;
}>();
const gridAction = (value: number) => {
  emits('gridAction', value);
  emits('update:modelValue', value);
};
</script>

<script lang="ts">
export default {
  name: 'MenuGridValue',
};
</script>

<template>
  <div
    class="q-pa-xs q-gutter-lg row justify-center no-scroll overflow-hidden"
    v-bind="$attrs"
  >
    <div
      v-for="(item, itemIndex) in props.items"
      :key="itemIndex"
      class="q-pa-xs text-center grid"
      :class="item.id === props.modelValue ? 'active-grid' : ''"
      @click="gridAction(item.id)"
    >
      <q-icon flat class="q-mb-sm grid-icon" :name="item.icon" />
      <div class="grid-text text-weight-medium">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin grid-highlight($color) {
  .grid-icon {
    background-color: $color !important;
    color: var(--q-primary-inverted) !important;
  }

  .grid-text {
    color: $color !important;
  }
}

.grid {
  min-width: 48px !important;
  word-wrap: break-word;
  text-decoration: none;
  cursor: pointer;
  .grid-icon {
    font-size: 2.3rem;
    padding: 0.9rem;
    border-radius: $border-radius-sm;
    color: var(--q-accent-more);
    background-color: var(--q-app-background);
  }
  .grid-text {
    font-size: 0.95rem;
    color: var(--q-accent-more);
    word-wrap: break-word;
  }
}

.active-grid {
  @include grid-highlight(var(--q-primary));
}
</style>
