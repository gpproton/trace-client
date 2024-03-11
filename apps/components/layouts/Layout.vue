<script setup lang="ts">
import { profileData } from '@trace/shared';
import CoreLayout from '@/components/layouts/CoreLayout.vue';
import SampleNavigation from '@trace/shared/SampleNavigation';
import RouterInject from '@/components/RouterInject.vue';

defineOptions({ name: 'Layout' });

const {
  items,
  overviewItems,
  identityItems,
  quickCreateItems,
  mobileItems,
  mobileOverviewItems,
  notificationTabs,
} = SampleNavigation;
</script>

<template>
  <core-layout name="Trace Sample" :user-profile="profileData" :items="items" :overview-items="overviewItems"
    :identity-items="identityItems" :quick-create-items="quickCreateItems"
    :mobile-items="mobileItems" :mobile-overview-items="mobileOverviewItems" :notification-tabs="notificationTabs">
    <slot>
      <router-inject />
    </slot>
  </core-layout>
</template>
