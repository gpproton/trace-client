<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';
import { useMapState } from '@/components/Map/stores';

const barTimeout = ref();
const mapState = useMapState();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);
const getIcon = (fill: string) => {
  return `<i class="q-icon bootstrap-icons bi-${fill}" style="font-size: 1.25rem; color: #000"></i>`;
};

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();

    const objectToggle = L.easyButton({
      states: [
        {
          stateName: 'object-enabled',
          title: 'Hide objects',
          icon: getIcon('record2-fill'),
          onClick: (control) => {
            control.state('object-disabled');
          },
        },
        {
          stateName: 'object-disabled',
          title: 'Show objects',
          icon: getIcon('record2'),
          onClick: (control) => {
            control.state('object-enabled');
          },
        },
      ],
    });

    const trafficToggle = L.easyButton({
      states: [
        {
          stateName: 'traffic-enabled',
          title: 'Hide Traffic',
          icon: getIcon('stoplights-fill'),
          onClick: (control) => {
            control.state('traffic-disabled');
          },
        },
        {
          stateName: 'traffic-disabled',
          title: 'Show Traffic',
          icon: getIcon('stoplights'),
          onClick: (control) => {
            control.state('traffic-enabled');
          },
        },
      ],
    });

    const clusterToggle = L.easyButton({
      states: [
        {
          stateName: 'cluster-enabled',
          title: 'Disable Cluster',
          icon: getIcon('diagram-3'),
          onClick: (control) => {
            control.state('cluster-disabled');
          },
        },
        {
          stateName: 'cluster-disabled',
          title: 'Enable Cluster',
          icon: getIcon('diagram-3-fill'),
          onClick: (control) => {
            control.state('cluster-enabled');
          },
        },
      ],
    });

    const labelToggle = L.easyButton({
      states: [
        {
          stateName: 'hide-labels',
          title: 'Hide labels',
          icon: getIcon('fonts'),
          onClick: (control) => {
            control.state('show-labels');
          },
        },
        {
          stateName: 'show-labels',
          title: 'Show labels',
          icon: getIcon('fonts'),
          onClick: (control) => {
            control.state('hide-labels');
          },
        },
      ],
    });

    const trailToggle = L.easyButton({
      states: [
        {
          stateName: 'trail-enabled',
          title: 'Hide Trail',
          icon: getIcon('arrow-up-right-circle-fill'),
          onClick: (control) => {
            control.state('trail-disabled');
          },
        },
        {
          stateName: 'trail-disabled',
          title: 'Show Trail',
          icon: getIcon('arrow-up-right-circle'),
          onClick: (control) => {
            control.state('trail-enabled');
          },
        },
      ],
    });

    const locationToggle = L.easyButton({
      states: [
        {
          stateName: 'location-disabled',
          title: 'Show Location',
          icon: getIcon('pin'),
          onClick: (control) => {
            control.state('location-enabled');
          },
        },
        {
          stateName: 'location-enabled',
          title: 'Hide Location',
          icon: getIcon('pin-fill'),
          onClick: (control) => {
            control.state('location-disabled');
          },
        },
      ],
    });

    const routeBar = L.easyBar(
      [
        objectToggle,
        trafficToggle,
        clusterToggle,
        labelToggle,
        trailToggle,
        locationToggle,
      ],
      {
        position: 'bottomright',
      }
    );
    barTimeout.value = setTimeout(() => {
      routeBar.addTo(mapInstance.value);
    }, 500);
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
  clearTimeout(barTimeout.value);
});
</script>

<script lang="ts">
export default {
  name: 'ButtonObjectToggle',
};
</script>

<template>
  <span v-show="false"></span>
</template>
