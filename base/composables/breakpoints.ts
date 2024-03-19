import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';
import { useBreakpoints, useWindowSize } from '@vueuse/core';

type ISize = {
  width: number;
  height: number;
};

export const useAppBreakpoints = defineStore('app-breakpoints', () => {
  /** States */
  const $q = useQuasar();
  const { width, height } = useWindowSize();
  const currentWidth = ref<number>(width.value);
  const currentHeight = ref<number>(height.value);

  /** Sizes */
  const screens = $q.screen.sizes;
  const phoneSize = 600;
  const tabletSize = 1024;
  const desktopSize = screens.md;

  /** Computed breakpoints */
  const isPhone = computed(() => currentWidth.value <= phoneSize);
  const isTablet = computed(
    () => currentWidth.value <= tabletSize && currentWidth.value > phoneSize,
  );
  const isMobile = computed(() => isPhone.value || isTablet.value);
  const isLaptop = computed(() => currentWidth.value > desktopSize);
  const isDesktop = computed(() => isLaptop.value);
  const isLarge = computed(() => currentWidth.value >= screens.lg);
  const isExtraLarge = computed(() => currentWidth.value >= screens.xl);

  const setSize = (size: ISize) => {
    currentWidth.value = size.width;
    currentHeight.value = size.height;
  };

  const breakpoints = useBreakpoints({
    phone: phoneSize,
    tablet: tabletSize,
    laptop: desktopSize,
    desktop: desktopSize,
    large: screens.lg,
    extraLarge: screens.xl,
  });

  return {
    currentWidth,
    currentHeight,
    isPhone,
    isTablet,
    isMobile,
    isLaptop,
    isDesktop,
    isLarge,
    isExtraLarge,
    breakpoints,
    setSize,
  };
});
