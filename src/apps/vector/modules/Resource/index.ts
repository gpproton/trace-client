export default {
  path: 'resource',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.resource',
      redirect: { name: 'vec.resource.summary' },
    },
    {
      path: 'summary',
      name: 'vec.resource.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'asset',
      name: 'vec.resource.asset',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: {
        name: 'vec.resource.asset.index',
      },
      children: [
        {
          path: '',
          name: 'vec.resource.asset.index',
          component: () => import('./pages/Asset/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'expense',
      name: 'vec.resource.expense',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: {
        name: 'vec.resource.expense.index',
      },
      children: [
        {
          path: '',
          name: 'vec.resource.expense.index',
          component: () => import('./pages/Expense/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'location',
      name: 'vec.resource.location',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: {
        name: 'vec.resource.location.index',
      },
      children: [
        {
          path: '',
          name: 'vec.resource.location.index',
          component: () => import('./pages/Location/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'product',
      name: 'vec.resource.product',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: 'vec.resource.product.index' },
      children: [
        {
          path: '',
          name: 'vec.resource.product.index',
          component: () => import('./pages/Product/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'route',
      name: 'vec.resource.route',
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: 'vec.resource.route.index' },
      children: [
        {
          path: '',
          name: 'vec.resource.route.index',
          component: () => import('./pages/Route/IndexPage.vue'),
        },
      ],
    },
  ],
};
