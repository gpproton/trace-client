<script lang="ts" setup>
import BaseWidget from './BaseWidget.vue';
defineOptions({ name: 'MediumWidget' });

interface IProps {
  height: number;
  width: number;
}
defineProps<IProps>();
</script>

<template>
  <base-widget :height-value="height" :width-value="width"></base-widget>
</template>
