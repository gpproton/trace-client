<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTrackWindowState } from '../../stores';
import { useObjectState, TaskStatusItems } from '../../stores/Object';
import { useResourceTagState } from '../../stores/ResourceTag';
import SwitcherStatus from '@/layouts/navigation/SwitcherStatus.vue';
import { StatusTypes } from '@/libs/Track/Status';

const { showOverlay } = storeToRefs(useTrackWindowState());
const resourceTagState = useResourceTagState();
const objectState = useObjectState();

const { resourceTagValue } = storeToRefs(resourceTagState);
const {
  objectIsLoading,
  objectIsLoaded,
  objectStatusValue,
  objectSearchValue,
  objectValue,
  objectFilteredValue,
} = storeToRefs(objectState);

const { loadResourceTagValues } = resourceTagState;
const { loadObjectValues } = objectState;

onMounted(() => {
  loadResourceTagValues();
  loadObjectValues();
});

const statusListCount = computed(() => {
  return StatusTypes.map((statusItem) => {
    statusItem.count = objectValue.value.filter((objectItem) => {
      return objectItem.status === statusItem.id;
    }).length;
    return statusItem;
  });
});

const isObjectReady = computed(() => {
  return (
    resourceTagValue.value.length > 0 &&
    !objectIsLoading.value &&
    objectIsLoaded.value
  );
});

const computedResourceTagValue = computed(() => {
  const checkNoResource = objectFilteredValue.value.filter((objectItem) => {
    return objectItem.resourceTag.length < 1;
  });

  if (checkNoResource.length > 0)
    return [...resourceTagValue.value, { id: 'none', name: 'No Resource' }];

  return resourceTagValue.value;
});

const getObjectResource = (resourceValue: string) => {
  if (resourceValue === 'none')
    return objectFilteredValue.value.filter((objectItem) => {
      return objectItem.resourceTag.length < 1;
    });
  return objectFilteredValue.value.filter((objectItem) => {
    return objectItem.resourceTag[0] === resourceValue;
  });
};

const computedObjectResource = computed(() => {
  return computedResourceTagValue.value.map((resourceItem) => {
    return {
      id: resourceItem.id,
      name: resourceItem.name,
      items: getObjectResource(resourceItem.id),
    };
  });
});

const getMovementStateColor = (value: string) => {
  if (!value) return '#7f7f7f';
  const state = StatusTypes.filter((status) => status.id === value)[0];
  return state.color;
};

const getTaskStatusColor = (value: string | undefined) => {
  if (!value) return 'grey-4';
  const state = TaskStatusItems.filter((status) => status.name === value)[0];
  return state.color;
};

const quickActionMenu = [
  { title: 'Trail', icon: 'bi-arrow-90deg-right' },
  { title: 'Last Hour', icon: 'bi-clock' },
  { title: 'Today', icon: 'bi-calendar-event' },
  { title: 'Yesterday', icon: 'bi-calendar4-range' },
  { title: 'Tasks', icon: 'bi-list-task' },
];
</script>

<script lang="ts">
export default {
  name: 'TrackObjectsPage',
};
</script>

<template>
  <div class="col-1 row q-mb-sm q-px-xs q-pt-xs">
    <div class="col app-form">
      <input-text
        type="search"
        v-model="objectSearchValue"
        label="Objects"
        class="border-radius-sm"
      >
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
  <q-list
    class="col overflow-auto hide-scrollbar"
    style="max-height: calc(100vh - 205px)"
  >
    <q-inner-loading :showing="!isObjectReady">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

    <q-expansion-item
      v-show="isObjectReady && resourceItem.items.length > 0"
      v-for="resourceItem in computedObjectResource"
      dense
      dense-toggle
      expand-icon-toggle
      :expand-separator="false"
      expand-icon="bi-plus-square"
      expanded-icon="bi-dash-square-dotted"
      :label="resourceItem.name"
      header-class="text-accent text-body2 bg-app-background-shift border-radius-xs q-px-sm q-mx-xs"
      default-opened
    >
      <template v-for="item in resourceItem.items">
        <q-item class="border-radius-sm q-mx-xs" clickable>
          <q-item-section>
            <q-item-label caption>
              <span class="text-secondary">
                <q-icon
                  size="1.2em"
                  class="q-mr-xs"
                  color="secondary"
                  name="bi-clock-history"
                ></q-icon>
                <span>{{ item.task?.estimatedTime || 'No ETA' }}</span>
              </span>
              <span
                class="float-right status-pill ellipsis q-py-xs border-radius-xs text-white text-center bg-secondary"
              >
                {{ item.event?.type || 'No Event' }}
              </span>
              <span
                class="float-right q-mr-sm status-pill ellipsis q-pa-xs q-px-sm border-radius-xs text-weight-medium text-white ellipsis text-center"
                :class="'bg-' + getTaskStatusColor(item.task?.status)"
                >{{ item.task?.status || 'None' }}</span
              >
            </q-item-label>
            <q-item-label class="q-py-none">
              <span
                class="dot q-mr-sm"
                :style="
                  'background-color: ' + getMovementStateColor(item.status)
                "
              ></span>
              <span class="text-accent text-body2 text-weight-medium">{{
                item.name
              }}</span>
              <span
                class="float-right text-caption text-accent ellipsis"
                style="width: 125px"
              >
                <span>{{ item.task?.customer || 'Unassigned' }}</span>
              </span>
            </q-item-label>
            <q-item-label class="text-secondary" caption lines="2">{{
              item.position?.address || 'Unavailable'
            }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label
              style="width: 50px"
              class="q-py-xs text-accent"
              caption
              >{{ (item.position?.speed || 0) + ' Kph' }}</q-item-label
            >

            <q-btn
              flat
              round
              size="sm"
              icon="bi-three-dots-vertical"
              class="q-mt-sm"
              color="accent"
            >
              <q-menu
                transition-show="scale"
                transition-hide="scale"
                anchor="top right"
                self="top left"
              >
                <q-list class="q-pa-xs" dense style="min-width: 100px">
                  <q-item
                    clickable
                    dense
                    v-for="menuItem in quickActionMenu"
                    v-close-popup
                    class="q-px-xs no-margin border-radius-xs"
                  >
                    <q-item-section class="q-mx-none">
                      <q-item-label class="text-accent" caption>
                        <q-icon
                          :name="menuItem.icon"
                          class="q-mr-md"
                          size="1.1em"
                        ></q-icon>
                        <span>{{ menuItem.title }}</span>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item-section>
        </q-item>
        <q-separator v-show="isObjectReady" spaced inset />
      </template>
    </q-expansion-item>
  </q-list>
  <div class="col-1 border-radius-sm bg-app-background q-mx-xs q-mb-xs">
    <switcher-status
      v-model="objectStatusValue"
      :items="statusListCount"
    ></switcher-status>
  </div>
</template>

<style lang="scss">
.status-pill {
  display: inline-block;
  min-width: 85px !important;
}
</style>
