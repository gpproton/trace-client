<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
import { useDialogPluginComponent } from 'quasar';
import type { Router } from '@/.nuxt/vue-router-stub';

const router: Router = useRouter();
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
defineEmits([...useDialogPluginComponent.emits]);
withDefaults(
  defineProps<{
    scrollable: boolean;
    padding: boolean;
  }>(),
  {
    scrollable: false,
    padding: true,
  },
);

const triggerClose = () => {
  router.back();
  onDialogHide();
};
</script>

<template>
  <q-dialog ref="dialogRef" @hide="triggerClose">
    <q-card class="q-dialog-plugin">
      <!-- buttons example -->
      <router-inject></router-inject>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onDialogOK" />
        <q-btn color="primary" label="Cancel" @click="onDialogCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
