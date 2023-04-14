export default {
  path: 'task',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.task',
      redirect: { name: 'vec.task.activities' },
    },
    {
      path: 'activities',
      name: 'vec.task.activities',
      component: () => import('./pages/Activities/IndexPage.vue'),
      children: [
        {
          path: 'summary',
          name: 'vec.task.activities.summary',
          component: () => import('./pages/Activities/SummaryPage.vue'),
        },
        {
          path: 'events',
          name: 'vec.task.activities.events',
          component: () => import('./pages/Activities/EventPage.vue'),
        },
        {
          path: 'track',
          name: 'vec.task.activities.track',
          component: () => import('./pages/Activities/TrackPage.vue'),
        },
      ],
    },
    {
      path: 'history',
      name: 'vec.task.history',
      redirect: {
        name: 'vec.task.history.index',
      },
      component: () => import('./pages/History/LayoutDefault.vue'),
      children: [
        {
          path: '',
          name: 'vec.task.history.index',
          component: () => import('./pages/History/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'request',
      name: 'vec.task.request',
      redirect: {
        name: 'vec.task.request.index',
      },
      component: () => import('./pages/LayoutDefault.vue'),
      children: [
        {
          path: '',
          name: 'vec.task.request.index',
          component: () => import('./pages/Request/IndexPage.vue'),
        },
      ],
    },
    {
      path: 'timeline',
      name: 'vec.task.timeline',
      component: () => import('./pages/TimelinePage.vue'),
    },
  ],
};
