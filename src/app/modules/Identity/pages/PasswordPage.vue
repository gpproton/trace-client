<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '../components/IdentityForm.vue';

const router = useRouter();
const contextOptions = {
  page: {
    title: 'Password Reset',
  },
};

const usernameState = ref(null);
const selectOtpOption = () => {
  router.push({
    name: 'app.identity.password-otp',
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
      <template #title>Forgot Password?</template>
      <template #sub-title
        ><div>
          Don't worry it happens!. please enter then
          <span class="text-body2">Email or Username</span> associated with your
          account.
        </div>
      </template>

      <q-input
        v-model="usernameState"
        standout
        no-error-icon
        type="text"
        label="Username or Email"
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
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';
</style>
