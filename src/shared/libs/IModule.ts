export interface IModule {
  name: string;
  path?: string;
  title: string;
  icon?: string;
  color?: string;
  class?: string;
}

export interface IModuleCommands extends IModule {
  command: string;
}
