<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '../components/IdentityForm.vue';

const router = useRouter();
const contextOptions = {
  page: {
    title: 'Update Password',
  },
};

const passwordState = reactive({
  value: '',
  confirmValue: '',
  show: false,
  showConfirm: false,
});

const updatePassword = () => {
  router.push({
    name: 'app.identity.sign-in',
  });
};
</script>

<script lang="ts">
export default {
  name: 'PasswordPage',
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <identity-form>
      <template #title>Update Password</template>

      <q-input
        standout
        v-model="passwordState.value"
        no-error-icon
        :type="passwordState.show ? 'text' : 'password'"
        label="New Password"
        class="border-radius-sm q-my-lg"
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

      <q-input
        standout
        v-model="passwordState.confirmValue"
        no-error-icon
        :type="passwordState.showConfirm ? 'text' : 'password'"
        label="Confirm New Password"
        class="border-radius-sm q-my-lg"
      >
        <template #prepend>
          <q-icon name="bi-lock" color="accent" />
        </template>
        <template #append>
          <q-btn
            :icon="passwordState.showConfirm ? 'bi-eye-fill' : 'bi-eye'"
            color="accent"
            @click="passwordState.showConfirm = !passwordState.showConfirm"
            round
            dense
            flat
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
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';
</style>
