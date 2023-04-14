<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '../components/IdentityForm.vue';

const router = useRouter();
const contextOptions = {
  page: {
    title: 'Password OTP',
  },
};

const selectedOption = ref(0);
const resetOptions = ref([
  {
    type: 'email',
    title: 'Reset via email',
    caption:
      'Password reset OTP will be sent to your registered email address.',
    icon: 'bi-envelope',
  },
  {
    type: 'sms',
    title: 'Reset via SMS',
    caption:
      'Password reset OTP will be sent to your registered mobile number.',
    icon: 'bi-telephone',
  },
]);

const setOption = (index: number) => {
  selectedOption.value = index;
};
const verifyOtp = () => {
  router.push({
    name: 'app.identity.verify-otp',
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
        >Please select option to send <span class="text-body2">OTP</span> to
        reset password</template
      >

      <q-list
        v-for="(resetOption, resetIndex) in resetOptions"
        :key="resetIndex"
        class="q-my-md"
      >
        <q-item
          @click="setOption(resetIndex)"
          class="text-left identity-list-item q-px-sm q-py-md"
          clickable
        >
          <q-item-section top avatar>
            <q-avatar
              color="primary"
              text-color="white"
              :icon="resetOption.icon"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6 text-weight-medium text-primary">{{
              resetOption.title
            }}</q-item-label>
            <q-item-label class="text-caption text-accent">{{
              resetOption.caption
            }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <div class="text-primary q-pt-sm">
              <q-icon
                v-show="resetIndex === selectedOption"
                size="sm"
                name="bi-check-circle"
              />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <!-- List selection -->
      <div class="q-mt-lg q-mb-md">
        <q-btn
          label="Send OTP"
          color="action"
          size="lg"
          no-caps
          class="full-width border-radius-sm text-weight-medium"
          @click="verifyOtp"
        />
      </div>
    </identity-form>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';

.identity-list-item {
  border-radius: $border-radius-sm;
  border: 1px solid var(--q-primary);
}
</style>
