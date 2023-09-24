import BaseMenu from '@trace/shared/layout/BaseMenu';

export class Navigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'schedule'];
    this.mobileFilter = ['overview', 'schedule', 'task', 'track'];
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
        title: 'Billing',
        icon: 'bi-upc-scan',
        name: 'billing',
        path: 'billing',
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
        title: 'Drivers',
        icon: 'bi-person-workspace',
        name: 'driver',
        path: 'driver',
      },
      {
        title: 'Resources',
        icon: 'bi-hdd-stack',
        name: 'resource',
        path: 'resource',
        items: [
          {
            name: 'preview-00',
            icon: 'bi-0-square',
            title: 'Preview 00',
            separator: false,
          },
          {
            name: 'preview-01',
            icon: 'bi-1-square',
            title: 'Preview 11',
            separator: false,
          },
        ],
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
