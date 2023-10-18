export interface User {
  id: string;
  tenantId: string;
  active: boolean;
  confirmed: boolean;
  exipry: Date;
  username: string;
  email: string;
  phone: string;
  roleId: string;
  roleName: string;
  firstName: string;
  middleName?: string;
  lastName: string;
}
