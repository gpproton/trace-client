<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import VectorMenu from '@/vector/Menu';
import SwitcherButton from '../navigation/SwitcherButton.vue';

const $q = useQuasar();
const notifyValue = ref('0');
</script>

<script lang="ts">
export default {
  name: 'NotificationList',
};
</script>

<template>
  <div v-bind="$attrs" :class="$q.platform.is.mobile ? 'window-width' : ''">
    <switcher-button
      v-model="notifyValue"
      :items="VectorMenu.notificationSwitcher"
      dense
      class="q-mt-sm q-mx-sm"
    ></switcher-button>
    <div class="text-center" style="min-height: 400px; min-width: 320px">
      <q-icon
        class="q-ma-xl"
        color="primary"
        name="bi-bell"
        size="4em"
      ></q-icon>
    </div>
  </div>
</template>
