export interface IMenu {
  name: string;
  title: string;
  icon: string;
  label?: string;
  color?: string;
  class?: string;
}

export type IProfile = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export const AppMenu: Array<IMenu> = [
  { title: 'Overview', icon: 'bi-grid', name: 'overview' },
  { title: 'Shipments', icon: 'bi-truck', name: 'shipment' },
  { title: 'Tracking', icon: 'bi-pin-map', name: 'track' },
  { title: 'Tasks', icon: 'bi-list-check', name: 'task' },
  { title: 'Billing', icon: 'bi-upc-scan', name: 'billing' },
  { title: 'Shortage', icon: 'bi-exclamation-square', name: 'shortage' },
  { title: 'Payments', icon: 'bi-cash-stack', name: 'payment' },
  { title: 'Drivers', icon: 'bi-person-workspace', name: 'driver' },
]; // .sort((a, b) => a.title.localeCompare(b.title));

export const IdentityMenu: Array<IMenu> = [
  { title: 'Account', icon: 'bi-person', name: 'account.profile' },
  {
    title: 'Settings',
    icon: 'bi-gear-wide-connected',
    name: 'account.settings',
  },
  { title: 'Admin Space', icon: 'bi-nut', name: 'administration' },
  { title: 'Resources', icon: 'bi-hdd-stack', name: 'resource' },
  { title: 'Help', icon: 'bi-question-circle', name: 'help' },
];

export const MobileMenu = (): Array<IMenu> => {
  const mobileMenu: Array<IMenu> = AppMenu.filter((e) => {
    const isMobile = ['overview', 'shipment', 'task'];
    return isMobile.includes(e.name);
  });

  /** Additional tab for notifications */
  mobileMenu.push({
    name: 'notifications',
    title: 'Notifications',
    icon: 'bi-bell',
  });
  return mobileMenu;
};

export const mobileMenuNames = [
  'overview.dashboard',
  'shipment.monitor',
  'task.activities',
  'notifications',
];

export const MobileMenuExtended = (): Array<IMenu> => {
  const focusMobileMenu = MobileMenu().map((k) => k.name);

  return AppMenu.filter((e) => {
    return !focusMobileMenu.includes(e.name);
  }).map((e) => {
    e.label = e.title;
    e.color = 'primary';
    e.class = 'app-action-item';
    return e;
  });
};
