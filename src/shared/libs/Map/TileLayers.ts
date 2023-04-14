import { ITileLayer } from './Map';

const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const TileLayers: Array<ITileLayer> = [
  {
    id: 'open.street',
    name: 'Open Street',
    custom: false,
    visible: false,
    attribution: '',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    id: 'mapbox.streets',
    name: 'MapBox',
    custom: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },
  // Traffic: navigation-day-v1
  {
    id: 'mapbox.satellite',
    name: 'MapBox Sat',
    custom: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },
  // Traffic: include with addGoogleLayer
  {
    id: 'google.street',
    name: 'Google',
    custom: true,
    layerType: 'TrafficLayer',
    visible: false,
    options: {
      type: 'roadmap',
      maxZoom: 21,
    },
  },
  {
    id: 'google.satellite',
    name: 'Google Sat',
    custom: true,
    layerType: 'TrafficLayer',
    visible: false,
    options: {
      type: 'hybrid',
      maxZoom: 21,
    },
  },
];

export default TileLayers;
