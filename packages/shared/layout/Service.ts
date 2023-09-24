export enum ServiceVariant {
  DEFAULT = 'default',
  PORTAL = 'portal',
  MANAGE = 'manage',
  FINDER = 'finder',
  CORE = 'core',
  SUPPORT = 'support',
}

export interface ITenantProfile {
  id: number;
  name: string;
  domain: string;
}
