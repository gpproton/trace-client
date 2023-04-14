import { IBaseMenu } from './IBaseMenu';
import { IModule, IModuleCommands } from './IModule';
import { ServiceVariant } from './Service';

export default abstract class BaseMenu implements IBaseMenu {
  GetState() {
    this.overview = this.filterModule(this.modules, this.desktopFilter);
    this.menu = this.filterModule(this.modules, this.desktopFilter, false);
    this.mobileMenu = this.filterMobileMenu(this.modules, this.mobileFilter);
    this.mobileStrings = this.mobileMenu.map((e) => e.name);
    this.mobileMenuExtended = this.filterExtendedMenu(
      this.modules,
      this.mobileMenu
    );

    return this;
  }

  /** Default objects */
  apps: Array<IModule> = [
    {
      name: 'vec',
      title: 'Vector',
      icon: 'bi-signpost-2',
      path: ServiceVariant.VECTOR,
    },
    {
      name: 'drt',
      title: 'Direct',
      icon: 'bi-compass',
      path: ServiceVariant.DIRECT,
    },
    {
      name: 'spt',
      title: 'Support',
      icon: 'bi-wrench-adjustable-circle',
      path: ServiceVariant.SUPPORT,
    },
    {
      name: 'easy',
      title: 'Easy',
      icon: 'bi-hurricane',
      path: ServiceVariant.EASY,
    },
    {
      name: 'mgr',
      title: 'Manager',
      icon: 'bi-sliders',
      path: ServiceVariant.MANAGER,
    },
  ];

  identity: Array<IModule> = [
    { title: 'Account', icon: 'bi-person', name: 'account.profile' },
    {
      title: 'Settings',
      icon: 'bi-gear-wide-connected',
      name: 'account.settings',
    },
    { title: 'Admin Space', icon: 'bi-nut', name: 'administration' },
    { title: 'Help', icon: 'bi-question-circle', name: 'help' },
  ];
  notificationSwitcher: Array<IModule> = [
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
  quick: Array<IModuleCommands> = [];
  modules: Array<IModule> = [];

  /** Filter properties( defination required!!) */
  protected desktopFilter: Array<string> = [];
  protected mobileFilter: Array<string> = [];

  /** Used objects */
  overview: Array<IModule> = [];
  menu: Array<IModule> = [];
  mobileMenu: Array<IModule> = [];
  mobileStrings: Array<string> = [];
  mobileMenuExtended: Array<IModule> = [];

  protected filterModule = (
    items: Array<IModule>,
    filter: Array<string>,
    include = true
  ): Array<IModule> => {
    return items.filter((e) => {
      const addOrRemove = filter.includes(e.name);
      return include ? addOrRemove : !addOrRemove;
    });
  };

  protected filterMobileMenu = (
    items: Array<IModule>,
    includedItems: Array<string> = []
  ): Array<IModule> => {
    const mobileMenu: Array<IModule> = items.filter((e) => {
      return includedItems.includes(e.name);
    });
    mobileMenu.push({
      name: 'app.notifications',
      title: 'Notifications',
      icon: 'bi-bell',
    });
    return mobileMenu;
  };

  protected filterExtendedMenu = (
    items: Array<IModule>,
    excludedItems: Array<IModule> = []
  ): Array<IModule> => {
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
