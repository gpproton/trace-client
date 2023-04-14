import BaseMenu from '@/libs/BaseMenu';

export class SupportMenu extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = [];
    this.mobileFilter = [];
    this.modules = [];
    this.quick = [];

    this.GetState();
  }
}

const Result = new SupportMenu();

export default Result;
