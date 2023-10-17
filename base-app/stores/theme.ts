import { defineStore } from 'pinia';
import { colors, setCssVar, Dark } from "quasar";
import { ref, computed } from 'vue';
// import { StatusBar, Style } from '@capacitor/status-bar';

export const useThemeStore = defineStore(
  'theme',
  () => {
    const isClient = typeof window !== 'undefined';
    const { getPaletteColor, lighten, luminosity } = colors;
    const appArimaryColor = isClient ? getPaletteColor("primary") : '#3949ab';
    const darkColor = "#1d1d1d";
    const darkPageColor = "#121212";

    const primary = ref(appArimaryColor);
    const lightState = ref<boolean>(false);
    const isDark = computed(() => lightState.value);
    const isLight = computed(() => !lightState.value);

    // const setAppStatusBarStyle = async (lightState: boolean) => {
    //   if (!process.env.SERVER && Platform.is.capacitor) {
    //     lightState ? await StatusBar.hide() : await StatusBar.show();
    //     await StatusBar.setStyle({
    //       style: lightState ? Style.Dark : Style.Light,
    //     });
    //     await StatusBar.setBackgroundColor({
    //       color: getCssVar('app-container'),
    //     });
    //   }
    // };

    const primaryColor = computed(() => primary.value);
    const baseBgColor = computed(() => Dark.isActive ? darkPageColor : "#f7f9fa");
    const drawerBgColor = computed(() => Dark.isActive ? darkPageColor : primary.value);
    const drawerTextColor = computed(() => luminosity(primary.value) > 0.4 ? "#000000" : "#ffffff");
    const headerBgColor = computed(() => Dark.isActive ? darkColor : "#ffffff");
    const headerTextColor = computed(() => Dark.isActive ? "#ffffff" : "#000000");

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
        return "#ffffff";
      }
      return luminosity(primary.value) > 0.4 ? "#ffffff" : primary.value;
    });

    const setThemeColor = (color: string) => {
      primary.value = color;
      setCssVar("primary", color);
    }

    const initializeTheme = async () => {
      Dark.set(lightState.value);
      // await setAppStatusBarStyle(lightState.value);
    };

    const toggleTheme = (): void => {
      Dark.toggle();
      lightState.value = Dark.isActive;
    };

    const setThemeState = (value: boolean): void => {
      Dark.set(value);
      lightState.value = value;
    };

    watch(lightState, async () => {
      // await setAppStatusBarStyle(lightState.value);
    });

    return {
      primary,
      lightState,
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
      toggleTheme,
      setThemeState,
    };
  },
  {
    persist: true,
  }
);
