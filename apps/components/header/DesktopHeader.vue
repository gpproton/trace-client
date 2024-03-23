<script setup lang="ts">
import { ref } from 'vue';
import type { IModuleCommands } from '@trace/shared';
import CommandList from '@/components/extra/CommandList.vue';
import NotificationDialog from '@/components/extra/NotificationDialog.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import TagView from '@/components/header/TagView.vue';

interface IProps {
  quickCommands: IModuleCommands[];
}

defineProps<IProps>();
const bellIconFill = ref(false);
const { modelValue, search, showSecondarySidebarToogle } = defineModels<{
  showSecondarySidebarToogle: boolean;
  modelValue: ModelOptions<boolean, { defaultValue: false; deep: true }>;
  search: ModelOptions<string, { defaultValue: ''; deep: true }>;
}>();
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
      <q-input
        v-model="search"
        dense
        filled
        label="Search items"
        class="q-mx-sm border-radius-sm"
      >
        <template #prepend>
          <q-avatar>
            <q-icon size="sm" name="bi-search" />
          </q-avatar>
        </template>
        <template #append>
          <div class="row items-center q-gutter-xs">
            <q-icon size="1.25rem" name="bi-command" />
            <span class="text-weight-regular text-subtitle1">K</span>
          </div>
        </template>
      </q-input>
      <div class="header-icon-button q-gutter-xs vertical-middle">
        <!-- Top level app switcher -->
        <q-btn
          flat
          square
          color="primary"
          :to="{ name: 'work-spaces' }"
          class="border-radius-sm q-px-sm"
        >
          <q-icon
            color="primary"
            class="button-icon"
            name="bi-ui-checks-grid"
          />
        </q-btn>
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
          size="1.1rem"
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
      </div>
    </q-toolbar>
    <q-separator />
    <tag-view />
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
