<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import type { IModuleCommands } from '@trace/shared';
import { useTagViewStore } from '@/stores/tag-view';
import { useLayoutStore } from '@/stores/layout';

const CommandList = defineAsyncComponent(() => import('@/components/extra/CommandList.vue'));
const NotificationDialog = defineAsyncComponent(() => import('@/components/extra/NotificationDialog.vue'));
const Breadcrumbs = defineAsyncComponent(() => import('./Breadcrumbs.vue'));
const TagView = defineAsyncComponent(() => import('@/components/header/TagView.vue'));
const ProfileWidgetMenu = defineAsyncComponent(() => import('@/components/extra/ProfileWidgetMenu.vue'));
const ProfileAvatar = defineAsyncComponent(() => import('@/components/extra/ProfileAvatar.vue'));
const DialogSearch = defineAsyncComponent(() => import('@/components/extra/DialogSearch.vue'));

defineOptions({ name: 'DesktopHeader' });
defineProps<{
  quickCommands: IModuleCommands[];
}>();

const $q = useQuasar();
const { modelValue, search, showSecondarySidebarToogle } = defineModels<{
  showSecondarySidebarToogle: boolean;
  modelValue: ModelOptions<boolean, { defaultValue: false; deep: true }>;
  search: ModelOptions<string, { defaultValue: ''; deep: true }>;
}>();

const bellIconFill = ref(false);
const layoutStore = useLayoutStore();
const tagViewStore = useTagViewStore();
const { getShowHeaderToolbar } = storeToRefs(layoutStore);
const { tagViewEnabled } = storeToRefs(tagViewStore);

const triggerSearchDialog = () => {
  $q.dialog({
    component: DialogSearch,
    componentProps: {
      persistent: false,
    },
  });
};
</script>

<template>
  <q-header reveal :elevated="false" class="bg-transparent" height-hint="64" bordered style="
      margin-left: 64px;
      box-shadow: rgba(0, 0, 0, 0) 0px 2px 12px 0px;
      padding-bottom: 2px;
    ">
    <template v-if="getShowHeaderToolbar">
      <q-toolbar class="row justify-between q-mt-xs">
        <div v-show="showSecondarySidebarToogle" class="q-pr-md">
          <q-btn dense flat square :icon="modelValue ? 'menu_open' : 'menu'" aria-label="Menu" color="primary" size="lg"
            @click="() => (modelValue = !modelValue)" />
        </div>
        <breadcrumbs v-if="$q.screen.gt.sm" class="text-weight-bold" :show-icon="false" />
        <q-space />
        <slot></slot>
        <q-field v-model="search" dense outlined stack-label style="min-width: 250px" class="cursor-pointer"
          @focus="triggerSearchDialog">
          <template #prepend>
            <q-avatar>
              <q-icon color="grey" size="md" name="search" />
            </q-avatar>
          </template>
          <template #label>
            <div class="text-grey text-body2">
              {{ $t('shared.search') }}
            </div>
          </template>
          <template #control>
            <div class="self-center full-width no-outline" tabindex="0">
              {{ search }}
            </div>
          </template>
          <template #append>
            <div class="row items-center q-gutter-xs">
              <q-icon size="1.25rem" name="bi-command" />
              <span class="text-weight-regular text-subtitle1">K</span>
            </div>
          </template>
        </q-field>
        <div class="header-icon-button q-gutter-xs vertical-middle">
          <!-- Notification actions -->
          <q-btn flat square color="primary" class="border-radius-sm q-px-md" @mouseover="bellIconFill = true"
            @mouseout="bellIconFill = false">
            <q-icon color="primary" size="md" class="button-icon" :name="bellIconFill ? 'bi-bell-fill' : 'bi-bell'">
              <q-badge floating color="red-7" class="badge" rounded />
            </q-icon>
            <q-menu :offset="[-5, 10]" transition-show="scale" transition-hide="scale"
              class="border-radius-sm q-pa-none">
              <notification-dialog />
            </q-menu>
          </q-btn>
          <!-- Quick new items triggers-->
          <q-btn square size="0.95rem" icon="bi-plus-lg" color="primary" text-color="primary-inverted"
            class="border-radius-sm">
            <q-menu :offset="[-5, 10]" transition-show="scale" transition-hide="scale" class="border-radius-sm q-pa-sm">
              <command-list :items="quickCommands" />
            </q-menu>
          </q-btn>
          <profile-avatar class="q-ml-sm">
            <profile-widget-menu style="min-width: 200px"></profile-widget-menu>
          </profile-avatar>
        </div>
      </q-toolbar>
      <q-separator v-show="tagViewEnabled" />
    </template>
    <tag-view v-show="tagViewEnabled" />
  </q-header>
</template>

<style lang="scss" scoped>
.header-icon-button {
  .button-icon {
    font-size: 1.9rem;
  }

  .badge {
    font-size: unset;
    top: -0.2rem;
    width: 0.2rem;
    height: 0.09rem;
  }
}
</style>
