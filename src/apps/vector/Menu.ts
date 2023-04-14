import BaseMenu from '@/libs/BaseMenu';

export class VectorMenu extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['vec.overview', 'vec.task'];
    this.mobileFilter = ['vec.overview', 'vec.task', 'vec.track'];
    this.modules = [
      {
        title: 'Overview',
        name: 'vec.overview',
        icon: 'bi-grid',
        path: 'overview',
      },
      {
        name: 'vec.task',
        title: 'Task',
        icon: 'bi-list-check',
        path: 'task',
      },
      {
        name: 'vec.track',
        title: 'Track',
        icon: 'bi-pin-map',
        path: 'track',
      },
      {
        title: 'Billing',
        icon: 'bi-upc-scan',
        name: 'vec.billing',
        path: 'billing',
      },
      {
        title: 'Shortage',
        icon: 'bi-exclamation-square',
        name: 'vec.shortage',
        path: 'shortage',
      },
      {
        title: 'Payments',
        icon: 'bi-cash-stack',
        name: 'vec.payment',
        path: 'payment',
      },
      {
        title: 'Drivers',
        icon: 'bi-person-workspace',
        name: 'vec.driver',
        path: 'driver',
      },
      {
        title: 'Resources',
        icon: 'bi-hdd-stack',
        name: 'vec.resource',
        path: 'resource',
      },
    ];

    this.quick = [
      {
        name: 'vec.task.create',
        title: 'Task',
        icon: 'bi-check-circle',
        command: 'T',
      },
      {
        name: 'vec.billing.document.create',
        title: 'Document',
        icon: 'bi-file-earmark-text',
        path: 'document-create',
        command: 'D',
      },
      {
        name: 'vec.task.event.create',
        title: 'Event',
        icon: 'bi-calendar2',
        command: 'H',
      },
      {
        name: 'vec.resource.location.create',
        title: 'Location',
        icon: 'bi-geo-alt',
        command: 'L',
      },
      {
        name: 'vec.resource.route.create',
        title: 'Route',
        icon: 'bi-compass',
        command: 'R',
      },
    ];

    this.GetState();
  }
}

const Result = new VectorMenu();

export default Result;
