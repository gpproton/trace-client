<script setup lang="ts">
import { reactive, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useServerStore, socialLogins } from '@/stores/app-server';
import { useUserAuthStore } from '@/stores/user-auth';

const IdentityForm = defineAsyncComponent(
  () => import('@/app.account/shared/components/IdentityForm.vue'),
);

defineOptions({ name: 'SignIn' });

const userAccount = useUserAuthStore();
const serverStore = useServerStore();
const { getServerState, getRegistrationChoice } = storeToRefs(serverStore);
const { getLoading, timeout } = storeToRefs(userAccount);
const loginForminactive = computed(
  () => !getServerState.value.auth?.email || getLoading.value,
);

const authState = reactive({
  username: '',
  password: '',
  remember: false,
  show: false,
});

const triggerAuth = () => {
  const { signIn } = userAccount;
  signIn(authState);
};

const resetForm = () => {
  authState.username = '';
  authState.password = '';
};

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <identity-form>
    <template #title>
      <div class="text-left text-weight-bold">
        {{
          getRegistrationChoice ? $t('shared.welcome') : $t('auth.welcomeBack')
        }}
      </div>
    </template>
    <template #sub-title>
      <div class="text-left">
        <div v-if="getRegistrationChoice" class="q-gutter-x-sm">
          <span>{{ $t('auth.newHere') }}</span>
          <nuxt-link
            class="text-primary"
            style="text-decoration: none"
            :to="{ name: 'user-boarding.getting-started' }"
            >{{ $t('auth.createAccount') }}</nuxt-link
          >
        </div>
        <div v-else>{{ $t('auth.continueSignin') }}</div>
      </div>
    </template>

    <div class="q-mt-xl q-mb-lg">
      <div class="row q-gutter-x-sm justify-center no-wrap">
        <q-btn
          v-for="(social, index) in socialLogins"
          :key="index"
          :outline="true"
          size="md"
          color="accent"
          :no-caps="true"
          :no-wrap="true"
          :disabled="!getServerState.auth[social.title]"
          class="border-radius-xs q-py-sm text-capitalize"
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
        :disable="loginForminactive"
        no-error-icon
        type="text"
        :label="$t('auth.usernameOrEmail')"
        class="border-radius-sm"
        @keyup.enter="triggerAuth"
      >
        <template #prepend>
          <q-icon name="bi-person" color="accent" />
        </template>
        <template #append>
          <q-btn
            icon="bi-arrow-repeat"
            color="accent"
            round
            dense
            flat
            @click="resetForm"
          />
        </template>
      </q-input>
      <q-input
        v-model="authState.password"
        :disable="loginForminactive"
        outlined
        no-error-icon
        :type="authState.show ? 'text' : 'password'"
        :label="$t('auth.password')"
        class="border-radius-sm"
        @keyup.enter="triggerAuth"
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

      <div class="row items-center q-py-xs justify-between">
        <q-checkbox
          v-model="authState.remember"
          dense
          :disable="loginForminactive"
          label="Remember"
        />
        <router-link
          class="identity-link identity-text"
          :to="{ name: 'account-recovery.forgot-password' }"
        >
          {{ $t('auth.forgotPassword') }}
        </router-link>
      </div>
    </div>

    <template #footer>
      <q-btn
        :label="$t('auth.signIn')"
        color="action"
        size="lg"
        :loading="getLoading"
        :disable="loginForminactive"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="triggerAuth"
      />
    </template>
  </identity-form>
</template>

<style lang="scss" scoped>
@import '@/app.account/shared/styles/identity.scss';
</style>
