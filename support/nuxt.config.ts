import { appHeader } from "@trace/shared";

export default defineNuxtConfig({
  app: appHeader('/', 'Trace Support'),
  extends: [
    '../base-app'
  ]
})
