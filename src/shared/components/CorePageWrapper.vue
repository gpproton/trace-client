<script lang="ts" setup>
/* eslint-disable vue/require-default-prop */
import { setupPage, IPageContext } from '@/layouts/composables/Page';

export interface IProps {
  page: IPageContext;
  animateEnter?: string;
  animateLeave?: string;
}

const props = defineProps<IProps>();

setupPage({
  page: props.page,
  animateEnter: props.animateEnter,
  animateLeave: props.animateLeave,
});
</script>

<script lang="ts">
export default {
  name: 'CorePageWrapper',
};
</script>

<template>
  <div v-bind="$attrs">
    <slot></slot>
  </div>
</template>
