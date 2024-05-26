<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useUserAccountStore } from '@/stores/user-account';

const ProfileWidgetMenu = defineAsyncComponent(
  () => import('./ProfileWidgetMenu.vue'),
);
const ProfileAvatar = defineAsyncComponent(() => import('./ProfileAvatar.vue'));

const userAccountStore = useUserAccountStore();
const { getFullname, getEmail } = storeToRefs(userAccountStore);
</script>

<template>
  <q-item v-ripple clickable>
    <q-item-section avatar>
      <profile-avatar></profile-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ getFullname }}</q-item-label>
      <q-item-label caption lines="1">{{ getEmail }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon name="bi-chevron-down" color="primary" />
    </q-item-section>
    <profile-widget-menu style="min-width: 280px"></profile-widget-menu>
  </q-item>
</template>
