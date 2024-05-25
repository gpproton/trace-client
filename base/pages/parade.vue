<script>
import { useQuasar } from 'quasar';

definePageMeta({
  layout: 'document',
  permission: false,
});

export default {
  setup() {
    const $q = useQuasar();
    function alert() {
      $q.dialog({
        title: 'Alert',
        message: 'Some message',
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
    return { alert };
  },
};
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn no-caps label="Dialog Check" color="primary" @click="alert" />
  </div>
</template>
