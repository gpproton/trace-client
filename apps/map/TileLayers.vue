<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
import type L from 'leaflet';
import {
  defineComponent,
  onMounted,
  ref,
  inject,
  markRaw,
  nextTick,
} from 'vue';
import { TileLayers } from './TileLayerObjects';
import { Utilities, InjectionKeys, Functions } from '@vue-leaflet/vue-leaflet';
import 'leaflet-switch-basemap';
import 'leaflet-switch-basemap/src/L.switchBasemap.css';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';

type LayerSwitcherObject = {
  id?: string;
  layer: L.TileLayer | L.GridLayer | any;
  icon: string;
  name: string;
  option?: any;
};

export const propTypes = {
  test: {
    type: String,
    required: false,
    custom: true,
  },
};

export default defineComponent({
  name: 'TileLayers',
  props: propTypes,
  setup(props, context) {
    const { remapEvents, WINDOW_OR_GLOBAL, assertInject } = Utilities;
    const {
      UseGlobalLeafletInjection,
      AddLayerInjection,
      RegisterControlInjection,
    } = InjectionKeys;

    const leafletObject = ref();
    const ready = ref(false);
    const useGlobalLeaflet = inject(UseGlobalLeafletInjection);
    const addLayer = assertInject(AddLayerInjection);
    const registerControl = assertInject(RegisterControlInjection);

    onMounted(async () => {
      // @ts-expect-error
      const { tileLayer, basemapsSwitcher, gridLayer }: typeof L =
        useGlobalLeaflet
          ? WINDOW_OR_GLOBAL.L
          : // @ts-ignore
            await import('leaflet/dist/leaflet-src.esm');

      const { listeners } = remapEvents(context.attrs);
      const switcherMapTiles = computed<LayerSwitcherObject[]>(() =>
        TileLayers.map((tile) => {
          const layer = !tile.google
            ? markRaw<L.TileLayer>(tileLayer(tile.url as string, {}))
            : markRaw(
                // @ts-ignore
                gridLayer.googleMutant({
                  trafficLayer: true,
                  ...tile.options,
                }),
              );

          layer.on(listeners);
          const layerItems: LayerSwitcherObject = {
            id: tile.id,
            layer,
            icon: '/tile-0.png',
            name: tile.name,
            option: tile,
          };

          if (tile.google) {
            layerItems.layer.addGoogleLayer(String(tile.layerType));
          }

          return layerItems;
        }),
      );

      // TODO: apply dynamic default layer
      // if (currentTileLayer.value.id === tile.id)
      if (switcherMapTiles.value !== null) {
        addLayer({
          leafletObject: switcherMapTiles.value[0].layer,
        });
      }

      leafletObject.value = markRaw(
        basemapsSwitcher(switcherMapTiles.value, {
          position: 'bottomright',
        }),
      );
      registerControl({ leafletObject: leafletObject.value });

      ready.value = true;
      // eslint-disable-next-line vue/require-explicit-emits
      nextTick(() => context.emit('ready', leafletObject.value));
    });

    return {};
  },
  render() {
    return null;
  },
});
</script>
