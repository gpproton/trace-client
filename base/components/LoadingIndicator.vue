<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useQuasar } from 'quasar';
import { useServerStore } from '@/stores/server';
import { storeToRefs } from 'pinia';

const $q = useQuasar();
const timeout = ref();
const serverStore = useServerStore();
const { setReloading } = serverStore;
const { getReloading } = storeToRefs(serverStore);

onMounted(() => {
  if ($q.platform.is.capacitor) setReloading(false);
  else {
    timeout.value = setTimeout(() => {
      setReloading(false);
    }, 3000);
  }
});
onUnmounted(() => {
  if (!$q.platform.is.capacitor) clearTimeout(timeout.value);
});
</script>

<template>
  <div v-show="!getReloading">
    <slot />
  </div>
  <slot name="loading">
    <div v-show="getReloading" class="splash-screen">
      <div class="spinner-wrapper">
        <div class="spinner"></div>
      </div>
    </div>
  </slot>
</template>

<style lang="scss" scoped>
.splash-screen {
  background: transparent;
  width: 100vw;
  height: 100vh;
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
