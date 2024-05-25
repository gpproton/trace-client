<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { onboardRoutes } from './module-routes';
import { useOnboardStore } from '@trace/base/composables/on-board';

const LangSelector = defineAsyncComponent(() => import('@trace/base/components/LangSelector.vue'));
const BoardingFooter = defineAsyncComponent(() => import('@/app.account/BoardingFooter.vue'));
const GenericHeader = defineAsyncComponent(() => import('@/app/GenericHeader.vue'));
const SupportLinks = defineAsyncComponent(() => import('@/app.account/SupportLinks.vue'));

defineOptions({ name: 'OnboardLayout' });

const onboardStore = useOnboardStore();
const { getColor, getIcon } = onboardStore;
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <div class="row fit" style="max-height: 100dvh">
        <q-card
          square
          fit
          class="gt-sm col-5 bg-app-background window-height column justify-between"
        >
          <generic-header :language="false"></generic-header>
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
          <div class="q-pa-md"></div>
        </q-card>
        <q-card square fit class="col window-height">
          <q-layout>
            <q-header class="bg-transparent">
              <q-toolbar class="q-px-md gt-sm">
                <lang-selector />
                <q-space />
                <support-links></support-links>
              </q-toolbar>
              <generic-header class="lt-md"></generic-header>
            </q-header>

            <q-page-container class="q-pa-sm">
              <router-view />
            </q-page-container>
            <q-footer class="bg-transparent">
              <boarding-footer></boarding-footer>
            </q-footer>
          </q-layout>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>
