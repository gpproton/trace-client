import { IModule, IModuleCommands } from './IModule';

export interface IBaseMenu {
  apps: Array<IModule>;
  identity: Array<IModule>;
  notificationSwitcher: Array<IModule>;
  quick: Array<IModuleCommands>;
  modules: Array<IModule>;

  /** Used collections */
  overview: Array<IModule>;
  menu: Array<IModule>;
  mobileMenu: Array<IModule>;
  mobileStrings: Array<string>;
  mobileMenuExtended: Array<IModule>;
}
