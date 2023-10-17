export interface Tenant {
  id: string;
  active: boolean;
  confirmed: boolean;
  name: string;
  fullName: string;
  domains: string[];
}
