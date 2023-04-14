export interface IRestrictedRoutes {
  mobileName: string;
  mobilePath: string;
  desktopName: string;
  desktopPath: string;
}

const RestrictedRoutes: Array<IRestrictedRoutes> = [
  {
    mobileName: 'track.objects',
    mobilePath: '/track/monitor/id',
    desktopName: 'track.monitor',
    desktopPath: '/track/monitor',
  },
  {
    mobileName: 'track.objects',
    mobilePath: '/track/objects',
    desktopName: 'track.monitor',
    desktopPath: '/track/monitor',
  },
];

export default RestrictedRoutes;
