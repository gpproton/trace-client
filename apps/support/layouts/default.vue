<script setup lang="ts">
import CoreLayout from '@trace/base-app/components/CoreLayout.vue';
import { profileData } from '@trace/shared';
import Navigation from '../Navigation';

const {
  items,
  overviewItems,
  identityItems,
  serviceItems,
  quickCreateItems,
  mobileItems,
  mobileOverviewItems,
  notificationTabs,
} = Navigation;
</script>

<template>
  <core-layout
    name="Trace Support"
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
    <template #desktop-secondary-sidebar>
      <div></div>
    </template>
    <slot />
  </core-layout>
</template>
