import BaseMenu from '@/libs/BaseMenu';

export class ManagerMenu extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = [];
    this.mobileFilter = [];
    this.modules = [];
    this.quick = [];

    this.GetState();
  }
}

const Result = new ManagerMenu();

export default Result;
