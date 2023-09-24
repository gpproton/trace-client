import { IModule, IModuleCommands } from './IModule';

export interface IBaseMenu {
  serviceItems: IModule[];
  identityItems: IModule[];
  notificationTabs: IModule[];
  quickCreateItems: IModuleCommands[];
  modules: IModule[];

  /** Used collections */
  overviewItems: IModule[];
  items: IModule[];
  mobileItems: IModule[];
  mobileStrings: Array<string>;
  mobileOverviewItems: IModule[];
}
