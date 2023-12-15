import { appHeader } from "@trace/shared";

export default defineNuxtConfig({
  app: appHeader('/finder', 'Trace Finder'),
  extends: [
    '../../base'
  ]
})
