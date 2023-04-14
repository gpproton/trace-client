<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import ActivityContainer from './components/ActivityContainer.vue';
import SwitcherButton from '@/layouts/navigation/SwitcherButton.vue';
import ActivitiesMenu from './menu';

const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const search = ref<string>('');
const timeout = ref();

const contextOptions = {
  page: {
    title: 'Task Activities',
  },
};

const sampleVehicleList = ref([
  {
    id: 0,
    name: 'LND 100 XG',
    address: 'Lagos-Ibadan Expressway, Shagamu, Ogun, NG',
    status: 'Loading',
    event: 'Transit',
    time: '2020-01-01 00:00',
  },
  {
    id: 1,
    name: 'AAA 767 XH',
    address: 'Magazine Road, Links Reservation, Oyo, NG',
    status: 'To Customer',
    event: 'Diverted',
    time: '2020-05-01 00:00',
  },
]);

const objectListVisible = computed(() => {
  if (route.name === 'vec.task.activities') return true;
  else return $q.platform.is.desktop;
});

onMounted(() => {
  if (objectListVisible.value && !$q.platform.is.mobile) {
    timeout.value = setTimeout(() => {
      router.push({
        name: 'vec.task.activities.summary',
        query: {
          'task-id': search.value,
        },
      });
    }, 1000);
  }
});

onBeforeUnmount(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm q-pt-md column">
      <div
        class="row q-col-gutter-x-md q-col-gutter-y-lg"
        style="flex: 1 1 auto; max-height: calc(100vh - 105px)"
      >
        <!-- List items objects -->
        <div
          v-if="objectListVisible"
          class="col-12 col-md-4"
          style="max-height: calc(100vh - 155px)"
        >
          <div class="row q-mb-sm">
            <div class="col app-form">
              <input-text
                type="search"
                v-model="search"
                label="Search.."
                class="border-radius-sm"
              >
                <template #append>
                  <q-icon
                    name="bi-search"
                    class="q-mr-sm"
                    size="16"
                    color="accent"
                  ></q-icon>
                </template>
              </input-text>
            </div>
            <q-btn
              unelevated
              icon="bi-funnel"
              color="accent"
              class="border-radius-sm q-ml-sm"
            ></q-btn>
          </div>

          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <q-list v-for="(veh, vehIndex) in sampleVehicleList">
              <q-item :key="vehIndex" clickable>
                <q-item-section>
                  <q-item-label caption>
                    <span>
                      <q-icon
                        size="1.2em"
                        name="bi-clock"
                        color="accent"
                        class="q-mr-xs"
                      />
                      <span>{{ veh.time }}</span>
                    </span>
                    <span
                      class="bg-green text-white border-radius-xs q-ml-md"
                      style="padding: 0.1em 0.5em"
                    >
                      {{ veh.event }}</span
                    >
                    <span
                      class="bg-secondary text-white border-radius-xs q-ml-sm"
                      style="padding: 0.1em 0.5em"
                    >
                      {{ veh.status }}</span
                    >
                  </q-item-label>
                  <q-item-label
                    class="text-weight-medium text-body1 text-primary q-py-sm"
                    lines="1"
                    >{{ veh.name }}</q-item-label
                  >
                  <q-item-label class="text-accent" caption>
                    <span>
                      <q-icon
                        size="1.2em"
                        name="bi-geo-alt"
                        color="accent"
                        class="q-mr-xs"
                      />
                      {{ veh.address }}
                    </span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="bi-three-dots-vertical" color="accent" />
                </q-item-section>
              </q-item>
              <q-separator
                class="q-mx-md q-my-xs"
                v-if="vehIndex < sampleVehicleList.length - 1"
              ></q-separator>
            </q-list>
          </q-card>
        </div>
        <!-- Content grid desktop -->
        <activity-container
          v-if="!$q.platform.is.mobile"
          :module-items="ActivitiesMenu"
          class="desktop-only"
          style="max-height: calc(100vh - 155px)"
        >
          <router-view></router-view>
        </activity-container>
        <!-- Content grid mobile -->
        <fragment v-else>
          <div class="q-mb-sm full-width">
            <switcher-button
              :items="ActivitiesMenu"
              align="justify"
              route
              flat
            ></switcher-button>
          </div>
          <router-view></router-view>
        </fragment>
      </div>
    </q-page>
  </page-wrapper>
</template>
