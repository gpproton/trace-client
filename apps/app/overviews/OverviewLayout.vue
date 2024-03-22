<script lang="ts" setup>
import SwitcherButton from '@/components/extra/SwitcherButton.vue';
import type { RouteMenu } from '@trace/base/typings';

const navigations: RouteMenu[] = [
  {
    name: 'core-overview.dashboard',
    title: 'Dashboard',
    icon: '',
  },
  {
    name: 'core-overview.trends',
    title: 'Trends',
    icon: '',
  },
];

const selected = ref('Status');
const dashboardTypes: string[] = ['Status', 'Availability'];
</script>

<template>
  <page-wrapper>
    <div class="row justify-between align-center q-px-sm q-py-xs">
      <switcher-button
        style="width: 280px"
        :dense="true"
        :route="true"
        :items="navigations"
      ></switcher-button>

      <div class="row q-gutter-md">
        <q-select
          v-model="selected"
          dense
          :options="dashboardTypes"
          label=""
          class="border-radius-sm"
        />
        <q-btn
          dense
          icon="bi-sliders2"
          color="accent"
          class="q-px-md border-radius-sm"
        ></q-btn>
      </div>
    </div>
    <router-view></router-view>
  </page-wrapper>
</template>
