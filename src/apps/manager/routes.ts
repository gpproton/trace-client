import AccountRoutes from '@/app/modules/Account';
import { NotificationRoute } from '@/app/modules/System';
import { ServiceVariant } from '@/shared/libs/Service';

const APP_NAME = 'mgr';
const SharedRoutes = [AccountRoutes, NotificationRoute];

export default {
  path: ServiceVariant.MANAGER,
  name: APP_NAME,
  component: () => import('./AppLayout.vue'),
  children: [...SharedRoutes],
};
