import BaseMenu from '@trace/shared/layout/BaseMenu';

export class Navigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'people'];
    this.mobileFilter = ['overview', 'people', 'tickets', 'billing'];
    this.modules = [
      {
        title: 'Overview',
        name: 'overview',
        icon: 'bi-grid',
        path: 'overview',
      },
      {
        name: 'people',
        title: 'People',
        icon: 'bi-people-fill',
        path: 'people',
      },
      {
        title: 'Tickets',
        name: 'tickets',
        icon: 'bi-ticket',
        path: 'tickets',
      },
      {
        title: 'Billing',
        icon: 'bi-cash-stack',
        name: 'billing',
        path: 'billing',
      },
      {
        title: 'Announcements',
        icon: 'bi-megaphone',
        name: 'announcements',
        path: 'announcements',
      },
      {
        title: 'Knowledge Base',
        icon: 'bi-record-circle',
        name: 'knowledge-base',
        path: 'knowledge-base',
      },
      {
        title: 'FAQ\'s',
        icon: 'bi-question-circle',
        name: 'documents',
        path: 'documents',
      },
      {
        name: 'settings',
        title: 'Settimgs',
        icon: 'bi-gear',
        path: 'settings',
      },
    ];

    this.quickCreateItems = [
      {
        name: 'ticket.create',
        title: 'Ticket',
        icon: 'bi-ticket',
        command: 'T',
      },
      {
        name: 'people.contact.create',
        title: 'Contact',
        icon: 'bi-people',
        command: 'P',
      },
      {
        name: 'people.tag.create',
        title: 'Tag',
        icon: 'bi-tag',
        command: 'G',
      },
    ];

    this.identityItems = [
      { title: 'Help', icon: 'bi-question-square', name: 'help' }
    ];

    this.GetState();
  }
}

const Result = new Navigation();

export default Result;
