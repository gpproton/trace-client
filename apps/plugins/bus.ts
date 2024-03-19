import { EventBus } from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  const bus = new EventBus();
  nuxtApp.vueApp.provide('bus', bus);
});
