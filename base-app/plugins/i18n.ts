import { createI18n } from 'vue-i18n'

const loadLocaleMessages = () => {
  const locales = import.meta.glob('../../locales/*.json', { eager: true });
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

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
  })

  vueApp.use(i18n)
})
