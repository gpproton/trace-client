export default {
  path: 'driver',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.driver',
      redirect: { name: 'vec.driver.summary' },
    },
    {
      path: 'summary',
      name: 'vec.driver.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'trips',
      name: 'vec.driver.trips',
      component: () => import('./pages/TripsPage.vue'),
    },
  ],
};
