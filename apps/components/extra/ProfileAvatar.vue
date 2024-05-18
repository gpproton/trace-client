<script setup lang="ts">
import { useUserAccountStore } from '@/stores/user-account';

const userAccountStore = useUserAccountStore();
const { getProfileInitials } = storeToRefs(userAccountStore);
</script>

<template>
  <q-avatar
    class="cursor-pointer"
    size="2.8rem"
    color="secondary"
    text-color="white"
  >
    <q-badge floating color="green" class="badge" rounded />
    <span class="text-white text-weight-medium">{{ getProfileInitials }}</span>
    <slot></slot>
  </q-avatar>
</template>
