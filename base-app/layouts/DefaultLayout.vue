<script setup lang="ts">
import CoreLayout from '@/components/CoreLayout.vue';
import { profileData } from '@trace/shared';
import SampleNavigation from '@trace/shared/SampleNavigation';

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
  <core-layout
    name="Trace Sample"
    :user-profile="profileData"
    :items="items"
    :overview-items="overviewItems"
    :identity-items="identityItems"
    :service-items="serviceItems"
    :quick-create-items="quickCreateItems"
    :mobile-items="mobileItems"
    :mobile-overview-items="mobileOverviewItems"
    :notification-tabs="notificationTabs"
  >
    <slot>
      <router-view />
    </slot>
  </core-layout>
</template>
