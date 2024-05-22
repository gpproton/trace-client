<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
import { useDialogPluginComponent } from 'quasar';

const { dialogRef, onDialogHide } = useDialogPluginComponent();
defineEmits([...useDialogPluginComponent.emits]);

const search = ref('');
withDefaults(
  defineProps<{
    padding?: boolean;
  }>(),
  {
    padding: true,
  },
);
</script>

<template>
  <q-dialog ref="dialogRef" class="fit border-radius-sm" @hide="onDialogHide">
    <q-card class="q-dialog-plugin fit border-radius-sm">
      <!-- list buttons -->
      <q-toolbar class="q-pa-sm">
        <q-input
          v-model="search"
          filled
          bottom-slots
          label="Search"
          class="full-width"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
      <div class="row justify-center">{{ 'Contents' }}</div>
    </q-card>
  </q-dialog>
</template>
