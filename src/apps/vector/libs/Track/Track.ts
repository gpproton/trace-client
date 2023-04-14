import { IPeriod } from '@/libs/Common/Time';
import { IStatusTypes } from '@/libs/Track/Status';
import { ITaskItem } from './Objects';

export interface IActionItems {
  title: string;
  icon: string;
}

export interface ITrackState {
  windowVisibility: boolean;
  windowOverlay: boolean;
  currentWindow: number;
  dialogDrawer: boolean;
  toolbarVisibility: boolean;
  searchTextState: string;
  panelOverlayAbsolute: boolean;
  setCurrentWindow: (currentWindow: number) => void;
  triggerSearch(): void;
  toggleWindowVisibility(): void;
  toggleWindowOverlay(): void;
  toggleDialogDrawer(): void;
}

export interface ITaskState {
  objectListItems: Array<ITaskItem>;
  visibleObjects: Array<ITaskItem>;
  filterCurrent?: string;
  statusBarTypes: Array<IStatusTypes>;
  actionItems: Array<IActionItems>;
  triggerSearch(searchText: string): void;
  filterStatus(status: string): void;
  getFilterCurrent(value: string): boolean;
  getFilterColor(status: string): string;
  getObjectEventColor(objectItem: ITaskItem): string;
  getFilterCount(value: string): number;
}

export interface IHistoryState {
  selectedObject?: ITaskItem;
  tempObjectList: Array<ITaskItem>;
  periodItems: Array<IPeriod>;
  selectedPeriod: IPeriod;
  showCustomPeriod: boolean;
}

export interface IEventState {
  selectedObject: ITaskItem;
}
