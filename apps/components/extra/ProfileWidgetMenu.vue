<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserAccountStore } from '@/stores/user-account';
import { useUserAuthStore } from '@/stores/user-auth';

const userAuth = useUserAuthStore();
const userAccoutStore = useUserAccountStore();
const { signOut } = userAuth;
const { getFullname, getEmail } = storeToRefs(userAccoutStore);
</script>

<template>
  <q-menu :offset="[-5, 10]" transition-show="scale" transition-hide="scale">
    <q-list v-bind="$attrs">
      <q-item class="cursor-pointer" :to="{ name: 'account-profile' }">
        <q-item-section avatar>
          <q-avatar size="3rem" color="accent">
            <q-icon color="white" name="bi-person" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <span class="text-h5 text-weight-medium text-primary">{{
            getFullname
          }}</span>
          <span class="text-caption text-weight-light text-secondary">{{
            getEmail
          }}</span>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item v-close-popup :to="{ name: 'account-settings' }" clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-gear" />
        </q-item-section>
        <q-item-section>Settings</q-item-section>
      </q-item>
      <q-item v-close-popup to="/help" clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-question-circle" />
        </q-item-section>
        <q-item-section>Help & Feedback</q-item-section>
      </q-item>
      <q-separator />
      <q-item v-close-popup clickable @click="signOut">
        <q-item-section avatar>
          <q-icon color="primary" name="bi-box-arrow-in-right" />
        </q-item-section>
        <q-item-section>{{ $t('auth.signOut') }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
