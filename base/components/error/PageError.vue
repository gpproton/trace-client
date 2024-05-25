<script setup lang="ts">
import NotFound from '@/assets/icons/banner/not-found.svg?url';
import { useAppBreakpoints } from '@/composables/breakpoints';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'NotFound' });

interface IProps {
  title?: string;
  routeName?: string;
  imageUrl?: string;
  description?: string;
}
withDefaults(defineProps<IProps>(), {
  title: 'home',
  routeName: 'home',
  imageUrl: NotFound,
  description: 'Encountered an Error',
});

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
</script>

<template>
  <div class="column items-center justify-center q-mt-lg">
    <slot name="media">
      <q-img
        no-native-menu
        no-spinner
        lazy
        :src="imageUrl"
        class="q-mt-xs q-mb-md"
        width="calc(32vw)"
        alt="Under Construction"
      />
    </slot>
    <div class="text-center q-mt-lg">
      <div class="text-h4 text-primary text-weight-bold q-mb-lg">
        {{ description }}
      </div>
      <transition
        v-show="isDesktop"
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backInDown"
      >
        <q-btn
          color="primary"
          class="border-radius-sm text-capitalize"
          size="lg"
          no-caps
          :to="{ name: routeName }"
          outline
          style="width: 200px"
          :label="title"
        />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/error.scss';
</style>
