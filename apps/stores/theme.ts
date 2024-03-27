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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon Mar 25 2024
 */

import { defineStore } from 'pinia';
import { colors, setCssVar, Dark } from 'quasar';
import { ref, computed } from 'vue';
// import { StatusBar, Style } from '@capacitor/status-bar';

export const useThemeStore = defineStore(
  'theme',
  () => {
    const isClient = typeof window !== 'undefined';
    const { getPaletteColor, lighten, luminosity } = colors;
    const appArimaryColor = isClient ? getPaletteColor('primary') : '#3949ab';
    const darkColor = '#1d1d1d';
    const darkPageColor = '#121212';

    const primary = ref(appArimaryColor);
    const isDark = ref<boolean>(false);
    const isLight = computed(() => !isDark.value);

    // const setAppStatusBarStyle = async (lightState: boolean) => {
    //   if (!process.env.SERVER && Platform.is.capacitor) {
    //     isDark.value ? await StatusBar.hide() : await StatusBar.show();
    //     await StatusBar.setStyle({
    //       style: isDark.value ? Style.Dark : Style.Light,
    //     });
    //     await StatusBar.setBackgroundColor({
    //       color: getCssVar('app-container'),
    //     });
    //   }
    // };

    const primaryColor = computed(() => primary.value);
    const baseBgColor = computed(() =>
      Dark.isActive ? darkPageColor : '#f7f9fa',
    );
    const drawerBgColor = computed(() =>
      Dark.isActive ? darkPageColor : primary.value,
    );
    const drawerTextColor = computed(() =>
      luminosity(primary.value) > 0.4 ? '#000000' : '#ffffff',
    );
    const headerBgColor = computed(() =>
      Dark.isActive ? darkColor : '#ffffff',
    );
    const headerTextColor = computed(() =>
      Dark.isActive ? '#ffffff' : '#000000',
    );

    const activeBgColor = computed(() => {
      if (Dark.isActive) {
        return lighten(darkColor, 15);
      }
      return luminosity(primary.value) > 0.4
        ? lighten(primary.value, -40)
        : lighten(primary.value, 90);
    });

    const activeTextColor = computed(() => {
      if (Dark.isActive) {
        return '#ffffff';
      }
      return luminosity(primary.value) > 0.4 ? '#ffffff' : primary.value;
    });

    const setThemeColor = (color: string) => {
      primary.value = color;
      setCssVar('primary', color);
    };

    const initializeTheme = async () => {
      Dark.set(isDark.value);
      // await setAppStatusBarStyle(isDark.value);
    };

    const setThemeState = (value: boolean): void => {
      Dark.set(value);
      isDark.value = value;
    };

    watch(isDark, async () => {
      // await setAppStatusBarStyle(isDark.value);
      Dark.set(isDark.value);
    });

    return {
      primary,
      isDark,
      isLight,
      primaryColor,
      baseBgColor,
      drawerBgColor,
      drawerTextColor,
      headerBgColor,
      headerTextColor,
      activeBgColor,
      activeTextColor,
      setThemeColor,
      initializeTheme,
      setThemeState,
    };
  },
  {
    persist: true,
  },
);
