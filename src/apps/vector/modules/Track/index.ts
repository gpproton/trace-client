export default {
  path: 'track',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.track',
      redirect: { name: 'vec.track.monitor' },
    },
    {
      path: 'monitor',
      name: 'vec.track.monitor',
      component: () => import('./pages/Monitor/IndexPage.vue'),
    },
    {
      path: 'monitor/:id',
      name: 'vec.track.monitor.id',
      component: () => import('./pages/InstacePage.vue'),
    },
    {
      path: 'objects',
      name: 'vec.track.objects',
      component: () => import('./pages/ObjectPage.vue'),
    },
  ],
};
