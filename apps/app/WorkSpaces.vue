<script setup lang="ts">
import WorkspaceIcon from '@trace/base/assets/banner/workspace.svg?url';
import { Workspace } from '@trace/shared';
import AppLogo from '@trace/base/assets/icons/logo.svg';

const GenericHeader = defineAsyncComponent(
  () => import('@/app/GenericHeader.vue'),
);
const GenericFooter = defineAsyncComponent(
  () => import('@/app/GenericFooter.vue'),
);
const ProfileWidgetMenu = defineAsyncComponent(
  () => import('@/components/extra/ProfileWidgetMenu.vue'),
);
const ProfileAvatar = defineAsyncComponent(
  () => import('@/components/extra/ProfileAvatar.vue'),
);

defineOptions({ name: 'WorkSpaces' });

interface AppOption {
  name: string;
  icon: string;
}
const router = useRouter();
const apps = ref<AppOption[]>([
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
]);

const links = ref<Array<{ name: string; label: string }>>([
  {
    name: 'docs',
    label: 'router.docs',
  },
  {
    name: 'contact',
    label: 'shared.contact',
  },
  {
    name: 'faqs',
    label: 'shared.faqs',
  },
]);
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
          <generic-header></generic-header>
          <div class="q-pa-lg">
            <q-img
              no-native-menu
              no-spinner
              lazy
              :src="WorkspaceIcon"
              alt="Trace Workspace"
              width="calc(33vw)"
              class="absolute-center"
            />
          </div>
          <generic-footer></generic-footer>
        </q-card>
        <q-card square fit class="col window-height no-shadow">
          <q-toolbar class="q-px-md q-py-sm q-gutter-sm">
            <app-logo class="app-logo lt-md" />
            <q-space />
            <q-tabs
              no-caps
              dense
              shrink
              stretch
              content-class="text-primary q-mr-sm gt-sm"
            >
              <q-route-tab
                v-for="(link, index) in links"
                :key="index"
                :to="`/${link.name}`"
                :name="link.name"
                class="text-body1 border-radius-sm"
                >{{ $t(link.label) }}</q-route-tab
              >
            </q-tabs>
            <profile-avatar class="q-ml-sm">
              <profile-widget-menu
                style="min-width: 200px"
              ></profile-widget-menu>
            </profile-avatar>
          </q-toolbar>
          <div class="q-mt-xl q-px-md q-py-lg row justify-start items-center">
            <div class="text-h3 text-weight-light text-primary q-px-sm q-my-xl">
              {{ $t('router.work-spaces') }}
            </div>
            <div class="fit row justify-start items-center">
              <q-card
                v-for="app in apps"
                :key="app.name"
                class="app-box text-center cursor-pointer q-pa-md q-ma-md no-wrap border-radius-sm"
                @click="() => router.replace(`/${app.name}`)"
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
  width: 120px;
  height: 120px;
  text-transform: capitalize;
}
</style>
