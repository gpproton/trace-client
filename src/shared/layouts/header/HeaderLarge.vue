<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { usePageStore } from '@/layouts/stores';
import { layoutState } from '@/layouts/composables/Layout';
import SwitcherButton from '@/layouts/navigation/SwitcherButton.vue';
import CommandList from '../navigation/CommandList.vue';
import NotificationList from './NotificationList.vue';
import { IModuleCommands } from '@/libs/IModule';

interface IProps {
  quickCommands: Array<IModuleCommands>;
}

const props = defineProps<IProps>();
const { title, showHeader, showTitle } = storeToRefs(usePageStore());
const { moduleItems } = toRefs(layoutState);
const bellIconFill = ref(false);
</script>

<script lang="ts">
export default {
  name: 'HeaderLarge',
};
</script>

<template>
  <q-header v-show="showHeader" reveal :elevated="false" class="bg-transparent">
    <q-toolbar class="row q-mt-xs">
      <div
        class="text-primary text-h5 text-weight-bold text-no-wrap overflow-hidden ellipsis q-pl-md col-2"
      >
        {{ showTitle ? title : '' }}
      </div>
      <q-toolbar-title class="q-px-sm col-7">
        <div class="row items-center">
          <switcher-button
            class="gt-sm"
            v-show="moduleItems.length > 0"
            :items="moduleItems"
            dense
            route
          ></switcher-button>
          &nbsp;
        </div>
      </q-toolbar-title>

      <div class="header-icon-button col-3 row justify-end items-center">
        <q-icon
          @mouseover="bellIconFill = true"
          @mouseout="bellIconFill = false"
          color="primary"
          class="cursor-pointer button-icon"
          :name="bellIconFill ? 'bi-bell-fill' : 'bi-bell'"
        >
          <q-badge floating color="red-7" class="badge" rounded />
          <q-menu
            :offset="[0, 20]"
            transition-show="scale"
            transition-hide="scale"
            self="top middle"
            class="border-radius-sm q-pa-none"
          >
            <notification-list></notification-list>
          </q-menu>
        </q-icon>
        <!-- Quick new items triggers-->
        <!-- <q-icon
          color="primary"
          name="bi-plus"
          size="lg"
          class="cursor-pointer lt-lg q-mx-lg"
        >
          <q-menu
            :offset="[-5, 10]"
            transition-show="scale"
            transition-hide="scale"
            class="border-radius-sm q-pa-sm"
          >
            <command-list :items="props.quickCommands" />
          </q-menu>
        </q-icon> -->
        <q-btn
          no-caps
          size="lg"
          color="primary"
          text-color="primary-inverted"
          icon="bi-plus"
          label="Add New"
          class="gt-md text-weight-medium border-radius-sm q-mx-lg"
        >
          <q-menu
            :offset="[-5, 10]"
            transition-show="scale"
            transition-hide="scale"
            class="border-radius-sm q-pa-sm"
          >
            <command-list :items="props.quickCommands" />
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
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
