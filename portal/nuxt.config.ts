import { appHeader } from "@trace/shared";

export default defineNuxtConfig({
  app: appHeader('/portal', 'Trace Portal'),
  extends: [
    '../base-app'
  ]
})
