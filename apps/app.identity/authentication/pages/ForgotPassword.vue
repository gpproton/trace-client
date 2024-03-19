<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '../components/IdentityForm.vue';

defineOptions({ name: 'ForgotPassword' });

const router = useRouter();
const usernameState = ref(null);
const selectOtpOption = () => {
  router.push({
    name: 'auth.otp-choice',
  });
};
</script>

<template>
  <identity-form>
    <template #title>{{ $t('auth.forgotPassword') }}</template>
    <template #sub-title>
      <div>
        <div>{{ "Don't worry it happens!. please enter the" }}</div>
        <div>
          <span class="text-body2">{{ $t('auth.usernameOrEmail') }}</span>
          {{ 'associated with your account.' }}
        </div>
      </div>
    </template>

    <q-input
      v-model="usernameState"
      standout
      no-error-icon
      type="text"
      :label="$t('auth.usernameOrEmail')"
      class="border-radius-sm q-my-xl"
    >
      <template #append>
        <q-icon name="bi-person" color="accent" />
      </template>
    </q-input>

    <div class="q-my-md">
      <q-btn
        label="Next"
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
@import './identity.scss';
</style>
