import InvoiceModule from '@/vector/modules/Invoice';

export default {
  path: 'billing',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.billing',
      redirect: { name: 'vec.billing.summary' },
    },
    {
      path: 'summary',
      name: 'vec.billing.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'order',
      name: 'vec.billing.order',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: 'vec.billing.order' + '.index' },
      children: [
        {
          path: '',
          name: 'vec.billing.order' + '.index',
          component: () => import('./pages/Order/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'ovverride',
      name: 'vec.billing.override',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: 'vec.billing.override' + '.index' },
      children: [
        {
          path: '',
          name: 'vec.billing.override' + '.index',
          component: () => import('./pages/Override/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'manifest',
      name: 'vec.billing.manifest',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: 'vec.billing.manifest' + '.index' },
      children: [
        {
          path: '',
          name: 'vec.billing.manifest' + '.index',
          component: () => import('./pages/Manifest/IndexPage.vue'),
        },
      ],
    },
    /** Invoice routes */
    InvoiceModule,
  ],
};
