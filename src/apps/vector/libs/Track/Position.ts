export interface IPositionAttributes {
  ignition: boolean;
  battery: number;
  signal?: number;
}

export interface IPosition {
  lat: number;
  lon: number;
  time: string;
  address: string;
  speed: number;
  course: number;
  attributes: IPositionAttributes;
}
