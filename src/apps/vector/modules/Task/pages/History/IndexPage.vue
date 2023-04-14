<script setup lang="ts">
import { ref } from 'vue';
const contextOptions = {
  page: {
    title: 'Task History',
  },
};

const search = ref('');
const dateTime = ref('2022-01-01 00:00');
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm q-pt-md column">
      <div
        class="row q-col-gutter-x-md q-col-gutter-y-lg q-mt-sm"
        style="
          flex: 1 1 auto;
          max-height: 85vh;
          max-height: calc(100vh - 185px);
        "
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
                icon="bi-funnel"
                color="accent"
                class="border-radius-sm q-ml-xs"
              ></q-btn>
            </div>
            <div>Vehicles</div>
          </q-card>
        </div>
        <!-- Column 2 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="row q-mb-sm">
              <div class="col app-form">
                <input-date-time
                  v-model="dateTime"
                  label="Filter"
                  class="border-radius-sm"
                >
                </input-date-time>
              </div>
              <q-btn
                unelevated
                icon="bi-plus-lg"
                color="primary"
                class="border-radius-sm q-ml-sm"
              ></q-btn>
            </div>
            <div>Trips</div>
          </q-card>
        </div>
        <!-- Column 3 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="q-mb-xs">
              <div
                class="bordered-section-1 border-radius-sm row justify-between"
                style="min-height: 56px"
              >
                <div class="text-h6 text-accent text-center q-mx-sm">
                  <span class="vertical-middle">{{ 'Details' }}</span>
                </div>
                <q-btn
                  unelevated
                  color="primary"
                  icon="bi-pencil"
                  class="border-radius-sm"
                >
                </q-btn>
              </div>
            </div>
            <div>Details</div>
          </q-card>
        </div>
      </div>
    </q-page>
  </page-wrapper>
</template>
