<script setup lang="ts">
import { nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';
import { useMapState } from '@/components/Map/stores';
import { useRouting } from '@/components/Map/stores/Routing';

const mapState = useMapState();
const routingState = useRouting();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);
const { routeInstance, routeShowSheet } = storeToRefs(routingState);

const getIcon = (fill: string) => {
  return `<i class="q-icon bootstrap-icons bi-compass${fill}" style="font-size: 1.25rem; color: #000"></i>`;
};

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();
    const routeStateToggle = L.easyButton({
      states: [
        {
          stateName: 'route-diabled',
          title: 'Show Route Sheet',
          icon: getIcon(''),
          onClick: (control) => {
            control.state('route-enabled');
            routeShowSheet.value = true;
            if (routeInstance.value !== undefined) {
              routeInstance.value.show();
            }
          },
        },
        {
          stateName: 'route-enabled',
          title: 'Hide Route Sheet',
          icon: getIcon('-fill'),
          onClick: (control) => {
            control.state('route-diabled');
            if (routeInstance.value !== undefined && routeShowSheet.value) {
              routeInstance.value.hide();
              routeInstance.value.remove();
            }
            routeShowSheet.value = false;
          },
        },
      ],
    });

    const routeBar = L.easyBar([routeStateToggle], {
      position: 'topright',
    });
    routeBar.addTo(mapInstance.value);
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
});
</script>

<script lang="ts">
export default {
  name: 'ButtonMapDefault',
};
</script>

<template>
  <span v-show="false"></span>
</template>
