<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'VirtualUser' });
const tenant = ref(null);
const tenantOptions = [
  {
    label: '',
    value: '',
  },
];

const handleTenantSelection = () => {};
</script>

<template>
  <q-select
    $="tenant"
    :options="tenantOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
    @update:model-value="handleTenantSelection"
  />
</template>
