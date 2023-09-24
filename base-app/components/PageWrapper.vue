<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePageStore, IPageContext } from '@/composables/page';
import { useAppBreakpoints } from '@/composables/breakpoints';
import UnderConstruction from '@/icons/under-construction.svg?url';

const { setupPage } = usePageStore();
const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);

export interface IProps {
  options: IPageContext | any;
  name: string;
  layout?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  options: {},
  layout: 'default',
});

onBeforeMount(() => {
  setPageLayout(props.layout ?? 'default');
  setupPage(props.options);
});
</script>

<template>
  <slot>
    <div class="column items-center justify-center q-mt-lg">
      <q-img
        no-native-menu
        no-spinner
        :src="UnderConstruction"
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
  </slot>
</template>

<style lang="scss" scoped>
@import '../styles/error.scss';
</style>
