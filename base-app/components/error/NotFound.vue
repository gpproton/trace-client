<script setup lang="ts">
import NotFound from '@/icons/not-found.svg?url';
import { useAppBreakpoints } from '@/composables/breakpoints';
import { storeToRefs } from "pinia";

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
</script>

<template>
  <div class="column items-center justify-center q-mt-lg">
    <q-img
      no-native-menu
      no-spinner
      :src="NotFound"
      class="q-my-xs page-visual q-mb-lg"
      alt="Under Construction"
    />
    <div class="text-center q-mt-xl">
      <transition
        v-show="isDesktop"
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backInDown"
      >
        <q-btn
          color="primary"
          class="q-mt-lg border-radius-sm"
          size="lg"
          no-caps
          :to="{ name: 'overview' }"
          outline
          style="width: 200px"
        >
          Home
        </q-btn>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/error.scss';
</style>
