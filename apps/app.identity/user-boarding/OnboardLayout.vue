<script setup lang="ts">
import AppLogo from '@trace/base/icons/logo.svg';
import LangSelector from '@trace/base/components/LangSelector.vue';
import { onboardRoutes } from './routes';
import { useOnboardStore } from '@trace/base/composables/on-board';

defineOptions({ name: 'OnboardLayout' });

const onboardStore = useOnboardStore();
const { getColor, getIcon } = onboardStore;
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <div class="row fit" style="max-height: 100vh">
        <q-card
          square
          fit
          class="gt-sm col-5 bg-app-background window-height column justify-between"
        >
          <q-toolbar class="q-pa-md">
            <app-logo
              style="height: 38px; width: 38px; fill: var(--q-primary)"
              class="border-radius-sm text-primary"
            />
            <q-toolbar-title class="text-h5 text-primary text-weight-bold">
              {{ 'Trace' }}
            </q-toolbar-title>
          </q-toolbar>
          <div class="q-px-xl">
            <q-timeline color="grey-5" layout="dense" class="q-px-none">
              <q-timeline-entry
                v-for="(item, index) in onboardRoutes"
                :key="index"
                :color="getColor(item.name)"
                :icon="getIcon(item.name)"
              >
                <template #title>
                  <div class="text-h5">
                    {{ item.meta?.title }}
                  </div>
                </template>
                <template #subtitle> </template>
                <div>
                  {{ item.meta?.description }}
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
          <div class="q-pa-md text-primary">
            {{ 'All right reserved @Trace' }}
          </div>
        </q-card>
        <q-card square fit class="col window-height">
          <q-toolbar class="q-px-md">
            <q-space />
            <lang-selector />
          </q-toolbar>
          <div class="q-pa-sm">
            <router-view />
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>
