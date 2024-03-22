<script lang="ts" setup>
import { useLayoutRouteStore } from '@/composables/layout-routes';
import SwitcherButton from '@/components/extra/SwitcherButton.vue';

const { moduleChildrenFn } = useLayoutRouteStore();
const navigations = computed(() => moduleChildrenFn());
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
