export type IStatusType = 'none' | 'idling' | 'moving' | 'parked' | 'offline';

export interface IStatusTypes {
  title: string;
  id: IStatusType;
  color: string;
  count: number;
}

export const StatusTypes: Array<IStatusTypes> = [
  {
    title: 'Moving',
    id: 'moving',
    color: '#7ec27f',
    count: 0,
  },
  {
    title: 'Parked',
    id: 'parked',
    color: 'DodgerBlue',
    count: 0,
  },
  {
    title: 'Idling',
    id: 'idling',
    color: 'orange',
    count: 0,
  },
  {
    title: 'Offline',
    id: 'offline',
    color: 'crimson',
    count: 0,
  },
];
