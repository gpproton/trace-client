<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useOnboardStore } from '../stores/on-board';

const { addPage } = useOnboardStore();
defineOptions({ name: 'OnboardWrapper' });

onUnmounted(() => {
    addPage();
});
</script>

<template>
    <slot />
</template>
