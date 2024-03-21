<script setup lang="ts">
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';
import { QScrollArea, SessionStorage } from 'quasar';
import { useRoute } from 'vue-router';
import {} from '@/stores/theme';
import { type IPageContext } from '@/stores/page';
import UnderConstruction from '@trace/base/components/error/UnderConstruction.vue';

defineOptions({ name: 'PageWrapper' });

interface scrollInfo {
  horizontalContainerSize: number;
  horizontalPercentage: number;
  horizontalPosition: number;
  horizontalSize: number;
  verticalContainerSize: number;
  verticalPercentage: number;
  verticalPosition: number;
  verticalSize: number;
}

interface scrollPosition {
  top: number;
  left: number;
}

const thumbStyle = {
  right: '2px',
  borderRadius: '3px',
  width: '7px',
};

export interface IProps {
  options?: IPageContext | any;
  name?: string;
  contentActiveStyle?: string;
  scrollable?: boolean;
  padding?: boolean;
}

withDefaults(defineProps<IProps>(), {
  options: {},
  name: '',
  contentActiveStyle: '',
  scrollable: false,
  padding: false,
});

const route = useRoute();
const scrollArea = ref<QScrollArea | null>(null);
const basePath = ref<string>('');
const showToTopBtn = ref<boolean>(false);

const scrollToPosition = (value: number, duration: number = 0) => {
  scrollArea.value?.setScrollPosition('vertical', value, duration);
};

const getScrollPosition = () => {
  return scrollArea.value?.getScrollPosition();
};

const onScroll = (info: scrollInfo) => {
  info.verticalPercentage >= 0.1
    ? (showToTopBtn.value = true)
    : (showToTopBtn.value = false);
};

const toTop = () => {
  scrollToPosition(0, 300);
};

onMounted(() => {
  basePath.value = route.fullPath;
  const t: scrollPosition | null = SessionStorage.getItem(basePath.value);
  if (t) {
    scrollToPosition(t.top);
  }
});

onUnmounted(() => {
  SessionStorage.remove(basePath.value);
});

onActivated(() => {
  const t: scrollPosition | null = SessionStorage.getItem(route.fullPath);
  if (t) {
    scrollToPosition(t.top);
  }
});

onDeactivated(() => {
  const position = getScrollPosition();
  SessionStorage.set(basePath.value, position);
});
</script>

<template>
  <q-page class="fit page q-pa-sm" :padding="padding">
    <q-scroll-area
      v-if="scrollable"
      ref="scrollArea"
      :thumb-style="thumbStyle"
      :visible="false"
      style="height: 100%"
      :content-active-style="contentActiveStyle"
      @scroll="onScroll"
    >
      <slot>
        <under-construction />
      </slot>
    </q-scroll-area>
    <slot v-else>
      <under-construction />
    </slot>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-btn
          v-show="showToTopBtn"
          color="primary"
          fab
          padding="10px"
          icon="expand_less"
          @click="toTop"
        />
      </transition>
    </q-page-sticky>
  </q-page>
</template>

<style lang="scss" scoped>
@import '@trace/base/components/styles/error.scss';
</style>
