<script setup lang="ts">
import AppLogo from '@trace/base/icons/logo.svg';
import { ServiceVariant } from '@trace/shared';

defineOptions({ name: 'QuickStart' });

interface AppOption {
  name: string;
  icon: string;
}
const router = useRouter();
const apps: AppOption[] = [
  {
    name: ServiceVariant.Core,
    icon: 'bi-compass',
  },
  {
    name: ServiceVariant.Track,
    icon: 'bi-pin-map',
  },
  {
    name: ServiceVariant.Portal,
    icon: 'bi-signpost-2',
  },
  {
    name: ServiceVariant.Support,
    icon: 'bi-headset',
  },
];
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
          <div class="q-pa-lg"></div>
          <div class="q-px-md q-py-sm text-primary">
            {{ 'All right reserved @Trace' }}
          </div>
        </q-card>
        <q-card square fit class="col window-height">
          <q-toolbar class="q-px-md q-py-sm q-gutter-sm">
            <q-space />
            <q-btn
              flat
              no-caps
              color="primary"
              class="text-body1 border-radius-sm"
              >{{ $t('router.support') }}</q-btn
            >
            <q-btn
              no-caps
              color="primary"
              class="text-body1 border-radius-sm"
              >{{ $t('auth.signOut') }}</q-btn
            >
          </q-toolbar>
          <div class="full-height q-mt-xl q-pa-md">
            <div class="row justify-center align-center">
              <q-card
                v-for="app in apps"
                :key="app.name"
                class="app-box text-center cursor-pointer q-pa-md q-ma-md no-wrap border-radius-sm"
                @click="() => router.push({ name: app.name })"
              >
                <q-icon :name="app.icon" color="secondary" size="4em"></q-icon>
                <div class="text-h6 text-secondary text-weight-bold">
                  {{ app.name }}
                </div>
              </q-card>
            </div>
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.app-box {
  width: 120px;
  height: 120px;
  text-transform: capitalize;
}
</style>
