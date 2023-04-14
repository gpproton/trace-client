<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { IPageContext } from '@/layouts/composables/Page';
import CorePageWrapper from '@/components/CorePageWrapper.vue';
import UnderConstruction from './assets/under-construction.svg?url';

interface IProps {
  options: {
    page: IPageContext;
    animateEnter?: string;
    animateLeave?: string;
  };
}
const props = defineProps<IProps>();
const $q = useQuasar();
</script>

<script lang="ts">
export default {
  name: 'PageWrapper',
};
</script>

<template>
  <core-page-wrapper
    :page="props.options.page"
    :animate-enter="props.options.animateEnter"
    :animate-leave="props.options.animateLeave"
    v-bind="$attrs"
  >
    <slot>
      <div class="column items-center justify-center">
        <q-img
          no-native-menu
          no-spinner
          :src="UnderConstruction"
          class="q-my-xs page-visual q-mb-lg"
          alt="Under Construction"
        />
        <div class="text-center q-mt-xl">
          <transition
            v-show="$q.platform.is.desktop"
            appear
            enter-active-class="animated backInUp"
            leave-active-class="animated backInDown"
          >
            <q-btn
              color="primary"
              class="q-mt-lg border-radius-sm"
              size="lg"
              no-caps
              :to="{ name: 'app.root' }"
              outline
              style="width: 200px"
              >Home</q-btn
            >
          </transition>
        </div>
      </div>
    </slot>
  </core-page-wrapper>
</template>

<style lang="scss" scoped>
@import './shared.scss';
</style>
