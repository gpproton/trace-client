<script lang="ts" setup></script>

<template>
  <div class="map-view">
    <router-view></router-view>
  </div>
</template>

<style>
.map-view {
  min-width: calc(100vw - 65px);
  height: calc(100vh - 155px);
}
</style>
