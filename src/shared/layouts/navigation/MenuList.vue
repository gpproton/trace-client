<script setup lang="ts">
import { IMenu } from '@/libs/constants/Menu';

interface IProps {
  items: Array<IMenu>;
  mini: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  mini: true,
});
</script>

<template>
  <q-list v-bind="$attrs" padding>
    <q-item
      v-for="item in items"
      :key="item.title"
      :to="{ name: item.name }"
      clickable
      class="q-mb-xs"
      :class="props.mini ? 'q-mx-sm' : 'q-mx-md'"
      active-class="app-list-item-active"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section class="app-list-item-text">
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style lang="scss" scoped>
.q-list {
  .q-icon {
    font-size: 2rem;
    @media screen and (max-width: $breakpoint-md-min) {
      font-size: 2.4rem;
    }
  }
  :hover {
    background-color: var(--q-app-background);
  }
}
.q-item {
  border-radius: $border-radius-sm;
  :hover {
    background-color: var(--q-app-background);
  }
  .q-icon,
  .q-item__label {
    color: var(--q-primary);
    background-color: transparent;
  }
}

.app-list-item-active {
  background-color: var(--q-primary) !important;
  :hover {
    background-color: var(--q-primary) !important;
  }
  .q-icon,
  .q-item__label {
    color: var(--q-primary-inverted) !important;
  }
}

.app-list-item-text {
  font-size: 0.91rem;
  font-weight: 100;
  @media screen and (max-width: $breakpoint-md-min) {
    font-size: 1.2rem;
  }
}
</style>
