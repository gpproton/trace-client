<script setup lang="ts">
import { ref } from 'vue';

const contextOptions = {
  page: {
    title: 'Trips Billing',
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
            </div>
            <q-list>
              <q-item
                clickable
                class="border-radius-sm text-accent"
                style="border: 1px solid var(--q-app-background)"
              >
                <q-item-section>
                  <q-item-label class="text-accent q-py-xs" caption>
                    <span>{{ '2022-05-26 08:00 - 2022-05-27 12:54' }}</span>
                    <span
                      class="q-mx-md bg-green text-white border-radius-xs q-px-sm q-py-xs"
                      >{{ 'Completed' }}</span
                    >
                    <span class="float-right">
                      <span class="text-bold">
                        <q-icon
                          size="1.1em"
                          name="bi-building"
                          color="secondary"
                          class="q-mr-xs"
                        />
                        <span>{{ 'Nestle Nigeria' }}</span>
                      </span>
                      <span class="q-ml-md">
                        <q-icon
                          size="1.3em"
                          name="bi-truck"
                          color="secondary"
                          class="q-mr-xs"
                        />
                        <span>{{ 'AAA 767 XH' }}</span>
                      </span>
                    </span>
                  </q-item-label>
                  <q-item-label
                    class="q-pl-xs bg-app-container border-radius-sm q-mb-sm row"
                  >
                    <div
                      class="col column text-accent text-caption q-gutter-y-xs q-my-xs"
                    >
                      <span>
                        <q-icon
                          size="1.2em"
                          name="bi-geo"
                          color="green"
                          class="q-mr-xs"
                        />
                        <span>{{ 'Ikorodu Road, Ojota, Lagos, NG' }}</span>
                      </span>
                      <span>
                        <q-icon
                          size="1.2em"
                          name="bi-geo"
                          color="red"
                          class="q-mr-xs"
                        />
                        <span>{{ 'Ibadan, Ogun, NG' }}</span>
                      </span>
                    </div>
                    <q-btn
                      size="sm"
                      unelevated
                      rounded
                      icon="bi-plus-lg"
                      color="secondary"
                      class="border-radius-sm q-my-sm q-py-xs q-mr-sm"
                    />
                  </q-item-label>
                  <q-item-label>
                    <span class="text-bold">{{ '#LMN-03039303930' }}</span>
                    <span class="q-mx-sm">{{ 'Freights: 0' }}</span>
                    <span class="q-mx-sm">{{ 'Documents: 0' }}</span>
                    <span class="q-mx-sm">{{ 'Shortages: 0' }}</span>
                  </q-item-label>
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
                  <span>{{ 'Freights' }}</span>
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
