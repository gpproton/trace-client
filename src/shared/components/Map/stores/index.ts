/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, computed, onBeforeUnmount, nextTick } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useContextmenu } from './ContextMenu';
import { useRouting } from './Routing';
import { ITileLayer } from '@/libs/Map/Map';
import { TileLayers } from '@/libs/Map/TileLayers';

/*
const googleLayerFix = (event: any): void => {
  Array.from(document.styleSheets).forEach((sheet) => {
    const node: any = sheet.ownerNode;
    if (node && node.href && node.href.includes('fonts.googleapis.com')) {
      node.parentElement.removeChild(node);
    }
  });
};
*/

export const useMapState = defineStore('app.map', () => {
  const routingState = useRouting();
  const { contextMenuItems, contextMenuOptions } = storeToRefs(
    useContextmenu()
  );
  const config = process.env;
  const mapReady = ref<boolean>(false);
  const mapPluginReady = ref<boolean>(false);
  const mapReference = ref();
  const mapInstance = ref();
  const mapOptions = ref();
  const minimumZoom = ref<number>(5);
  const maximumZoom = ref<number>(21);
  const currentTileLayer = ref();
  const currentZoomValue = ref<number>(5);
  const currentCenterValue = ref<[number, number]>([0, 0]);
  const measurmentUnit = ref<string>('metric');
  const mapTiles = ref<Array<ITileLayer>>(TileLayers);
  const mapReadyTimeout = ref();
  const mapResizeTimeout = ref();

  const currentCenter = computed<[number, number]>(
    () => currentCenterValue.value
  );
  const currentZoom = computed<number>(() => currentZoomValue.value);
  const showTooltip = computed<boolean>(() => {
    if (mapOptions.value !== null) {
      const showAtValue = mapOptions.value.selectionZoom - 1;
      return currentZoomValue.value >= showAtValue;
    }
    return false;
  });

  /* Functions */
  const onInitialize = () => {
    minimumZoom.value = Number(config.DEFAULT_MAP_MIN_ZOOM);
    maximumZoom.value = Number(config.DEFAULT_MAP_MAX_ZOOM);
    currentCenterValue.value = String(config.DEFAULT_MAP_CENTER)
      .split(',')
      .map(Number) as [number, number];
    currentZoomValue.value = Number(config.DEFAULT_MAP_ZOOM);

    const options = {
      zoomSnap: 0.5,
      zoomControl: false,
      attributionControl: false,
      layerId: config.DEFAULT_MAP_LAYER,
      zoom: currentZoomValue.value,
      minZoom: minimumZoom.value,
      maxZoom: maximumZoom.value,
      center: currentCenterValue.value,
      selectionZoom: Number(config.DEFAULT_MAP_SELECT_ZOOM),
      // TODO: Later add maxBounds: config.DEFAULT_MAP_BOUNDS,
      preferCanvas: true,
    };
    const layerId = options.layerId;
    const defaultTileLayer = TileLayers.filter((item) => {
      return item.id === layerId;
    }, layerId)[0];

    currentTileLayer.value = defaultTileLayer || TileLayers[0];
    mapOptions.value = {
      ...options,
      ...contextMenuOptions.value,
      contextmenuItems: contextMenuItems.value,
    };
  };

  const onMapReady = async () => {
    await nextTick();
    if (mapReference.value !== null) {
      mapInstance.value = mapReference.value.leafletObject;
      mapReadyTimeout.value = setTimeout(() => {
        mapReady.value = true;
        mapResizeTimeout.value = setTimeout(() => {
          mapInstance.value.invalidateSize();
          mapInstance.value.setView(
            currentCenterValue.value,
            currentZoomValue.value
          );
          mapPluginReady.value = true;
          mapInstance.value.on('click', onMapClick);
        }, 300);
      }, 150);

      /** Events hooks for google layers font fix */
      // mapInstance.value.on('load', googleLayerFix);
      // mapInstance.value.on('viewreset', googleLayerFix);
      // mapInstance.value.on('mousemove', googleLayerFix);
      // mapInstance.value.on('baselayerchange', (event: any) => {
      //   setTimeout(() => {
      //     googleLayerFix(event);
      //   }, 3000);
      // });
    }
  };

  const onMapClick = (e: any) => {
    /* Initial route points trigger */
    if (routingState.isRoutePointsReady) {
      routingState.addRoute(e);
    }
  };

  const onCenterUpdate = (center: [number, number]): void => {
    currentCenterValue.value = center;
  };

  const onZoomUpdate = (zoom: number): void => {
    currentZoomValue.value = zoom;
  };

  const onMarkerActions = (): void => {
    // Live Tracking Markers checks
  };

  const onMapZoomStart = (): void => {
    // TODO: Capture required event
  };
  useMapState;
  const onMapZoomEnd = (): void => {
    // TODO: Capture required event
  };

  onBeforeUnmount(() => {
    clearTimeout(mapReadyTimeout.value);
    clearTimeout(mapResizeTimeout.value);
    mapReady.value = false;
  });

  return {
    mapReady,
    mapPluginReady,
    mapReference,
    mapInstance,
    minimumZoom,
    maximumZoom,
    currentZoom,
    currentZoomValue,
    currentCenter,
    currentCenterValue,
    mapOptions,
    mapTiles,
    currentTileLayer,
    measurmentUnit,
    showTooltip,
    /* Functions */
    onMapReady,
    onMapClick,
    onInitialize,
    onMapZoomStart,
    onMapZoomEnd,
    onCenterUpdate,
    onMarkerActions,
    onZoomUpdate,
  };
});
