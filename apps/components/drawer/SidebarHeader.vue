<script setup lang="tsx">
import { inject } from 'vue';
import AppLogo from '@trace/base/icons/logo.svg';
import { QBtn } from 'quasar';

defineOptions({ name: 'SidebarHeader' });
const { modelValue } = defineModels<{
  modelValue: boolean;
  mouseOver?: ModelOptions<boolean, { defaultValue: true; deep: true }>;
}>();
const workspace = inject<any>('app:workspace');
const mouseOver = inject<any>('app:sidebar-mouse');

const toogleButton = () => (
  <QBtn
    v-else
    color="primary"
    dense
    flat
    round
    size="lg"
    icon="bi-text-indent-right"
    onClick={() => {
      modelValue.value = !modelValue.value;
    }}
  />
);
</script>

<template>
  <q-toolbar class="q-pa-none" style="min-height: 64px">
    <div v-show="modelValue" class="q-mx-auto" style="height: 49px">
      <app-logo v-if="mouseOver" class="app-logo self-start col-1 q-mx-auto" />
      <toogle-button v-else></toogle-button>
    </div>
    <div
      v-show="!modelValue"
      class="full-width row cursor-pointer q-px-md"
      style="height: 49px"
    >
      <app-logo class="sidebar-logo col self-start" />
      <div class="col-8 row">
        <div class="col-10 text-no-wrap q-pl-md">
          <div class="text-h5 text-weight-medium text-primary text-capitalize">
            {{ workspace }}
          </div>
          <div class="text-accent-more">
            {{ 'Workspace' }}
          </div>
        </div>
        <toogle-button v-show="!mouseOver" class="col"></toogle-button>
      </div>
    </div>
  </q-toolbar>
</template>

<style lang="scss" scoped>
.sidebar-logo {
  width: 50px;
  height: 50px;
  :deep(path) {
    fill: var(--q-primary);
  }
}
</style>
