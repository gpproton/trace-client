<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import SwitcherButton from './SwitcherButton.vue';
import { useAppBreakpoints } from '@/composables/breakpoints';
import { IModule } from '@trace/shared';

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
const notifyValue = ref('0');

interface IProps {
  items: IModule[];
}

const props = defineProps<IProps>();
</script>

<template>
  <div v-bind="$attrs" :class="!isDesktop ? 'window-width' : ''">
    <switcher-button
      v-model="notifyValue"
      :items="props.items"
      dense
      class="q-mt-sm q-mx-sm"
    />
    <div class="text-center" style="min-height: 400px; min-width: 320px">
      <q-icon class="q-ma-xl" color="primary" name="bi-bell" size="4em" />
    </div>
  </div>
</template>
