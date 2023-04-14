export default {
  path: 'settings',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.settings',
      redirect: { name: 'vec.settings.notification' },
    },
    {
      path: 'notification',
      name: 'vec.settings.notification',
      component: () => import('./pages/NotificationPage.vue'),
    },
    {
      path: 'interface',
      name: 'vec.settings.interface',
      component: () => import('./pages/InterfacePage.vue'),
    },
    {
      path: 'status',
      name: 'vec.settings.status',
      component: () => import('./pages/StatusPage.vue'),
    },
  ],
};
