import { boot } from 'quasar/wrappers';
import { setCssVar } from 'quasar';

export default boot(({}) => {
  if (!process.env.SERVER) {
    setCssVar('app-sample', '#800000');
  }
});
