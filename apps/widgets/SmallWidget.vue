<script lang="ts" setup>
import BaseWidget from './BaseWidget.vue';
defineOptions({ name: 'SmallWidget' });

interface IProps {
  height: number;
  width: number;
}
defineProps<IProps>();
</script>

<template>
  <base-widget :height="height" :width="width"></base-widget>
</template>
