<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTrackWindowState } from '../../stores';

const { showOverlay } = storeToRefs(useTrackWindowState());
</script>

<script lang="ts">
export default {
  name: 'TrackLocationsPage',
};
</script>

<template>
  <div>
    <div class="row q-mb-sm q-pa-xs">
      <div class="col app-form">
        <input-text type="search" label="Locations" class="border-radius-sm">
          <template #prepend>
            <q-btn unelevated outline color="accent" class="border-radius-sm"
              ><q-icon name="bi-sliders" size="1.5em"></q-icon
            ></q-btn>
          </template>
        </input-text>
      </div>
      <q-btn
        unelevated
        color="accent"
        class="border-radius-sm q-ml-xs"
        @click="showOverlay = !showOverlay"
      >
        <q-icon size="2.4em" name="bi-list"></q-icon>
      </q-btn>
    </div>
  </div>
</template>
