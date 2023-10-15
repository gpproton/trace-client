import BaseMenu from './layout/BaseMenu';

export class SampleNavigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'sample-1'];
    this.mobileFilter = ['overview', 'sample-1', 'sample-2', 'sample-3'];
    this.modules = [
      {
        title: 'Overview',
        name: 'overview',
        icon: 'bi-1-square',
        path: 'overview',
      },
      {
        title: 'Sample 1',
        name: 'sample-1',
        icon: 'bi-0-square',
        path: 'sample-1',
      },
      {
        name: 'sample-2',
        title: 'Sample 2',
        icon: 'bi-0-square',
        path: 'sample-2',
      },
      {
        name: 'sample-3',
        title: 'Sample 3',
        icon: 'bi-0-square',
        path: 'sample-1',
      },
      {
        title: 'Sample 4',
        icon: 'bi-0-square',
        name: 'sample-4',
        path: 'sample-4',
      }
    ];

    this.quickCreateItems = [
      {
        name: 'sample-1',
        title: 'Action-1',
        icon: 'bi-check-circle',
        command: '1',
      },
      {
        name: 'sample-2',
        title: 'Action-2',
        icon: 'bi-file-earmark-text',
        path: 'sample-2',
        command: '2',
      }
    ];

    this.GetState();
  }
}

const Result = new SampleNavigation();

export default Result;
