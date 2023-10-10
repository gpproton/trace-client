import { IBaseMenu } from './IBaseMenu';
import { IModule, IModuleCommands } from './IModule';
import { ServiceVariant } from './Service';

export default abstract class BaseMenu implements IBaseMenu {
  GetState() {
    this.overviewItems = this.filterModule(this.modules, this.desktopFilter);
    this.items = this.filterModule(this.modules, this.desktopFilter, false);
    this.mobileItems = this.filterMobileMenu(this.modules, this.mobileFilter);
    this.mobileStrings = this.mobileItems.map((e) => e.name);
    this.mobileOverviewItems = this.filterExtendedMenu(
      this.modules,
      this.mobileItems
    );

    return this;
  }

  /** Default objects */
  serviceItems: IModule[] = [
    {
      name: 'core',
      title: 'Core',
      icon: 'bi-signpost-2',
      path: ServiceVariant.CORE,
    },
    {
      name: 'find',
      title: 'Finder',
      icon: 'bi-compass',
      path: ServiceVariant.FINDER,
    },
    {
      name: 'support',
      title: 'Support',
      icon: 'bi-wrench-adjustable-circle',
      path: '',
    },
    {
      name: 'portal',
      title: 'Portal',
      icon: 'bi-hurricane',
      path: ServiceVariant.PORTAL,
    },
    {
      name: 'manage',
      title: 'Manage',
      icon: 'bi-sliders',
      path: ServiceVariant.MANAGE,
    },
  ];

  identityItems: IModule[] = [
    { title: 'Account', icon: 'bi-person', name: 'account.profile' },
    {
      title: 'Settings',
      icon: 'bi-gear-wide-connected',
      name: 'account.settings',
    },
    { title: 'Help', icon: 'bi-question-circle', name: 'help' },
  ];
  notificationTabs: IModule[] = [
    {
      name: '0',
      icon: '',
      title: 'View All',
    },
    {
      name: '1',
      icon: '',
      title: 'Task',
    },
    {
      name: '2',
      icon: '',
      title: 'Unread',
    },
  ];
  quickCreateItems: IModuleCommands[] = [];
  modules: IModule[] = [];

  /** Filter properties( defination required!!) */
  protected desktopFilter: Array<string> = [];
  protected mobileFilter: Array<string> = [];

  /** Used objects */
  overviewItems: IModule[] = [];
  items: IModule[] = [];
  mobileItems: IModule[] = [];
  mobileStrings: Array<string> = [];
  mobileOverviewItems: IModule[] = [];

  protected filterModule = (
    items: IModule[],
    filter: Array<string>,
    include = true
  ): IModule[] => {
    return items.filter((e) => {
      const addOrRemove = filter.includes(e.name);
      return include ? addOrRemove : !addOrRemove;
    });
  };

  protected filterMobileMenu = (
    items: IModule[],
    includedItems: Array<string> = []
  ): IModule[] => {
    const mobileMenu: IModule[] = items.filter((e) => {
      return includedItems.includes(e.name);
    });

    return mobileMenu;
  };

  protected filterExtendedMenu = (
    items: IModule[],
    excludedItems: IModule[] = []
  ): IModule[] => {
    return items
      .filter((e) => {
        return !excludedItems.map((k) => k.name).includes(e.name);
      })
      .map((e) => {
        e.color = 'primary';
        e.class = 'app-menu-item';
        return e;
      });
  };
}
