<script setup lang="ts">
import { ref, onMounted, onBeforeMount, onUnmounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const loadingState = ref(true);
const timeout = ref();

onBeforeMount(() => {
  if (
    $q.platform.is.capacitor ||
    $q.platform.is.electron ||
    $q.platform.is.cordova
  ) {
    loadingState.value = false;
  }
});

onMounted(() => {
  if (
    !$q.platform.is.capacitor ||
    !$q.platform.is.electron ||
    !$q.platform.is.cordova
  ) {
    timeout.value = setTimeout(() => {
      loadingState.value = false;
    }, 500);
  }
});

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>
<script lang="ts">
export default {
  name: 'LoadingIndicator',
};
</script>

<template>
  <fragment>
    <div v-show="!loadingState">
      <slot>
        <router-view></router-view>
      </slot>
    </div>
    <slot name="loading">
      <div v-show="loadingState" class="splash-screen">
        <div class="spinner-wrapper">
          <div class="spinner"></div>
        </div>
      </div>
    </slot>
  </fragment>
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
