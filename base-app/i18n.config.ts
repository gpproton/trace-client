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
    locale: 'en',
    messages
  }
})
