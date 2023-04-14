/* eslint-disable @typescript-eslint/ban-ts-comment */
import { boot } from 'quasar/wrappers';
import Plugin from '@quasar/quasar-ui-qoverlay';
import '@quasar/quasar-ui-qoverlay/dist/index.css';

export default boot(({ app }) => {
  // @ts-ignore
  app.use(Plugin);
});
