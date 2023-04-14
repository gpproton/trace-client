import { boot } from 'quasar/wrappers';
import { useThemeStore } from '@/layouts/stores';

export default boot(({}) => {
  const { initializeTheme } = useThemeStore();

  initializeTheme();
});
