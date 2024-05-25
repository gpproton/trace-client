<script setup lang="ts">
import UnAuthorized from '@/assets/banner/un-authorized.svg?url';
import { defineAsyncComponent } from 'vue';

const PageError = defineAsyncComponent(() => import('./PageError.vue'));

defineOptions({ name: 'UnAuthorized' });
</script>

<template>
  <page-error
    description="Unauthorized Access"
    :image-url="UnAuthorized"
  ></page-error>
</template>
