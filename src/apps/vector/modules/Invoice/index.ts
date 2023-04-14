export default {
  path: 'invoice',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.billing.invoce',
      redirect: { name: 'vec.billing.invoice.recent' },
    },
    {
      path: 'recent',
      name: 'vec.billing.invoice.recent',
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: 'history',
      name: 'vec.billing.invoice.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
