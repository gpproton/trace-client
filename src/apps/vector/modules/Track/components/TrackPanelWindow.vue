<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { IModule } from '@/libs/IModule';
import { useTrackWindowState, WindowTypes } from '../stores';
import TrackPanelToggle from './TrackPanelToggle.vue';
import MenuGridValue from '@/layouts/navigation/MenuGridValue.vue';
import ObjectPage from '../pages/Monitor/ObjectsPage.vue';
import HistoryPage from '../pages/Monitor/HistoryPage.vue';
import EventsPage from '../pages/Monitor/EventsPage.vue';
import LocationsPage from '../pages/Monitor/LocationsPage.vue';

const trackWindowState = useTrackWindowState();
const { windowVisibility, showOverlay, currentWindow } =
  storeToRefs(trackWindowState);

const { setCurrentWindow, setShowOverlay } = trackWindowState;

const gridMenuActions = (value: number) => {
  setCurrentWindow(value);
  setShowOverlay(false);
};

type IWindowItems = IModule & {
  id: number;
};

const windowItems = ref<Array<IWindowItems>>([
  {
    title: 'Objects',
    name: 'vec.track.monitor.objects',
    icon: 'bi-record-circle',
    id: WindowTypes.Object,
  },
  {
    title: 'History',
    name: 'vec.track.monitor.history',
    icon: 'bi-clock-history',
    id: WindowTypes.History,
  },
  {
    title: 'Events',
    name: 'vec.track.monitor.events',
    icon: 'bi-bell',
    id: WindowTypes.Event,
  },
  {
    title: 'Locations',
    name: 'vec.track.monitor.locations',
    icon: 'bi-geo-alt',
    id: WindowTypes.Location,
  },
]);
</script>

<script lang="ts">
export default {
  name: 'TrackPanelWindow',
};
</script>

<template>
  <fragment>
    <track-panel-toggle v-model="windowVisibility" type="closed" />
    <div v-show="windowVisibility" class="panel-wrapper border-radius-sm">
      <q-overlay
        :no-scroll="true"
        background-color="rgba(189, 189, 189, 0.8)"
        v-model="showOverlay"
      >
        <template #body>
          <!-- Overlay content-->
          <div class="fit row justify-center items-start">
            <q-card class="border-radius-sm full-width q-py-sm">
              <menu-grid-value
                :items="windowItems"
                @grid-action="gridMenuActions"
              />
            </q-card>
          </div>
        </template>
        <q-card
          class="panel-content no-padding border-radius-sm column justify-between no-scroll"
        >
          <!-- Panel content-->
          <object-page v-if="currentWindow === WindowTypes.Object" />
          <history-page v-if="currentWindow === WindowTypes.History" />
          <events-page v-if="currentWindow === WindowTypes.Event" />
          <locations-page v-if="currentWindow === WindowTypes.Location" />
        </q-card>
      </q-overlay>
      <track-panel-toggle v-model="windowVisibility" type="opened" />
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
.panel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.panel-content {
  width: 395px;
  min-height: calc(100vh - 96px);
  // max-height: calc(100vh - 96px);
}
</style>
