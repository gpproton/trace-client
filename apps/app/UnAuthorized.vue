<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const UnAuthorized = defineAsyncComponent(() => import('@trace/base/components/error/UnAuthorized.vue'));

defineOptions({ name: 'UnAuthorizedPage' });
</script>

<template>
  <page-wrapper>
    <un-authorized />
  </page-wrapper>
</template>
