import BillingModule from './modules/Billing';
import DriverModule from './modules/Driver';
import OverviewModule from './modules/Overview';
import TaskModule from './modules/Task';
import PaymentModule from './modules/Payment';
import ResourceModule from './modules/Resource';
import SettingsModule from './modules/Settings';
import ShortageModule from './modules/Shortage';
import TrackModule from './modules/Track';
import { SharedBaseRoutes } from '@/app/modules';
import { ServiceVariant } from '@/shared/libs/Service';

const APP_NAME = 'vec';

export default {
  path: ServiceVariant.VECTOR,
  name: APP_NAME,
  component: () => import('./AppLayout.vue'),
  children: [
    ...SharedBaseRoutes,
    BillingModule,
    DriverModule,
    OverviewModule,
    TaskModule,
    PaymentModule,
    ResourceModule,
    SettingsModule,
    ShortageModule,
    TrackModule,
  ],
};
