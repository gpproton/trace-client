<script setup lang="ts">
import UnderConstruction from '@/icons/banner/under-construction.svg?url';
import { useAppBreakpoints } from '@/composables/breakpoints';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'UnderConstruction' });

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
</script>

<template>
  <div class="column items-center justify-center q-mt-lg">
    <q-img no-native-menu no-spinner :src="UnderConstruction" class="q-mt-xs q-mb-md page-visual"
      alt="Under Construction" />
    <div class="text-center q-mt-lg">
      <transition v-show="isDesktop" appear enter-active-class="animated backInUp"
        leave-active-class="animated backInDown">
        <q-btn color="primary" class="border-radius-sm" size="lg" no-caps :to="{ name: 'home' }" outline
          style="width: 200px">
          {{ $t('router.home') }}
        </q-btn>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/error.scss';
</style>
