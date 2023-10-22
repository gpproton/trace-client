<script setup lang="ts">
import { profileData } from '@trace/shared';
import CoreLayout from '@/components/layouts/CoreLayout.vue';
import SampleNavigation from '@trace/shared/SampleNavigation';
import RouterInject from '../RouterInject.vue';

defineOptions({ name: 'Layout' });

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
      <router-inject />
    </slot>
  </core-layout>
</template>
