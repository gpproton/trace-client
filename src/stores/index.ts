import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default store(({}) => {
  const pinia = createPinia();
  if (!process.env.SERVER) pinia.use(piniaPluginPersistedstate);

  return pinia;
});
