import BaseMenu from '@/libs/BaseMenu';

export class DirectMenu extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = [];
    this.mobileFilter = [];
    this.modules = [];
    this.quick = [];

    this.GetState();
  }
}

const Result = new DirectMenu();

export default Result;
