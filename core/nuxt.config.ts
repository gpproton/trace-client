import { appHeader } from '@trace/shared'

export default defineNuxtConfig({
  app: appHeader('/core', 'Trace Core'),
  extends: [
    '../base-app'
  ]
})
