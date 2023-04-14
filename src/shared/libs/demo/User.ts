/** Sample user profile and permission data */
import { IProfile } from '@/libs/constants/Menu';

export const permissions = [
  { name: 'default.hide', value: 0 },
  { name: 'default.readOnly', value: 1 },
  { name: 'default.create', value: 2 },
  { name: 'default.update', value: 3 },
  { name: 'default.delete', value: 4 },
];

export const details = {
  id: '1',
  name: 'Solomon Agboola',
  email: 'bhn.mis@tolaram.com',
  role: 'admin',
  permission: permissions,
};

export const profileDetails: IProfile = {
  firstName: 'Solomon',
  lastName: 'Agboola',
  email: 'bhn.mis@tolaram.com',
  role: 'Administrator',
};
