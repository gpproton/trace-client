export default {
  path: 'shortage',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.shortage',
      redirect: { name: 'vec.shortage.summary' },
    },
    {
      path: 'summary',
      name: 'vec.shortage.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'history',
      name: 'vec.shortage.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
