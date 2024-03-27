<script setup lang="ts">
import { storeToRefs } from 'pinia';
// import SwitcherButton from './SwitcherButton.vue';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';

defineOptions({ name: 'NotificationDialog' });
const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
// const notifyValue = ref('0');
</script>

<template>
  <div v-bind="$attrs" :class="!isDesktop ? 'window-width' : ''">
    <div class="text-center" style="min-height: 400px; min-width: 320px">
      <q-icon class="q-ma-xl" color="primary" name="bi-bell" size="4em" />
    </div>
  </div>
</template>
