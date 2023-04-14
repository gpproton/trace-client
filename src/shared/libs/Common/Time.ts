export type IPeriod = {
  text: string;
  value: string;
};

export const periodTypes: Array<IPeriod> = [
  { text: 'Last Hour', value: 'hour-1' },
  { text: 'Custom', value: 'custom' },
  { text: '24 Hour', value: 'hour-24' },
  { text: 'Today', value: 'day-0' },
  { text: 'Yesterday', value: 'day-1' },
  { text: '2 Days ago', value: 'day-2' },
  { text: 'This Week', value: 'week-0' },
  { text: 'This Month', value: 'month-0' },
  { text: 'Last Week', value: 'week-1' },
  { text: 'Last Month', value: 'month-1' },
];
