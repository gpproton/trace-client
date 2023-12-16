import BaseMenu from '@trace/shared/layout/BaseMenu';

export class Navigation extends BaseMenu {
  constructor() {
    super();

    this.desktopFilter = ['overview', 'tickets'];
    this.mobileFilter = ['overview', 'tickets', 'people', 'billing'];
    this.modules = [
      {
        title: 'Overview',
        name: 'overview',
        icon: 'bi-grid',
        path: 'overview',
      },
      {
        title: 'Tickets',
        name: 'tickets',
        icon: 'bi-ticket',
        path: 'tickets',
      },
      {
        name: 'people',
        title: 'People',
        icon: 'bi-people-fill',
        path: 'people',
      },
      {
        title: 'Billing',
        icon: 'bi-upc-scan',
        name: 'billing',
        path: 'billing',
      },
      {
        title: 'Tenants',
        icon: 'bi-person-badge',
        name: 'tenants',
        path: 'tenants',
      },
      {
        title: 'Companies',
        icon: 'bi-building-check',
        name: 'companies',
        path: 'companies',
      },
      {
        title: 'Devices',
        icon: 'bi-motherboard',
        name: 'devices',
        path: 'devices',
      },
      {
        title: 'Vehicles',
        icon: 'bi-car-front',
        name: 'vehicles',
        path: 'vehicles',
      },
      {
        title: 'Trailers',
        icon: 'bi-truck-flatbed',
        name: 'trailers',
        path: 'trailers',
      },
      {
        title: 'Locations',
        icon: 'bi-geo',
        name: 'locations',
        path: 'locations',
      },
      {
        title: 'Routes',
        icon: 'bi-compass',
        name: 'routes',
        path: 'routes',
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
    ];

    this.quickCreateItems = [
      {
        name: 'ticket.create',
        title: 'Ticket',
        icon: 'bi-ticket',
        command: 'T',
      },
    ];

    this.GetState();
  }
}

const Result = new Navigation();

export default Result;
