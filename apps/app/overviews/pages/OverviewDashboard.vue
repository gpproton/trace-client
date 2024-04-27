<script setup lang="ts">
import Widgets, { components } from '@/widgets/widget-records';

defineOptions({ name: 'OverviewDashboard' });
</script>

<template>
  <div class="row justify-start content-start items-start">
    <component
      :is="components[widget.component]"
      v-for="widget in Widgets"
      :key="widget.id"
      :width="widget.width"
      :height="widget.height"
      :title="widget.title"
    >
    </component>
  </div>
</template>
