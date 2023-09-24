export default defineNuxtConfig({
  app: {
    baseURL: "/core",
    head: {
      titleTemplate: '%s :: Trace Core',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Meta description' }
      ]
    }
  },
  extends: [
    '../base-app'
  ]
})
