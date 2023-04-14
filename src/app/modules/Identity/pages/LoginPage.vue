<script setup lang="ts">
import { ref, reactive } from 'vue';
import IdentityForm from '../components/IdentityForm.vue';

const contextOptions = {
  page: {
    title: 'Sign In',
  },
};
const usernameState = ref(null);
const passwordState = reactive({
  value: '',
  active: false,
  show: false,
});

const next = () => {
  passwordState.active = true;
};

const signIn = () => {
  // TODO: sign in
};
</script>

<script lang="ts">
export default {
  name: 'LoginPage',
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <identity-form>
      <template #title>
        <div class="text-left">Sign In</div>
      </template>

      <div class="full-width">
        <q-input
          v-if="!passwordState.active"
          v-model="usernameState"
          standout
          no-error-icon
          type="text"
          label="Username or Email"
          class="border-radius-sm q-my-xl"
        >
          <template #prepend>
            <q-icon name="bi-person" color="accent" />
          </template>
          <template #append>
            <q-btn icon="bi-arrow-repeat" color="accent" round dense flat />
          </template>
        </q-input>
        <q-input
          standout
          v-if="passwordState.active"
          v-model="passwordState.value"
          no-error-icon
          :type="passwordState.show ? 'text' : 'password'"
          label="Password"
          class="border-radius-sm q-my-xl"
        >
          <template #prepend>
            <q-icon name="bi-lock" color="accent" />
          </template>
          <template #append>
            <q-btn
              :icon="passwordState.show ? 'bi-eye-fill' : 'bi-eye'"
              color="accent"
              @click="passwordState.show = !passwordState.show"
              round
              dense
              flat
            />
          </template>
        </q-input>
      </div>

      <div class="q-my-md">
        <q-btn
          :label="passwordState.active ? 'Sign In' : 'Next'"
          color="action"
          size="lg"
          no-caps
          @click="passwordState.active ? signIn() : next()"
          class="full-width border-radius-sm text-weight-medium"
        />

        <div v-show="!passwordState.active">
          <q-separator color="app-background" class="q-my-lg" />

          <q-btn
            label="Sign in with Google"
            icon="bi-google"
            color="app-background-more"
            text-color="accent"
            size="lg"
            outline
            no-caps
            class="full-width border-radius-sm text-weight-regular"
          />
        </div>
      </div>

      <template #footer>
        <div
          class="full-width row items-center q-py-xs q-px-xs justify-between"
        >
          <div
            v-show="passwordState.active"
            @click="passwordState.active = false"
            class="identity-link identity-text"
          >
            <q-icon name="bi-chevron-left" color="action" size="1.2em" />
            <span class="q-ml-xs">Back</span>
          </div>
          <div v-show="!passwordState.active">&nbsp;</div>
          <router-link
            class="identity-link identity-text"
            :to="{ name: 'app.identity.password-reset' }"
            >Forgot password?</router-link
          >
        </div>
      </template>
    </identity-form>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';
</style>
