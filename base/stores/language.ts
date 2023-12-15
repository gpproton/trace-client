import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { languages } from '@/i18n.config';

export const useLanguageStore = defineStore(
  'language',
  () => {
    const { locale } = useI18n({ useScope: 'global' });
    const language = ref<string>();
    const getLocale = computed(() => locale.value);
    const getActiveCountry = computed<string>(() => {
      const value = languages.find((item) => item.value === locale.value);
      return value?.countryCode ?? 'US';
    });

    const setLocale = (value: string) => {
      language.value = value;
      locale.value = value
    };

    const bootstrapLocale = () => {
      if (language.value !== undefined) locale.value = language.value;
    };

    return {
      locale,
      language,
      languages,
      getLocale,
      getActiveCountry,
      setLocale,
      bootstrapLocale
    };
  },
  {
    persist: true
  }
);
