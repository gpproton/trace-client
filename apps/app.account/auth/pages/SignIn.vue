<script setup lang="ts">
import { reactive } from 'vue';
import { useUserAccountStore } from '@/stores/user-account';
import IdentityForm from '@/app.account/shared/components/IdentityForm.vue';
import IconGoogle from '@trace/base/icons/brands/google.svg?url';
import IconMicrosoft from '@trace/base/icons/brands/microsoft.svg?url';
import IconApple from '@trace/base/icons/brands/apple.svg?url';

defineOptions({ name: 'SignIn' });
const userAccount = useUserAccountStore();
const socialLogins = [
  {
    icon: IconGoogle,
    title: 'Google',
  },
  {
    icon: IconMicrosoft,
    title: 'Microsoft',
  },
  {
    icon: IconApple,
    title: 'Apple',
  },
];

const authState = reactive({
  username: '',
  password: '',
  show: false,
});

const triggerAuth = () => {
  const { signIn } = userAccount;
  signIn(authState);
};
</script>

<template>
  <identity-form>
    <template #title>
      <div class="text-left">
        {{ $t('auth.signInTitle') }}
      </div>
    </template>
    <template #sub-title>
      <div class="text-left">
        {{ $t('auth.signInSubTitle') }}
      </div>
    </template>

    <div class="q-mt-xl q-mb-lg">
      <div class="row q-gutter-x-sm justify-center no-wrap">
        <q-btn
          v-for="(social, index) in socialLogins"
          :key="index"
          outline
          size="md"
          color="secondary"
          no-caps
          no-wrap
          class="border-radius-xs q-py-sm"
        >
          <q-img
            no-native-menu
            no-spinner
            :src="social.icon"
            :alt="social.title"
            class="social-icons"
          />
          <span class="text-body1">{{ social.title }}</span>
        </q-btn>
      </div>
      <q-separator color="app-background" class="q-mt-md" />
    </div>

    <div class="q-gutter-y-md q-my-md">
      <q-input
        v-model="authState.username"
        outlined
        no-error-icon
        type="text"
        :label="$t('auth.usernameOrEmail')"
        class="border-radius-sm"
        @key.enter="triggerAuth"
      >
        <template #prepend>
          <q-icon name="bi-person" color="accent" />
        </template>
        <template #append>
          <q-btn icon="bi-arrow-repeat" color="accent" round dense flat />
        </template>
      </q-input>
      <q-input
        v-model="authState.password"
        outlined
        no-error-icon
        :type="authState.show ? 'text' : 'password'"
        :label="$t('auth.password')"
        class="border-radius-sm"
        @key.enter="triggerAuth"
      >
        <template #prepend>
          <q-icon name="bi-lock" color="accent" />
        </template>
        <template #append>
          <q-btn
            :icon="authState.show ? 'bi-eye-fill' : 'bi-eye'"
            color="accent"
            round
            dense
            flat
            @click="authState.show = !authState.show"
          />
        </template>
      </q-input>

      <q-btn
        :label="$t('auth.signIn')"
        color="action"
        size="lg"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="triggerAuth"
      />
    </div>

    <template #footer>
      <div class="row items-center q-py-xs q-px-xs justify-end">
        <router-link
          class="identity-link identity-text"
          :to="{ name: 'account-recovery.forgot-password' }"
        >
          {{ $t('auth.forgotPassword') }}
        </router-link>
      </div>
    </template>
  </identity-form>
</template>

<style lang="scss" scoped>
@import '@/app.account/shared/styles/identity.scss';
</style>
