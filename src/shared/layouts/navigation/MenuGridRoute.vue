<script setup lang="ts">
import { IModule } from '@/libs/IModule';

interface IProps {
  items: Array<IModule>;
}

const props = defineProps<IProps>();
const emits = defineEmits<{
  (eventName: 'gridAction'): void;
}>();
const gridAction = () => {
  emits('gridAction');
};
</script>

<script lang="ts">
export default {
  name: 'MenuGridRoute',
};
</script>

<template>
  <div
    class="q-pa-xs q-gutter-lg row justify-center no-scroll overflow-hidden"
    v-bind="$attrs"
  >
    <router-link
      active-class="active-grid"
      v-for="(item, itemIndex) in props.items"
      :key="itemIndex"
      class="q-pa-xs text-center grid"
      :to="{ name: item.name }"
      @click="gridAction"
    >
      <q-icon flat class="q-mb-sm grid-icon" :name="item.icon" />
      <div class="grid-text text-weight-medium">
        {{ item.title }}
      </div>
    </router-link>
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
