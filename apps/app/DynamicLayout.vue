<script lang="ts" setup>
// NOTE: Affects nested layout if enabled
// defineOptions({ name: 'DynamicLayout' });
const route = useRoute();
const layout = route.meta.layout ?? import('@/layouts/BlankLayout.vue');
</script>

<template>
  <component :is="layout || 'div'">
    <router-view />
  </component>
</template>
