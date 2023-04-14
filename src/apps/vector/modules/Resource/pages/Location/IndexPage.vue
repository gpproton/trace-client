<script setup lang="ts">
import { ref } from 'vue';
import MapLocation from '@/components/Map/MapLocation.vue';

const contextOptions = {
  page: {
    title: 'Trip Locations',
  },
};
const search = ref('');
const sampleLocationList = ref([
  {
    name: 'Customer - 1',
    address: 'Lagos-Ibadan Expressway, Ogun, NG',
    tag: 'Warehouse',
    color: '#7f7f7f',
  },
  {
    name: 'Customer - 2',
    address: 'Lagos-Ibadan Expressway, Ogun, NG',
    tag: 'Fuel Station',
    color: '#7f7f7f',
  },
]);
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm q-pt-sm column">
      <div
        class="row q-col-gutter-x-md q-col-gutter-y-lg q-mt-xs"
        style="flex: 1 1 auto; max-height: calc(100vh - 105px)"
      >
        <!-- Column 1 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
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
                icon="bi-plus-lg"
                color="primary"
                class="border-radius-sm q-ml-sm"
              ></q-btn>
            </div>
            <q-list v-for="(loc, locIndex) in sampleLocationList">
              <q-item :key="locIndex" class="border-radius-sm" clickable>
                <q-item-section>
                  <q-item-label
                    class="text-weight-medium text-body1 text-primary q-py-xs"
                    lines="1"
                  >
                    <span
                      class="dot q-mr-sm"
                      style="background-color: {{ loc.color }};"
                    ></span>
                    <span>{{ loc.name }}</span>
                    <span
                      class="q-ml-sm text-caption bordered-section-1 q-px-xs q-py-xs"
                      style="color: {{ loc.color }};"
                    >
                      <q-icon
                        size="1.2em"
                        name="bi-tag"
                        class="q-mr-sm"
                      ></q-icon>
                      <span>
                        {{ loc.tag }}
                      </span>
                    </span>
                  </q-item-label>
                  <q-item-label class="text-accent" caption>
                    <span>
                      <q-icon
                        size="1.2em"
                        name="bi-geo-alt"
                        color="accent"
                        class="q-mr-xs"
                      />
                      {{ loc.address }}
                    </span>
                  </q-item-label>
                </q-item-section>
                <q-item-section class="row" side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      icon="bi-pencil"
                      size="sm"
                      color="green"
                      class="q-ma-none q-px-sm border-radius-xs"
                    ></q-btn>
                    <q-btn
                      dense
                      icon="bi-trash"
                      size="md"
                      flat
                      color="red"
                      class="q-mx-sm"
                    ></q-btn>
                  </div>
                </q-item-section>
              </q-item>
              <q-separator
                class="q-mx-md q-my-xs"
                v-if="locIndex < sampleLocationList.length - 1"
              ></q-separator>
            </q-list>
          </q-card>
        </div>

        <!-- Column 2 -->
        <div class="col-12 col-md-8 border-radius-sm column">
          <map-location class="col border-radius-sm"></map-location>
        </div>
      </div>
    </q-page>
  </page-wrapper>
</template>
