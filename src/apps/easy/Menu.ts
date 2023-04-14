import BaseMenu from '@/libs/BaseMenu';

export class EasyMenu extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = [];
    this.mobileFilter = [];
    this.modules = [];
    this.quick = [];

    this.GetState();
  }
}

const Result = new EasyMenu();

export default Result;
