<script setup lang="ts">
import AppLogo from '@/icons/logo.svg';

interface IProps {
  modelValue: boolean;
  name: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <q-toolbar class="q-pa-none" style="min-height: 72px">
    <div v-show="props.modelValue" class="q-mx-auto" style="height: 55px">
      <app-logo class="app-logo self-start col-1 q-mx-auto" />
    </div>
    <div
      v-show="!props.modelValue"
      class="full-width row cursor-pointer q-px-md"
      style="height: 55px"
    >
      <app-logo class="app-logo self-start col-3" />
      <div class="col-9 row">
        <div class="col-10 text-no-wrap q-pl-md">
          <div class="text-h5 text-weight-medium text-primary">
            {{ props.name }}
          </div>
          <div class="text-accent-more">
            {{ 'Workspace' }}
          </div>
        </div>
      </div>
    </div>
  </q-toolbar>
</template>

<style lang="scss" scoped>
.app-logo {
  width: 54px;
  height: 54px;
  fill: var(--q-primary);
  border-radius: $border-radius-sm;
}
</style>
