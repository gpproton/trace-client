<script lang="ts" setup>
import { ref } from 'vue';
import GenericHeader from '@/app/GenericHeader.vue';
import GenericFooter from '@/app/GenericFooter.vue';

defineOptions({ name: 'DocumentLayout' });
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hHh lpR lFf">
    <q-header class="bg-transparent text-prmary" bordered>
      <generic-header>
        <template #left>
          <q-btn
            color="primary"
            dense
            flat
            round
            icon="bi-list"
            class="q-ml-md"
            @click="toggleLeftDrawer"
          />
        </template>
        <template #end>
          <q-btn
            no-caps
            color="primary"
            :to="{ name: 'work-spaces' }"
            class="text-body1 border-radius-sm"
            >{{ $t('router.work-spaces') }}</q-btn
          >
        </template>
      </generic-header>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>
    <q-footer class="bg-secondary">
      <generic-footer></generic-footer>
    </q-footer>
  </q-layout>
</template>
