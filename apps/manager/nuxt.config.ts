import { appHeader } from "@trace/shared";

export default defineNuxtConfig({
  app: appHeader('/', 'Trace Manager'),
  extends: [
    '../../base'
  ],
})
