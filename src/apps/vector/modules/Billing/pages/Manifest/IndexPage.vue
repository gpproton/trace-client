<script setup lang="ts">
import { ref } from 'vue';

const contextOptions = {
  page: {
    title: 'Order Manifest',
  },
};

const dateTime = ref('2022-01-01 00:00');
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="column">
      <div
        class="q-pa-sm q-pt-md row q-col-gutter-x-md q-col-gutter-y-lg"
        style="min-height: calc(100vh - 86px)"
      >
        <div class="col-12 col-md-6">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="row q-mb-sm">
              <div class="col app-form">
                <input-text
                  type="search"
                  label="Vehicles"
                  class="border-radius-sm"
                >
                </input-text>
              </div>
              <div class="col app-form q-ml-xs">
                <input-date-time
                  v-model="dateTime"
                  label=""
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
                </input-date-time>
              </div>
              <q-btn
                unelevated
                icon="bi-sliders"
                color="accent"
                class="border-radius-sm q-ml-xs"
              ></q-btn>
              <q-btn
                unelevated
                icon="bi-plus-lg"
                color="secondary"
                class="border-radius-sm q-ml-xs"
              ></q-btn>
            </div>
            <q-list>
              <q-item
                clickable
                class="border-radius-sm text-accent"
                style="border: 1px solid var(--q-app-background)"
              >
                <q-item-section>
                  <q-item-label class="text-accent q-py-sm">
                    <span
                      class="bg-secondary text-white border-radius-xs q-px-sm q-py-xs q-mr-md"
                      >{{ 'Confirmed' }}</span
                    >
                    <span>{{ '2022-05-26  08:00' }}</span>
                  </q-item-label>
                  <q-item-label>
                    <span class="q-mr-md">
                      <q-icon
                        name="bi-person"
                        color="primary"
                        class="q-mr-sm"
                      ></q-icon>
                      {{ 'Florence' }}</span
                    >
                    <span
                      ><q-icon
                        name="bi-file-earmark"
                        color="primary"
                        class="q-mr-sm"
                      ></q-icon>
                      {{ 'Orders: 126' }}</span
                    >
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-red-3 text-bold q-py-sm">
                    {{ 'Choba branch' }}
                  </q-item-label>
                  <q-item-label class="text-green">
                    {{ 'Lagos branch' }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn
                    size="sm"
                    unelevated
                    rounded
                    icon="bi-check2-square"
                    color="secondary"
                    class="border-radius-sm q-py-md"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="q-mb-xs">
              <div
                class="bordered-section-1 border-radius-sm row justify-between"
                style="min-height: 56px"
              >
                <div class="text-h6 text-accent text-center q-ma-sm">
                  <span>{{ 'Details' }}</span>
                </div>
              </div>
            </div>
            <div>
              <!-- Details -->
            </div>
          </q-card>
        </div>
      </div>
    </q-page>
  </page-wrapper>
</template>
