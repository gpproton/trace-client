export interface IModule {
  name: string;
  path?: string;
  title: string;
  icon?: string;
  color?: string;
  class?: string;
  separator?: boolean;
  items?: IModule[]
}

const check: IModule[] = [
  {
    name: '',
    title: '',
    items: []
  }
]

export interface IModuleCommands extends IModule {
  command?: string;
}
