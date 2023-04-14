export default {
  path: 'account',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'app.account',
      redirect: { name: 'app.account.profile' },
    },
    {
      path: 'profile',
      name: 'app.account.profile',
      component: () => import('./pages/ProfilePage.vue'),
    },
    {
      path: 'settings',
      name: 'app.account.settings',
      component: () => import('./pages/SettingsPage.vue'),
    },
    {
      path: 'password-reset',
      name: 'app.account.password-reset',
      component: () => import('./pages/PasswordPage.vue'),
    },
  ],
};
