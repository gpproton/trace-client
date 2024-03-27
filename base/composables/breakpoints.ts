/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://opensource.org/license/rpl-1-5
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Monday, 26th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon Mar 25 2024
 */

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
  const isMobile = ref(false);
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

  watchEffect(() => {
    if (currentWidth.value > 0) {
      isMobile.value = isPhone.value || isTablet.value;
    }
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
