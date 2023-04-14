<script setup lang="ts">
import AppLogo from '@/assets/vectors/logo.svg';
import { IModule } from '@/libs/IModule';

interface IProps {
  modelValue: boolean;
  rootItems: Array<IModule>;
  name: string;
}

const props = defineProps<IProps>();
</script>

<Script lang="ts">
export default {
  name: 'SidebarDesktopHeader',
};
</Script>

<template>
  <q-toolbar class="q-mt-sm q-mb-xl q-pa-none" style="min-height: 72px">
    <div v-show="props.modelValue" class="q-mx-auto" style="height: 55px">
      <app-logo class="app-logo self-start col-1 q-mx-auto" />
    </div>
    <div
      class="full-width row cursor-pointer q-px-md"
      v-show="!props.modelValue"
      style="height: 55px"
    >
      <app-logo class="app-logo self-start col-3" />
      <div class="col-9 row">
        <div class="col-10 text-no-wrap q-pl-md">
          <div class="text-h5 text-weight-medium text-primary">
            {{ props.name }}
          </div>
          <div class="text-accent-more">{{ 'Workspace' }}</div>
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

.icon-unfold-more {
  transform: scale(0.7);
  fill: var(--q-accent-more);
}
</style>
