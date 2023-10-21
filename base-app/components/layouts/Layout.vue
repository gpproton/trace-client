<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { profileData } from '@trace/shared';
import { useKeepAliveStore } from "@/stores/keep-alive";
import { useAppStore } from "@/stores/app";
import CoreLayout from '@/components/layouts/CoreLayout.vue';
import SampleNavigation from '@trace/shared/SampleNavigation';

defineOptions({ name: 'Layout' });
const appStore = useAppStore();
const keepAliveStore = useKeepAliveStore();
const { reloadFlag } = storeToRefs(appStore);
const { getKeepAliveList } = storeToRefs(keepAliveStore);

const {
  items,
  overviewItems,
  identityItems,
  serviceItems,
  quickCreateItems,
  mobileItems,
  mobileOverviewItems,
  notificationTabs,
} = SampleNavigation;
</script>

<template>
  <core-layout name="Trace Sample" :user-profile="profileData" :items="items" :overview-items="overviewItems"
    :identity-items="identityItems" :service-items="serviceItems" :quick-create-items="quickCreateItems"
    :mobile-items="mobileItems" :mobile-overview-items="mobileOverviewItems" :notification-tabs="notificationTabs">
    <slot>
      <router-view v-if="reloadFlag" v-slot="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <keep-alive :max="10" :include="getKeepAliveList">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </slot>
  </core-layout>
</template>
