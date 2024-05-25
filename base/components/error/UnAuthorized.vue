<script setup lang="ts">
import UnAuthorized from '@/assets/icons/banner/un-authorized.svg?url';
import PageError from './PageError.vue';

defineOptions({ name: 'UnAuthorized' });
</script>

<template>
  <page-error
    description="Unauthorized Access"
    :image-url="UnAuthorized"
  ></page-error>
</template>
