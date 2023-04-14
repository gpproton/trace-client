import { IPosition } from './Position';
import { ITask } from '../Task/Task';

export interface ITaskItem {
  uniqueId: string;
  lastUpdated: string;
  vehicleNumber: string;
  tags: string[];
  status: string;
  position: IPosition;
  geofences: string[];
  task: ITask;
  event: Event;
}
