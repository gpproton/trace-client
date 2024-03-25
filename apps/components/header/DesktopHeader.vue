<script setup lang="ts">
import { ref } from 'vue';
import type { IModuleCommands } from '@trace/shared';
import CommandList from '@/components/extra/CommandList.vue';
import NotificationDialog from '@/components/extra/NotificationDialog.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import TagView from '@/components/header/TagView.vue';
import { useUserAccountStore } from '@/stores/user-account';

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

const triggerSignOut = () => {
  const { signOut } = useUserAccountStore();
  signOut();
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
        <q-avatar
          class="q-ml-sm cursor-pointer"
          size="2.8rem"
          color="secondary"
          text-color="white"
        >
          <q-badge floating color="green" class="badge" rounded />
          <span class="text-white text-weight-medium">{{ 'JD' }}</span>
          <q-menu
            :offset="[-5, 10]"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-list style="min-width: 200px">
              <q-item>
                <q-item-section avatar>
                  <q-avatar size="3rem" color="accent">
                    <q-icon color="white" name="bi-person" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h5 text-weight-medium text-primary">{{
                    'John Doe'
                  }}</span>
                  <span class="text-caption text-weight-light text-secondary">{{
                    'john.doe@trace.ng'
                  }}</span>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-close-popup clickable>
                <q-item-section avatar>
                  <q-icon color="primary" name="bi-gear" />
                </q-item-section>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-item v-close-popup clickable>
                <q-item-section avatar>
                  <q-icon color="primary" name="bi-question-circle" />
                </q-item-section>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
              <q-separator />
              <q-item v-close-popup clickable @click="triggerSignOut">
                <q-item-section avatar>
                  <q-icon color="primary" name="bi-box-arrow-in-right" />
                </q-item-section>
                <q-item-section>Sign Out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
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
