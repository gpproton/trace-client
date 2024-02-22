<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { useOnboardStore } from '../stores/on-board';

const { addPage } = useOnboardStore();
defineOptions({ name: 'OnboardWrapper' });

onBeforeUnmount(() => {
    addPage();
});
</script>

<template>
    <slot />
</template>
