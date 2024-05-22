<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading';
import { storeToRefs } from 'pinia';

const serverStore = useLoadingStore();
const { getLoadingState } = storeToRefs(serverStore);
</script>

<template>
  <div v-show="!getLoadingState">
    <slot />
  </div>
  <div v-show="getLoadingState" class="splash-screen">
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.splash-screen {
  background: transparent;
  width: 100vw;
  height: 100dvh;
  position: fixed;
  z-index: 50;
}

.spinner-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.spinner {
  width: 12rem;
  height: 12rem;
  margin: 6rem auto;
  background-color: var(--q-secondary);
  border-radius: 100%;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  }

  100% {
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
