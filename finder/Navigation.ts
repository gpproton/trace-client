import BaseMenu from '@trace/shared/layout/BaseMenu';

export class Navigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'track'];
    this.mobileFilter = ['overview', 'track', 'fleet', 'events'];
    this.modules = [
      {
        title: 'Overview',
        name: 'overview',
        icon: 'bi-grid',
        path: 'overview',
      },
      {
        name: 'track',
        title: 'Track',
        icon: 'bi-pin-map',
        path: 'track',
      },
      {
        title: 'Fleet',
        icon: 'bi-car-front',
        name: 'fleet',
        path: 'fleet',
      },
      {
        title: 'Reports',
        icon: 'bi-file-earmark-bar-graph',
        name: 'reports',
        path: 'reports',
      },
      {
        title: 'Events',
        icon: 'bi-bell',
        name: 'events',
        path: 'events',
      },
      {
        title: 'Devices',
        icon: 'bi-motherboard',
        name: 'devices',
        path: 'devices',
      },


      {
        title: 'Tags',
        icon: 'bi-tags',
        name: 'tags',
        path: 'tags',
      },
      {
        title: 'Help',
        icon: 'bi-question-circle',
        name: 'help',
        path: 'help',
      },
    ];

    this.quickCreateItems = [
      {
        name: 'devices.create',
        title: 'Device',
        icon: 'bi-check-circle',
        command: 'D',
      },
      {
        name: 'tags.create',
        title: 'Tag',
        icon: 'bi-tags',
        command: 'T',
      },
    ];

    this.GetState();
  }
}

const Result = new Navigation();

export default Result;
