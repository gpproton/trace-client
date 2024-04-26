<script lang="ts" setup>
import { ref } from 'vue';
import AppLogo from '@trace/base/icons/logo.svg';
import LangSelector from '@trace/base/components/LangSelector.vue';

defineOptions({ name: 'DocumentLayout' });
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hHh lpR lFf">
    <q-header class="bg-transparent text-prmary" bordered>
      <q-toolbar>
        <div class="row items-center">
          <app-logo class="app-logo" />
          <q-toolbar-title class="text-h5 text-primary text-weight-bold">
            {{ 'Trace' }}
          </q-toolbar-title>
          <q-btn
            color="primary"
            dense
            flat
            round
            icon="bi-list"
            @click="toggleLeftDrawer"
          />
        </div>
        <q-space />
        <div class="row q-gutter-lg">
          <q-btn
            no-caps
            color="primary"
            :to="{ name: 'work-spaces' }"
            class="text-body1 border-radius-sm"
            >{{ $t('router.work-spaces') }}</q-btn
          >
          <lang-selector />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <slot>
        <router-view />
      </slot>
    </q-page-container>
  </q-layout>
</template>
