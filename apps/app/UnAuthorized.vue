<script setup lang="ts">
import UnAuthorized from '@trace/base/components/error/UnAuthorized.vue';

defineOptions({ name: 'UnAuthorizedPage' });
</script>

<template>
  <page-wrapper>
    <un-authorized />
  </page-wrapper>
</template>
