<script setup lang="ts">
import { LControl } from '@vue-leaflet/vue-leaflet';
import MapLive from '@/components/Map/MapLive.vue';
import TrackPanelWindow from '../../components/TrackPanelWindow.vue';

const contextOptions = {
  page: {
    title: 'Object Monitor',
  },
};

const ready = typeof window !== 'undefined';
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="row">
      <q-no-ssr>
        <map-live v-show="ready" class="col" style="height: 100vh">
          <l-control :disable-scroll-propagation="true" position="topleft">
            <track-panel-window />
          </l-control>
        </map-live>
      </q-no-ssr>
    </q-page>
  </page-wrapper>
</template>
