<script setup lang="ts">
import { ref, reactive } from 'vue';
import IdentityForm from '../components/IdentityForm.vue';

defineOptions({ name: 'LoginPage' });

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
        {{ 'Welcome Back!' }}
      </div>
    </template>
    <template #sub-title>
      <div class="text-left">
        {{ 'Sign in to continue' }}
      </div>
    </template>

    <div class="q-mt-xl q-mb-lg">
      <div class="full-width row q-gutter-x-sm justify-center">
        <q-btn
          outline
          size="md"
          icon="bi-google"
          label="Google"
          color="secondary"
          no-caps
          class="border-radius-xs"
        />
        <q-btn
          outline
          size="md"
          icon="bi-microsoft"
          label="Microsoft"
          color="secondary"
          no-caps
          class="border-radius-xs"
        />
        <q-btn
          outline
          size="md"
          icon="bi-apple"
          label="Apple"
          color="secondary"
          no-caps
          class="border-radius-xs"
        />
      </div>
      <q-separator color="app-background" class="q-mt-md" />
    </div>

    <div class="q-gutter-y-md q-my-md">
      <q-input
        v-model="usernameState"
        outlined
        no-error-icon
        type="text"
        :label="'Username or Email'"
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
        v-model="passwordState.value"
        outlined
        no-error-icon
        :type="passwordState.show ? 'text' : 'password'"
        label="Password"
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
        :label="'Sign In'"
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
          {{ 'Forgot password?' }}
        </router-link>
      </div>
    </template>
  </identity-form>
</template>

<style lang="scss" scoped>
@import './identity.scss';
</style>
