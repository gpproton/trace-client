<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import MapView from '@/map/MapView.vue';

const PanelWindow = defineAsyncComponent(
  () => import('@/map/components/PanelWindow.vue'),
);
// TODO: create custom import function
// const PanelWindow = () => import('@/map/components/PanelWindow.vue');
</script>

<template>
  <page-wrapper class="no-border" :padding="false">
    <div class="map-view">
      <map-view>
        <l-control :disable-scroll-propagation="true" position="topleft">
          <panel-window></panel-window>
        </l-control>
      </map-view>
    </div>
  </page-wrapper>
</template>

<style>
@import '@/map/styles/frame.scss';
</style>
