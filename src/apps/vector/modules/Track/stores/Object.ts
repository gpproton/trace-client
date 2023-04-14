import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { IStatusType } from '@/libs/Track/Status';

export const useObjectState = defineStore('vec.track.object', () => {
  const objectIsLoading = ref<boolean>(true);
  const objectIsLoaded = ref<boolean>(false);
  const objectValue = ref<Array<IObject>>([]);
  const objectSearchValue = ref<string>('');
  const objectStatusValue = ref<IStatusType>('none');
  const objectFilteredValue = computed<Array<IObject>>(() =>
    searchObjectFilter(objectSearchValue.value)
  );

  const searchObjectFilter = (value: string): Array<IObject> => {
    const searchValue = value.toLowerCase().trim();
    if (searchValue === '' && objectStatusValue.value === 'none')
      return objectValue.value;

    const objectSearchResult = objectValue.value.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });

    if (objectStatusValue.value !== 'none')
      return objectSearchResult.filter((item) => {
        return item.status === objectStatusValue.value;
      });
    return objectSearchResult;
  };

  const setObjectLoading = (value: boolean) => {
    objectIsLoading.value = value;
  };

  const setObjectLoaded = (value: boolean) => {
    objectIsLoaded.value = value;
  };

  const loadObjectValues = () => {
    setObjectLoading(true);
    setObjectLoaded(false);
    setTimeout(() => {
      objectValue.value = objectListData;
      setObjectLoading(false);
      setObjectLoaded(true);
    }, 1500);
  };

  return {
    objectIsLoading,
    objectIsLoaded,
    objectValue,
    objectSearchValue,
    objectStatusValue,
    objectFilteredValue,
    setObjectLoading,
    setObjectLoaded,
    searchObjectFilter,
    loadObjectValues,
  };
});

interface IPostion {
  id: string;
  address: string;
  speed: number;
  attributes: {
    ignition: boolean;
    battery: number;
    signal?: number;
  };
}

export const TaskStatusItems = [
  { name: 'Cancelled', color: 'red-4' },
  { name: 'Pending', color: 'grey-5' },
  { name: 'Delayed', color: 'orange-4' },
  { name: 'Transit', color: 'green' },
  { name: 'Late', color: 'red-4' },
  { name: 'Diverted', color: 'red-4' },
  { name: 'Early', color: 'green' },
  { name: 'Completed', color: 'green' },
  { name: 'Failed', color: 'red-4' },
];

type ITaskStatus =
  | 'Cancelled'
  | 'Pending'
  | 'Delayed'
  | 'Transit'
  | 'Late'
  | 'Diverted'
  | 'Early'
  | 'Failed'
  | 'Completed';

interface ITask {
  id: string;
  estimatedTime: string;
  customer: string;
  status: ITaskStatus;
}

interface IEvent {
  id: string;
  type: string;
}

export interface IObject {
  id: string;
  name: string;
  status: IStatusType;
  resourceTag: Array<string>;
  position?: IPostion;
  task?: ITask;
  geofences: Array<string>;
  event?: IEvent;
}

const objectListData: Array<IObject> = [
  {
    id: '1',
    name: 'LND 92 XG',
    status: 'moving',
    resourceTag: ['1'],
    position: {
      id: '1',
      address: 'Lagos-Ibadan Expressway, Shagamu, Ogun, NG',
      speed: 13,
      attributes: {
        ignition: true,
        battery: 100,
        signal: 80,
      },
    },
    geofences: [],
    task: {
      id: '1',
      estimatedTime: '1 Hours',
      customer: 'Lafarge cement Nigeria',
      status: 'Transit',
    },
    event: {
      id: '1',
      type: 'Loading',
    },
  },
  {
    id: '2',
    name: 'LSR 242 XK',
    status: 'parked',
    resourceTag: ['1'],
    position: {
      id: '2',
      address: 'A121-1, Ake, Ekiti, NG',
      speed: 0,
      attributes: {
        ignition: false,
        battery: 100,
        signal: 80,
      },
    },
    geofences: ['Odogbolu'],
    task: {
      id: '2',
      estimatedTime: '23 hours',
      customer: 'Comart Industries',
      status: 'Pending',
    },
    event: {
      id: '3',
      type: 'Loading',
    },
  },
  {
    id: '3',
    name: 'LSR 243 XN',
    status: 'parked',
    resourceTag: ['2'],
    position: {
      id: '3',
      address: 'Lagos-Ibadan Expressway, Shagamu, Ogun, NG',
      speed: 0,
      attributes: {
        ignition: false,
        battery: 100,
        signal: 80,
      },
    },
    geofences: ['Odogbolu'],
    task: {
      id: '3',
      estimatedTime: '52 Mins',
      customer: 'Lafarge cement Nigeria',
      status: 'Delayed',
    },
    event: {
      id: '3',
      type: 'Offloading',
    },
  },
  {
    id: '4',
    name: 'KJA 970 XE',
    status: 'parked',
    resourceTag: [],
    position: {
      id: '4',
      address: 'Adeniyi Jones Avenue, Ikeja, Lagos, NG',
      speed: 0,
      attributes: {
        ignition: false,
        battery: 100,
        signal: 80,
      },
    },
    geofences: [],
  },
  {
    id: '5',
    name: 'KTU 204 XC',
    status: 'idling',
    resourceTag: ['2'],
    position: {
      id: '5',
      address: 'B, Iddah, Federal Capital Territory, NG',
      speed: 0,
      attributes: {
        ignition: false,
        battery: 100,
        signal: 80,
      },
    },
    geofences: [],
    task: {
      id: '5',
      estimatedTime: '1 hour',
      customer: 'MCPL Nigeria',
      status: 'Pending',
    },
    event: {
      id: '5',
      type: 'To Customer',
    },
  },
  {
    id: '6',
    name: 'LND 101 XG',
    status: 'offline',
    resourceTag: [],
    geofences: [],
  },
  {
    id: '7',
    name: 'KTA 365 XA',
    status: 'moving',
    resourceTag: ['2'],
    position: {
      id: '7',
      address: 'Okene Abuja Expressway, Zango-ndaji, Kogi, NG',
      speed: 48,
      attributes: {
        ignition: false,
        battery: 100,
        signal: 80,
      },
    },
    geofences: [],
    task: {
      id: '7',
      estimatedTime: '3 hour',
      customer: 'BHN Nigeria',
      status: 'Diverted',
    },
    event: {
      id: '7',
      type: 'To Customer',
    },
  },
  {
    id: '8',
    name: 'AAA 767 XH',
    status: 'offline',
    resourceTag: [],
    geofences: [],
  },
];
