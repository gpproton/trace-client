<script setup lang="ts">
import { IModuleCommands } from '@/libs/IModule';
import { ref, toRefs, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePageStore } from '@/layouts/stores';
import { useLayoutStore } from '@/layouts/stores';
import { layoutState } from '@/layouts/composables/Layout';
import BottomSheetList from '../navigation/BottomSheetList.vue';
import BottomSheet from '../navigation/BottomSheet.vue';
import CommandList from '../navigation/CommandList.vue';

interface IProps {
  quickCommands: Array<IModuleCommands>;
  moduleList: Array<string>;
}

const props = defineProps<IProps>();
const layoutStore = useLayoutStore();
const { toggleDrawer } = layoutStore;
const { moduleDialogState } = storeToRefs(layoutStore);
const { title, showHeader, showTitle, withMobile } = storeToRefs(
  usePageStore()
);
const { moduleItems, moduleSubItems } = toRefs(layoutState);

const route = useRoute();
const router = useRouter();

const swipeModalState = ref<boolean>(false);
const subDialogState = ref<boolean>(false);
const titleVisibility = computed(() => {
  return showTitle.value || !withMobile.value;
});

const headerVisibility = computed(() => {
  return showHeader.value || !withMobile.value;
});

const isFocusModule = computed(() => {
  return props.moduleList.includes(String(route.name));
});
</script>

<script lang="ts">
export default {
  name: 'HeaderMobile',
};
</script>

<template>
  <q-header
    v-show="headerVisibility"
    reveal
    :elevated="false"
    class="bg-transparent app-header"
  >
    <q-toolbar class="bg-transparent q-mt-xs q-px-none">
      <q-btn
        dense
        flat
        round
        size="lg"
        icon="bi-filter-left"
        color="primary"
        @click="toggleDrawer"
      />
      <q-btn
        v-show="false"
        dense
        flat
        round
        size="lg"
        icon="bi-chevron-left"
        color="primary"
        @click="router.back()"
      />

      <q-toolbar-title
        class="text-primary text-h5 text-weight-bold text-center"
        >{{ titleVisibility ? title : '' }}</q-toolbar-title
      >
      <q-btn
        dense
        flat
        round
        size="lg"
        icon="bi-plus-lg"
        color="primary"
        @click="swipeModalState = !swipeModalState"
      />
      <q-btn
        v-show="moduleItems.length > 0"
        dense
        flat
        round
        :size="isFocusModule ? 'md' : 'lg'"
        :icon="
          isFocusModule ? 'bi-three-dots-vertical' : 'bi-grid-3x2-gap-fill'
        "
        color="primary"
        @click="moduleDialogState = !moduleDialogState"
      />
    </q-toolbar>
    <bottom-sheet v-model:visible="swipeModalState" :threshold="150">
      <command-list
        @update:visible="swipeModalState = false"
        :items="props.quickCommands"
      />
    </bottom-sheet>
    <q-dialog class="shadow-0" v-model="moduleDialogState">
      <div class="full-width shadow-0 q-pt-xl">
        <q-card class="full-width q-pt-lg q-pb-xs border-radius-sm">
          <bottom-sheet-list v-show="!subDialogState" :items="moduleItems" />
          <bottom-sheet-list v-show="subDialogState" :items="moduleSubItems" />
          <q-btn
            fab
            color="action"
            icon="bi-three-dots-vertical"
            class="absolute"
            @click="subDialogState = !subDialogState"
            style="top: 0; right: 5%; transform: translateY(-50%)"
          />
        </q-card>
      </div>
    </q-dialog>
  </q-header>
</template>

<style lang="scss" scoped>
.app-header {
  padding-top: constant(safe-area-inset-top); // for iOS 11.0
  padding-top: env(safe-area-inset-top); // for iOS 11.2 +
}
.app-nav-icon {
  border-radius: $border-radius-md;
}
</style>
