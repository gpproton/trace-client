<script setup lang="ts">
import { ref, reactive } from 'vue';
import IdentityForm from '../components/IdentityForm.vue';
import IconGoogle from '@/icons/brands/google.svg?url';
import IconMicrosoft from '@/icons/brands/microsoft.svg?url';
import IconApple from '@/icons/brands/apple.svg?url';

defineOptions({ name: 'SignIn' });

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

const usernameState = ref(null);
const passwordState = reactive({
  value: '',
  show: false,
});
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
        $="usernameState"
        outlined
        no-error-icon
        type="text"
        :label="$t('auth.usernameOrEmail')"
        class="border-radius-sm"
      >
        <template #prepend>
          <q-icon name="bi-person" color="accent" />
        </template>
        <template #append>
          <q-btn icon="bi-arrow-repeat" color="accent" round dense flat />
        </template>
      </q-input>
      <q-input
        $="passwordState.value"
        outlined
        no-error-icon
        :type="passwordState.show ? 'text' : 'password'"
        :label="$t('auth.password')"
        class="border-radius-sm"
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

      <q-btn
        :label="$t('auth.signIn')"
        color="action"
        size="lg"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="() => {}"
      />
    </div>

    <template #footer>
      <div class="row items-center q-py-xs q-px-xs justify-end">
        <router-link
          class="identity-link identity-text"
          :to="{ name: 'auth.sign-in' }"
        >
          {{ $t('auth.forgotPassword') }}
        </router-link>
      </div>
    </template>
  </identity-form>
</template>

<style lang="scss" scoped>
@import './identity.scss';

.social-icons {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
</style>
