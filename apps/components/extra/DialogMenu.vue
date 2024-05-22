<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { defineExpose, defineProps, withDefaults, defineEmits } from 'vue';
import { useDialogPluginComponent } from 'quasar';
import type { RouteMenu } from '@trace/base/typings';
import SidebarList from '@/components/drawer/SidebarList.vue';

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
    transition-show="slide-down"
    transition-hide="slide-up"
    @hide="onDialogHide"
  >
    <q-card class="q-dialog-plugin fit q-pa-xs">
      <slot>
        <sidebar-list :items="moduleFeatures" />
      </slot>
    </q-card>
  </q-dialog>
</template>
