import { useThemeStore } from '@/layouts/stores';

export const appIntializer = () => {
  const themeStore = useThemeStore();
  const { initializeTheme } = themeStore;

  /** Initialize theme on mounted */
  const Run = () => {
    /** Initialize theme on created */
    initializeTheme();
  };

  return { Run };
};
