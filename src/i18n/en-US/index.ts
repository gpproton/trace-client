export * from './app';
import * as actions from './actions';
import * as defaults from './default';
import * as items from './items';
import * as extra from './extra';

const all = {
  default: defaults.default,
  items: items.default,
  actions: actions.default,
  extra: extra.default,
};

export default all;
