import { computed } from 'vue';
import { useQuasar } from 'quasar';

export function useTheme() {
  const $q = useQuasar();

  const isDark = computed(() => $q.dark.isActive);
  const isLight = computed(() => !isDark.value);
  const Current = computed(() => (isDark.value ? 'dark' : 'light'));
  const Breakpoints = computed(() => $q.screen);

  return {
    isDark,
    isLight,
    Current,
    Breakpoints,
  };
}
