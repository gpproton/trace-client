import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { Dark, Platform, getCssVar } from 'quasar';
import { StatusBar, Style } from '@capacitor/status-bar';

export const useLayoutStore = defineStore('app-layout-state', () => {
  const drawerState = ref<boolean>(false);
  const drawerMiniState = ref<boolean>(true);
  const moduleDialogState = ref<boolean>(false);

  const toggleDrawer = (): void => {
    drawerState.value = !drawerState.value;
  };
  const toggleModuleDialog = (): void => {
    moduleDialogState.value = !moduleDialogState.value;
  };
  const setModuleDialogState = (state: boolean): void => {
    moduleDialogState.value = state;
  };

  return {
    drawerState,
    drawerMiniState,
    moduleDialogState,
    toggleDrawer,
    toggleModuleDialog,
    setModuleDialogState,
  };
});

export const useThemeStore = defineStore(
  'app-layout-theme',
  () => {
    const lightState = ref<boolean>(false);
    const isDark = computed(() => lightState.value);
    const isLight = computed(() => !lightState.value);

    const setAppStatusBarStyle = async (lightState: boolean) => {
      if (!process.env.SERVER && Platform.is.capacitor) {
        lightState ? await StatusBar.hide() : await StatusBar.show();
        await StatusBar.setStyle({
          style: lightState ? Style.Dark : Style.Light,
        });
        await StatusBar.setBackgroundColor({
          color: getCssVar('app-container'),
        });
      }
    };

    const initializeTheme = async () => {
      Dark.set(lightState.value);
      await setAppStatusBarStyle(lightState.value);
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
      await setAppStatusBarStyle(lightState.value);
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

export const usePageStore = defineStore('app-page-state', () => {
  return {
    title: ref(' '),
    description: ref(''),
    showTitle: ref(true),
    showHeader: ref(true),
    withMobile: ref(false),
    script: ref({}),
    style: ref({}),
  };
});

export const usePageAnimation = defineStore('app-page-animation', () => {
  return {
    animateStatus: ref(true),
    animateModeEnter: ref('slideInLeftBig'),
    animateModeLeave: ref('slideOutLeftBig'),
  };
});
