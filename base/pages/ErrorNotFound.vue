<script setup lang="ts">
import NotFound from '@/components/error/NotFound.vue';

defineOptions({ name: 'ErrorNotFound' });
interface IProps {
  home?: string;
}

withDefaults(defineProps<IProps>(), {
  home: 'home',
});
</script>

<template>
  <page-wrapper>
    <not-found :home="home" />
  </page-wrapper>
</template>
