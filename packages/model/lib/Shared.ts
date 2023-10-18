export enum ActionType {
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete'
}

export enum Workflow {
  Custom = 'custom',
  Telematics = 'telematics',
  Courier = 'courier',
  Passenger = 'passenger',
  Logistics = 'logistics',
  System = 'system'
}

export type Action = { create?: boolean, read?: boolean, update?: boolean, delete?: boolean }
export type ActionState = { module?: string, feature: string, type: ActionType }
export type Permission = { module?: string, feature: string, actions: Action }
