<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const MapView = defineAsyncComponent(() => import('@/map/MapView.vue'));

defineOptions({ name: 'RouteView' });
</script>

<template>
  <page-wrapper class="no-border" :padding="false">
    <div class="map-view row">
      <div class="col-4 gt-sm">
        <q-card
          square
          flat
          class="fit panel-content no-padding border-radius-sm column justify-between no-scroll"
        >
          <!-- Panel content-->
          <div class="text-center text-h6 q-pa-md">
            {{ 'Route Content' }}
          </div>
        </q-card>
      </div>
      <div class="col-8">
        <map-view></map-view>
      </div>
    </div>
  </page-wrapper>
</template>

<style>
@import '@/map/styles/frame.scss';
</style>
