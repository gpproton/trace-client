<script setup lang="tsx">
import { inject } from 'vue';
import AppLogo from '@trace/base/assets/icons/logo.svg';
import { QBtn } from 'quasar';

defineOptions({ name: 'SidebarHeader' });
const { modelValue } = defineModels<{
  modelValue?: ModelOptions<boolean, { defaultValue: false; deep: true }>;
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
      <nuxt-link v-if="mouseOver" to="/">
        <app-logo class="app-logo self-start col-1 q-mx-auto" />
      </nuxt-link>
      <toogle-button v-else></toogle-button>
    </div>
    <div
      v-show="!modelValue"
      class="full-width row q-px-md"
      style="height: 49px"
    >
      <nuxt-link style="text-decoration: none" class="col-10 row" to="/">
        <app-logo class="sidebar-logo col self-start" />
        <div class="col-9 text-no-wrap q-pl-md">
          <div class="text-h5 text-weight-medium text-primary text-capitalize">
            {{ workspace }}
          </div>
          <div class="text-accent-more">
            {{ 'Workspace' }}
          </div>
        </div>
      </nuxt-link>
      <div class="col">
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
