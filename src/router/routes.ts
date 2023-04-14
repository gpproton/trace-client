import { RouteRecordRaw } from 'vue-router';
import { catchAllRoute, rootRoute } from 'src/app/routes';
import IdentityRoutes from '@/app/modules/Identity';
import VectorAppRoutes from '@/vector/routes';
import DirectAppRoutes from '@/direct/routes';
import EasyAppRoutes from '@/easy/routes';
import SupportAppRoutes from '@/support/routes';
import ManagerAppRoutes from '@/manager/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/components/LoadingIndicator.vue'),
    children: [
      rootRoute,
      IdentityRoutes,
      EasyAppRoutes,
      DirectAppRoutes,
      VectorAppRoutes,
      SupportAppRoutes,
      ManagerAppRoutes,
      // Catch all path
      catchAllRoute,
    ],
  },
];

export default routes;
