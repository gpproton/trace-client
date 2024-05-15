<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '@/app.account/shared/components/IdentityForm.vue';

defineOptions({ name: 'ForgotPassword' });

const router = useRouter();
const usernameState = ref(null);
const selectOtpOption = () => {
  router.push({
    name: 'account-recovery.otp-choice',
  });
};
</script>

<template>
  <identity-form class="q-my-md">
    <template #title>{{ $t('auth.forgotPassword') }}</template>
    <template #sub-title>
      <div class="text-body2 text-left q-mt-sm q-mr-md">
        {{ $t('auth.recoveryNote') }}
      </div>
    </template>

    <q-input
      v-model="usernameState"
      standout
      no-error-icon
      type="text"
      :label="$t('auth.usernameOrEmail')"
      class="border-radius-sm q-my-xl"
      @keyup.enter="selectOtpOption"
    >
      <template #append>
        <q-icon name="bi-person" color="accent" />
      </template>
    </q-input>

    <div class="q-my-md">
      <q-btn
        label="Proceed"
        color="action"
        size="lg"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="selectOtpOption"
      />
    </div>
  </identity-form>
</template>

<style lang="scss" scoped>
@import '@/app.account/shared/styles/identity.scss';
</style>
