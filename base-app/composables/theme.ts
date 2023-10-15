import { defineStore } from 'pinia';
import { Dark } from 'quasar';
// import { StatusBar, Style } from '@capacitor/status-bar';

export const useTheme = defineStore(
  'app-theme',
  () => {
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
      lightState,
      isDark,
      isLight,
      initializeTheme,
      toggleTheme,
      setThemeState,
    };
  },
  {
    persist: true,
  }
);
