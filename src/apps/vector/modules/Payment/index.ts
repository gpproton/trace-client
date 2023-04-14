export default {
  path: 'payment',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.payment',
      redirect: { name: 'vec.payment.summary' },
    },
    {
      path: 'summary',
      name: 'vec.payment.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'history',
      name: 'vec.payment.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
