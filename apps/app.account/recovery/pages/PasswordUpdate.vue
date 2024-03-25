<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '@/app.account/shared/components/IdentityForm.vue';

defineOptions({ name: 'PasswordUpdate' });

const router = useRouter();
const passwordState = reactive({
  value: '',
  confirmValue: '',
  show: false,
  showConfirm: false,
});

const updatePassword = () => {
  router.push({
    name: 'auth.sign-in',
  });
};
</script>

<template>
  <identity-form>
    <template #title>Update Password</template>
    <q-input
      v-model="passwordState.value"
      standout
      no-error-icon
      :type="passwordState.show ? 'text' : 'password'"
      label="New Password"
      class="border-radius-sm q-my-lg"
      @keyup.enter="updatePassword"
    >
      <template #prepend>
        <q-icon name="bi-lock" color="accent" />
      </template>
      <template #append>
        <q-btn
          :icon="passwordState.show ? 'bi-eye-fill' : 'bi-eye'"
          color="accent"
          round
          dense
          flat
          @click="passwordState.show = !passwordState.show"
        />
      </template>
    </q-input>

    <q-input
      v-model="passwordState.confirmValue"
      standout
      no-error-icon
      :type="passwordState.showConfirm ? 'text' : 'password'"
      label="Confirm New Password"
      class="border-radius-sm q-my-lg"
      @keyup.enter="updatePassword"
    >
      <template #prepend>
        <q-icon name="bi-lock" color="accent" />
      </template>
      <template #append>
        <q-btn
          :icon="passwordState.showConfirm ? 'bi-eye-fill' : 'bi-eye'"
          color="accent"
          round
          dense
          flat
          @click="passwordState.showConfirm = !passwordState.showConfirm"
        />
      </template>
    </q-input>

    <div class="q-my-md">
      <q-btn
        label="Submit"
        color="action"
        size="lg"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="updatePassword"
      />
    </div>
  </identity-form>
</template>

<style lang="scss" scoped>
@import '@/app.account/shared/styles/identity.scss';
</style>
