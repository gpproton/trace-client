/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useMapState } from './index';
import * as L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import 'lrm-mapzen';

export const useRouting = defineStore('app.map.routing', () => {
  const mapState = useMapState();
  const routeInstance = ref();
  const routeMarkers = ref<L.Marker[]>([]);
  const routeSourceDestination = ref<Array<[number, number]>>([]);
  const routeWaypoints = ref();
  const routeOptions = ref();
  const routeShowSheet = ref<boolean>(false);
  const isRoutePointsReady = computed<boolean>(
    () => routeSourceDestination.value.length > 0
  );

  const triggerRouteLoad = () => {
    routeInstance.value = L.Routing.control({
      // @ts-ignore
      router: L.Routing.mapzen('API_KEY', {
        serviceUrl: process.env.API_ROUTING_PATH + 'route?',
        timeout: 45 * 1000,
        costing: 'truck',
        costing_options: {
          truck: {
            shortest: false,
            top_speed: 40,
            weight: 40,
            axle_load: 40,
            use_highways: 1,
          },
        },
        directions_options: {
          language: 'en-US',
        },
      }),
      // @ts-ignore
      formatter: new L.Routing.mapzenFormatter(),
      // @ts-ignore
      geocoder: L.Control.Geocoder.nominatim({
        serviceUrl: process.env.API_GEOCODING_PATH,
      }),
      collapsible: false,
      summaryTemplate:
        '<div style="background-color: #ededed; padding: 0.3rem; border: 1px solid #7f7f7f; border-radius: 8px"><div style="font-size: 2.4; font-weight: 700">{name}</div><div style="font-size: 0.5; font-weight: 100; color: dodgerblue"><span>{distance}</span> <span>{time}</span></div></div>',
      routeWhileDragging: false,
      useZoomParameter: false,
      showAlternatives: false,
      waypoints: [
        L.latLng(routeSourceDestination.value[0]),
        L.latLng(routeSourceDestination.value[1]),
      ],
    });

    routeInstance.value.addTo(mapState.mapInstance);
    if (!routeShowSheet.value) routeInstance.value.hide();
  };

  const addRoute = (e: any) => {
    const marker = L.marker(e.latlng, {
      title: 'Route',
      draggable: false,
    });
    marker.addTo(mapState.mapInstance);
    routeMarkers.value.push(marker);
    if (routeSourceDestination.value.length < 2)
      routeSourceDestination.value.push(e.latlng);
    if (routeSourceDestination.value.length === 2) {
      /** Clear selection markers */
      routeMarkers.value.forEach(function (markerValue) {
        mapState.mapInstance.removeLayer(markerValue);
      });
      routeMarkers.value = [];

      if (routeInstance.value !== undefined) {
        routeInstance.value.hide();
        routeInstance.value.remove();
        routeInstance.value = null;
      }
      triggerRouteLoad();
      routeSourceDestination.value = [];
    }
  };

  const removeRoute = () => {
    if (routeInstance.value) {
      routeInstance.value.remove();
    }
  };

  return {
    routeInstance,
    routeMarkers,
    routeSourceDestination,
    isRoutePointsReady,
    routeWaypoints,
    routeOptions,
    routeShowSheet,
    addRoute,
    removeRoute,
    triggerRouteLoad,
  };
});
