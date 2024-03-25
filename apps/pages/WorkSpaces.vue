<script setup lang="ts">
import AppLogo from '@trace/base/icons/logo.svg';
import WorkspaceIcon from '@trace/base/icons/workspace.svg?url';
import { Workspace } from '@trace/shared';
import { useUserAccountStore } from '@/stores/user-account';

defineOptions({ name: 'QuickStart' });

interface AppOption {
  name: string;
  icon: string;
}
const { signOut } = useUserAccountStore();
const router = useRouter();
const apps: AppOption[] = [
  {
    name: Workspace.Account,
    icon: 'bi-person-gear',
  },
  {
    name: Workspace.Core,
    icon: 'bi-compass',
  },
  {
    name: Workspace.Track,
    icon: 'bi-pin-map',
  },
  {
    name: Workspace.Portal,
    icon: 'bi-signpost-2',
  },
  {
    name: Workspace.Dispatch,
    icon: 'bi-truck',
  },
  {
    name: Workspace.Partner,
    icon: 'bi-coin',
  },
  {
    name: Workspace.Support,
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
          <q-toolbar class="q-py-sm q-px-md">
            <app-logo class="app-logo" />
            <q-toolbar-title class="text-h5 text-primary text-weight-bold">
              {{ 'Trace' }}
            </q-toolbar-title>
          </q-toolbar>
          <div class="q-pa-lg">
            <q-img
              no-native-menu
              no-spinner
              :src="WorkspaceIcon"
              alt="Trace Workspace"
              width="calc(33vw)"
              class="absolute-center"
            />
          </div>
          <div class="q-px-md q-py-sm text-grey">
            {{ 'All right reserved.' }}
            <NuxtLink class="footer-link" to="https://drolx.com">{{
              'drolx Solutions'
            }}</NuxtLink>
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
              >{{ $t('router.faq') }}</q-btn
            >
            <q-btn
              no-caps
              color="primary"
              class="text-body1 border-radius-sm"
              @click="signOut"
              >{{ $t('auth.signOut') }}</q-btn
            >
          </q-toolbar>
          <div class="q-mt-xl q-px-md q-py-lg">
            <div class="text-h3 text-weight-light text-primary q-px-sm q-my-xl">
              {{ $t('router.work-spaces') }}
            </div>
            <div class="row justify-start align-center">
              <q-card
                v-for="app in apps"
                :key="app.name"
                class="app-box text-center cursor-pointer q-pa-md q-ma-md no-wrap border-radius-sm"
                @click="() => router.replace({ name: app.name })"
              >
                <q-icon :name="app.icon" color="secondary" size="4em"></q-icon>
                <div class="text-h6 text-secondary text-weight-regular q-py-sm">
                  {{ $t(`shared.${app.name}`) }}
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
  width: 125px;
  height: 125px;
  text-transform: capitalize;
}
</style>
