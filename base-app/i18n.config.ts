const loadLocaleMessages = () => {
  const locales = import.meta.glob('../locales/*.json', { eager: true });
  const messages: Record<string, any> = {}
  Object.keys(locales).forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key]
    }
  })

  return messages
}

export default defineI18nConfig(() => {
  const messages = loadLocaleMessages();

  return {
    legacy: false,
    globalInjection: true,
    locale: 'en-US',
    messages
  }
})

export type CountryOption = { countryCode: string, name: string, value: string };

export const languages: CountryOption[] = [
  { countryCode: 'AE', name: 'العربية', value: 'ar' },
  { countryCode: 'US', name: 'English', value: 'en-US' },
  { countryCode: 'FR', name: 'Français', value: 'fr' },
  { countryCode: 'CN', name: '中文', value: 'zh' },
];
