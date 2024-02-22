import type { Route } from '@trace/base/types/index';

export const onboardRoutes: Route[] = [
  {
    path: 'create-account',
    name: 'on-board.create-account',
    component: () => import('./pages/CreateAccount.vue'),
    meta: {
      title: 'Create Account',
      description: 'Provide personal information required to use our plaform'
    },
  },
  {
    path: 'account-verification',
    name: 'on-board.account-verification',
    component: () => import('./pages/AccountVerification.vue'),
    meta: {
      title: 'Verification',
      description: 'Verify mobile number for account'
    },
  },
  {
    path: 'account-options',
    name: 'on-board.account-options',
    component: () => import('./pages/AccountOptions.vue'),
    meta: {
      title: 'Account Options',
      description: 'Select required and optional settings for you account'
    },
  },
  {
    path: 'confirmation',
    name: 'on-board.confirmation',
    component: () => import('./pages/AccountConfirmation.vue'),
    meta: {
      title: 'Confirmation',
      description: 'Complete onboarding process for your account'
    },
  }
];

const routes: Route[] = [
  {
    path: '/on-board',
    name: 'on-board',
    redirect: { name: 'on-board.getting-started' },
    component: () => import('./OnboardLayout.vue'),
    children: onboardRoutes
  },
  {
    path: '/on-board/getting-started',
    name: 'on-board.secondary',
    redirect: { name: 'on-board.getting-started' },
    component: () => import('./WelcomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'on-board.getting-started',
        component: () => import('./pages/GetttingStarted.vue'),
        meta: {
          title: 'Getting started',
        },
      }
    ]
  },
];

export default routes;
