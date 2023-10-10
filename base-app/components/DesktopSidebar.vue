<script setup lang="ts">
import { IModule, IProfile } from '@trace/shared';
import SidebarList from './SidebarList.vue';
import SidebarHeader from './SidebarHeader.vue';
import SidebarUser from './SidebarUser.vue';

interface IProps {
  name: string;
  modelValue?: boolean;
  darkMode: boolean;
  drawerMiniState: boolean;
  showIdentity: boolean;
  userProfile: IProfile;
  overviewMenu: IModule[];
  secondaryMenu: IModule[];
  identityMenu: IModule[];
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'Trace',
  modelValue: true,
  drawerMiniState: true,
  showIdentity: false,
});
const timeout = ref();

const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): boolean;
  (eventName: 'update:darkMode', value: boolean): boolean;
  (eventName: 'update:drawerMiniState', value: boolean): void;
  (eventName: 'update:showIdentity', value: boolean): void;
}>();

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});
const miniDrawer = computed({
  get: () => props.drawerMiniState,
  set: (value) => emits('update:drawerMiniState', value),
});

const isDarkMode = computed({
  get: () => props.darkMode,
  set: (value) => emits('update:darkMode', value),
});

const setMiniDrawer = (value: boolean) => {
  emits('update:drawerMiniState', value);
};
const toggleIdentityMenu = () =>
  emits('update:showIdentity', !props.showIdentity);

watch(miniDrawer, () => {
  timeout.value = setTimeout(() => {
    if (miniDrawer.value) emits('update:showIdentity', false);
  }, 250);
});
onUnmounted(() => clearTimeout(timeout.value));
</script>

<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    bordered
    :width="295"
    :mini-width="64"
    side="left"
    :mini="miniDrawer"
    mini-to-overlay
    @mouseover="setMiniDrawer(false)"
    @mouseout="setMiniDrawer(true)"
  >
    <sidebar-header v-model="miniDrawer" class="q-mt-sm" :name="props.name" />
    <q-scroll-area
      class="fit fixed-bottom"
      style="padding-top: 96px; padding-bottom: 150px"
    >
      <div v-show="!showIdentity">
        <sidebar-list :items="overviewMenu" />
        <q-separator class="q-mx-sm" />
        <sidebar-list :items="secondaryMenu" />
      </div>
      <div v-show="showIdentity">
        <sidebar-list :items="identityMenu" />
      </div>
    </q-scroll-area>

    <!-- Fixed navigation action -->
    <div class="fixed-bottom full-width column items-center q-mb-sm">
      <div
        v-show="!miniDrawer"
        class="full-width q-px-lg q-mb-md column items-center"
      >
        <theme-switcher
          v-show="showIdentity"
          v-model="isDarkMode"
          @update:model-value="
            (modelValue: boolean) => emits('update:darkMode', modelValue)
          "
        />
        <q-btn
          v-show="showIdentity"
          no-caps
          size="lg"
          color="primary"
          text-color="primary-inverted"
          icon="bi-box-arrow-in-right"
          label="Sign Out"
          class="full-width text-weight-thin border-radius-sm q-my-md"
        />
      </div>

      <!-- App user widget for mini and normal state -->
      <sidebar-user
        @click="toggleIdentityMenu"
        v-model:mini="miniDrawer"
        :profile="userProfile"
        :class="miniDrawer ? 'q-mb-sm' : 'full-width q-px-sm q-mb-sm'"
      />
    </div>
  </q-drawer>
</template>
