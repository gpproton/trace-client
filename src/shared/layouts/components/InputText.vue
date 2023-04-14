<script setup lang="ts">
/* eslint-disable vue/no-unused-vars */
import { ref } from 'vue';
const model = ref('');
// const slotNames = [
//   'default',
//   'prepend',
//   'append',
//   // 'before',
//   // 'after',
//   // 'label',
//   // 'error',
//   // 'selected',
//   // 'counter',
//   // 'loading',
// ] as const;
</script>
<script lang="ts">
export default {
  name: 'InputText',
};
</script>

<template>
  <q-input
    v-bind="$attrs"
    v-model="model"
    color="action"
    label-color="accent"
    bg-color="app-background-shift2"
    standout="bg-app-background text-accent"
    label="Sample Label"
  >
    <!--
    <template v-for="slot in slotNames" #[slot]="slotProps">
      <slot :name="slot"></slot>
    </template>
    -->
    <template #prepend>
      <slot name="prepend"></slot>
    </template>

    <template #append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>
