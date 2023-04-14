<script setup lang="ts">
import { setupLayout } from '@/layouts/composables/Layout';
import { IModule } from '@/libs/IModule';

export interface IProps {
  moduleItems: Array<IModule>;
  header?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  moduleItems: () => [],
  header: true,
});

setupLayout({
  moduleItems: props.moduleItems,
  showHeader: props.header,
});
</script>

<script lang="ts">
export default {
  name: 'LayoutWrapper',
};
</script>

<template>
  <slot>
    <router-view></router-view>
  </slot>
</template>
