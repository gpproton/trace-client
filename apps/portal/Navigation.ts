import BaseMenu from '@trace/shared/layout/BaseMenu';

export class Navigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'track'];
    this.mobileFilter = ['overview', 'shipment', 'track', 'engagement'];
    this.modules = [
      {
        title: 'Overview',
        name: 'overview',
        icon: 'bi-grid',
        path: 'overview',
      },
      {
        name: 'engagement',
        title: 'Engagement',
        icon: 'bi-people-fill',
        path: 'engagement',
      },
      {
        name: 'shipment',
        title: 'Shipment',
        icon: 'bi-truck',
        path: 'shipment',
      },
      {
        name: 'track',
        title: 'Track',
        icon: 'bi-pin-map',
        path: 'track',
      },
      {
        title: 'Billing',
        icon: 'bi-cash-stack',
        name: 'payment',
        path: 'payment',
      },
      {
        title: 'Shortage',
        icon: 'bi-exclamation-square',
        name: 'shortage',
        path: 'shortage',
      },
      {
        title: 'Locations',
        icon: 'bi-geo',
        name: 'locations',
        path: 'locations',
      },
      {
        title: 'Documents',
        icon: 'bi-files-alt',
        name: 'documents',
        path: 'documents',
      },
      {
        title: 'Catalog',
        icon: 'bi-collection',
        name: 'catalog',
        path: 'catalog',
      },
      {
        title: 'Inventory',
        icon: 'bi-box',
        name: 'inventory',
        path: 'inventory',
      },
    ];

    this.quickCreateItems = [
      {
        name: 'task.create',
        title: 'Shipment',
        icon: 'bi-truck',
        command: 'T',
      },
      {
        name: 'resource.location.create',
        title: 'Location',
        icon: 'bi-geo-alt',
        command: 'L',
      },
      {
        name: 'resource.route.create',
        title: 'Route',
        icon: 'bi-compass',
        command: 'R',
      },
    ];

    this.GetState();
  }
}

const Result = new Navigation();

export default Result;
