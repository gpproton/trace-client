<script setup lang="ts">
/* eslint-disable vue/no-unused-vars */
import { ref } from 'vue';
const model = ref();
const options = ref(['One', 'Two', 'Three']);
const slotNames = [
  'default',
  'prepend',
  'append',
  // 'before',
  // 'after',
  // 'label',
  // 'error',
  // 'selected',
  // 'counter',
  // 'loading',
] as const;
</script>
<script lang="ts">
export default {
  name: 'InputSelect',
};
</script>

<template>
  <q-select
    color="action"
    label-color="accent"
    bg-color="app-background-shift2"
    standout="bg-app-background text-accent"
    transition-show="scale"
    transition-hide="scale"
    v-model="model"
    :options="options"
    label="Inout Select"
  >
    <template v-for="slot in slotNames" #[slot]="slotProps">
      <slot :name="slot"></slot>
    </template>
  </q-select>
</template>
