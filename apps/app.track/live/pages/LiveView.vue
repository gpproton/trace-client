<script lang="ts" setup>
import PanelWindow from '@/map/components/PanelWindow.vue';
import MapView from '@/map/MapView.vue';
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

<style lang="scss">
.map-view {
  min-width: calc(100vw - 65px);
  height: calc(100dvh - 42px);
}
</style>
