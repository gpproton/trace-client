<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useDialogPluginComponent } from 'quasar';
import type { RouteMenu } from '@trace/base/typings';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';

const SidebarList = defineAsyncComponent(
  () => import('@/components/drawer/SidebarList.vue'),
);

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const emit = defineEmits({ ...useDialogPluginComponent.emitsObject });
withDefaults(
  defineProps<{
    padding?: boolean;
    moduleFeatures?: RouteMenu[];
  }>(),
  {
    padding: true,
    modules: () => [],
    moduleFeatures: () => [],
  },
);

const onOkClick = () => {
  emit('ok');
  dialogRef.value?.hide();
};

defineExpose({
  dialogRef,
  onOkClick,
  onDialogHide,
  onDialogOK,
  onDialogCancel,
});
</script>

<template>
  <q-dialog
    ref="dialogRef"
    no-refocus
    :transition-show="isDesktop ? 'fade-in' : 'slide-up'"
    :transition-hide="isDesktop ? 'fade-out' : 'slide-down'"
    @hide="onDialogHide"
  >
    <q-card class="q-dialog-plugin fit q-pa-xs">
      <slot>
        <sidebar-list :items="moduleFeatures" />
      </slot>
    </q-card>
  </q-dialog>
</template>
