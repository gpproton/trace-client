export default {
  path: 'overview',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.overview',
      redirect: { name: 'vec.overview.dashboard' },
    },
    {
      path: 'dashboard',
      name: 'vec.overview.dashboard',
      component: () => import('./pages/DashboardPage.vue'),
    },
    {
      path: 'rends',
      name: 'vec.overview.trends',
      component: () => import('./pages/TrendPage.vue'),
    },
  ],
};
