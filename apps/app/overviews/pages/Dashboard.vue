<script setup lang="ts">
defineOptions({ name: 'OverviewDashboard' });
</script>

<template>
  <page-wrapper>
    <div class="row">
      <div class="widget col-6" style="height: 300px">
        <q-card class="widget-inner"></q-card>
      </div>
      <div class="widget col-3" style="height: 300px">
        <q-card class="widget-inner"></q-card>
      </div>
      <div class="widget col-3" style="height: 150px">
        <q-card class="widget-inner"></q-card>
      </div>
      <div class="widget col-3" style="height: 150px">
        <q-card class="widget-inner"></q-card>
      </div>
      <div class="widget col-3" style="height: 150px">
        <q-card class="widget-inner"></q-card>
      </div>
    </div>
  </page-wrapper>
</template>

<style lang="scss" scoped>
.widget {
  padding: 4px;
}
.widget-inner {
  border-radius: $border-radius-sm;
  height: 100%;
  width: 100%;
}
</style>
