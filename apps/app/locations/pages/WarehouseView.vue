<script lang="ts" setup>
import MapView from '@/map/MapView.vue';
</script>

<template>
  <page-wrapper class="no-border" :padding="false">
    <div class="map-view row">
      <div class="col-4">
        <q-card
          square
          flat
          class="fit panel-content no-padding border-radius-sm column justify-between no-scroll"
        >
          <!-- Panel content-->
          <div class="text-center text-h6 q-pa-md">
            {{ 'Warehouse Content' }}
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
