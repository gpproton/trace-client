// TODO: Use auth check and conditional redirection later
export const rootRoute = {
  path: '',
  name: 'app.root',
  component: () => import('./pages/RootPage.vue'),
};

export const NotificationRoute = {
  path: 'notifications',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'app.notifications',
      component: () => import('./pages/NotificationPage.vue'),
    },
    {
      path: 'notifications/:id',
      name: 'app.notifications.view',
      component: () => import('./pages/NotificationPage.vue'),
    },
  ],
};

export const catchAllRoute = {
  path: ':catchAll(.*)*',
  name: 'app.error',
  component: () => import('./pages/ErrorPage.vue'),
};
