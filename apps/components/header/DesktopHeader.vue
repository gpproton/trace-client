<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { IModuleCommands } from '@trace/shared';
import { useQuasar } from 'quasar';
import CommandList from '@/components/extra/CommandList.vue';
import NotificationDialog from '@/components/extra/NotificationDialog.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import TagView from '@/components/header/TagView.vue';
import ProfileWidgetMenu from '@/components/extra/ProfileWidgetMenu.vue';
import ProfileAvatar from '@/components/extra/ProfileAvatar.vue';
import DialogSearch from '@/components/extra/DialogSearch.vue';
import { useTagViewStore } from '@/stores/tag-view';
import { useLayoutStore } from '@/stores/layout';

defineProps<{
  quickCommands: IModuleCommands[];
}>();

const $q = useQuasar();
const bellIconFill = ref(false);
const dialog = ref();
const { modelValue, search, showSecondarySidebarToogle } = defineModels<{
  showSecondarySidebarToogle: boolean;
  modelValue: ModelOptions<boolean, { defaultValue: false; deep: true }>;
  search: ModelOptions<string, { defaultValue: ''; deep: true }>;
}>();

const layoutStore = useLayoutStore();
const tagViewStore = useTagViewStore();
const { getShowHeaderToolbar } = storeToRefs(layoutStore);
const { tagViewEnabled } = storeToRefs(tagViewStore);

const triggerSearchDialog = () => {
  dialog.value = $q
    .dialog({
      component: DialogSearch,
      componentProps: {
        persistent: false,
      },
    })
    .onDismiss(() => {
      console.log('dismissed dialog');
    });
};
</script>

<template>
  <q-header
    reveal
    :elevated="false"
    class="bg-transparent"
    height-hint="64"
    bordered
    style="
      margin-left: 64px;
      box-shadow: rgba(0, 0, 0, 0) 0px 2px 12px 0px;
      padding-bottom: 2px;
    "
  >
    <template v-if="getShowHeaderToolbar">
      <q-toolbar class="row justify-between q-mt-xs">
        <div v-show="showSecondarySidebarToogle" class="q-pr-md">
          <q-btn
            dense
            flat
            square
            :icon="modelValue ? 'menu_open' : 'menu'"
            aria-label="Menu"
            color="primary"
            size="lg"
            @click="() => (modelValue = !modelValue)"
          />
        </div>
        <breadcrumbs
          v-if="$q.screen.gt.sm"
          class="text-weight-bold"
          :show-icon="false"
        />
        <q-space />
        <q-field
          v-model="search"
          dense
          outlined
          stack-label
          style="min-width: 250px"
          class="cursor-pointer"
          @focus="triggerSearchDialog"
        >
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
          <q-btn
            flat
            square
            color="primary"
            class="border-radius-sm q-px-md"
            @mouseover="bellIconFill = true"
            @mouseout="bellIconFill = false"
          >
            <q-icon
              color="primary"
              size="md"
              class="button-icon"
              :name="bellIconFill ? 'bi-bell-fill' : 'bi-bell'"
            >
              <q-badge floating color="red-7" class="badge" rounded />
            </q-icon>
            <q-menu
              :offset="[-5, 10]"
              transition-show="scale"
              transition-hide="scale"
              class="border-radius-sm q-pa-none"
            >
              <notification-dialog />
            </q-menu>
          </q-btn>
          <!-- Quick new items triggers-->
          <q-btn
            square
            size="0.95rem"
            icon="bi-plus-lg"
            color="primary"
            text-color="primary-inverted"
            class="border-radius-sm"
          >
            <q-menu
              :offset="[-5, 10]"
              transition-show="scale"
              transition-hide="scale"
              class="border-radius-sm q-pa-sm"
            >
              <command-list :items="quickCommands" />
            </q-menu>
          </q-btn>
          <profile-avatar class="q-ml-sm">
            <profile-widget-menu style="min-width: 200px"></profile-widget-menu>
          </profile-avatar>
        </div>
      </q-toolbar>
      <q-separator />
    </template>
    <tag-view v-if="tagViewEnabled" />
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
