import BaseMenu from '@trace/shared/layout/BaseMenu';

export class Navigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'schedule', 'engagement'];
    this.mobileFilter = ['overview', 'schedule', 'task', 'engagement'];
    this.modules = [
      {
        title: 'Overview',
        name: 'overview',
        icon: 'bi-grid',
        path: 'overview',
      },
      {
        title: 'Schedule',
        name: 'schedule',
        icon: 'bi-calendar2-minus',
        path: 'schedule',
      },
      {
        name: 'engagement',
        title: 'Engagement',
        icon: 'bi-people-fill',
        path: 'engagement',
      },
      {
        name: 'task',
        title: 'Task',
        icon: 'bi-list-check',
        path: 'task',
      },
      {
        name: 'track',
        title: 'Track',
        icon: 'bi-pin-map',
        path: 'track',
      },
      {
        title: 'Accounting',
        icon: 'bi-upc-scan',
        name: 'accounting',
        path: 'accounting',
      },
      {
        title: 'Customers',
        icon: 'bi-journal-album',
        name: 'customers',
        path: 'customers',
      },
      {
        title: 'Fueling',
        icon: 'bi-fuel-pump',
        name: 'fueling',
        path: 'refuelingsource',
      },
      {
        title: 'Shortage',
        icon: 'bi-exclamation-square',
        name: 'shortage',
        path: 'shortage',
      },
      {
        title: 'Payments',
        icon: 'bi-cash-stack',
        name: 'payment',
        path: 'payment',
      },
      {
        title: 'Dispatch',
        icon: 'bi-person-workspace',
        name: 'dispatch',
        path: 'dispatch',
      },
      {
        title: 'Locations',
        icon: 'bi-geo',
        name: 'locations',
        path: 'locations',
      },
      {
        title: 'Fleet',
        icon: 'bi-car-front',
        name: 'fleet',
        path: 'fleet',
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
      {
        title: 'Maintenance',
        icon: 'bi-wrench-adjustable',
        name: 'maintenance',
        path: 'maintenance',
      },
      {
        title: 'Resources',
        icon: 'bi-hdd-stack',
        name: 'resource',
        path: 'resource',
      },
    ];

    this.quickCreateItems = [
      {
        name: 'task.create',
        title: 'Task',
        icon: 'bi-check-circle',
        command: 'T',
      },
      {
        name: 'billing.document.create',
        title: 'Document',
        icon: 'bi-file-earmark-text',
        path: 'document-create',
        command: 'D',
      },
      {
        name: 'task.event.create',
        title: 'Event',
        icon: 'bi-calendar2',
        command: 'H',
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
