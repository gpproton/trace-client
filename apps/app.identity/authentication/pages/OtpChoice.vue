<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '../components/IdentityForm.vue';

defineOptions({ name: 'OtpChoice' });

const router = useRouter();
const selectedOption = ref(0);
const resetOptions = ref([
  {
    type: 'email',
    title: 'auth.passwordResetEmail',
    caption:
      'Password reset OTP will be sent to your registered email address.',
    icon: 'bi-envelope',
  },
  {
    type: 'sms',
    title: 'auth.passwordResetSms',
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
    name: 'auth.verify-otp',
  });
};
</script>

<template>
  <identity-form>
    <template #title>{{ $t('auth.forgotPassword') }}</template>
    <template #sub-title
      >Please select option to send OTP for password reset</template
    >
    <q-list
      v-for="(resetOption, resetIndex) in resetOptions"
      :key="resetIndex"
      class="q-my-md"
    >
      <q-item
        class="text-left identity-list-item q-px-sm q-py-md"
        clickable
        @click="setOption(resetIndex)"
      >
        <q-item-section top avatar>
          <q-avatar
            color="primary"
            text-color="white"
            :icon="resetOption.icon"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-weight-medium text-primary">
            {{ $t(resetOption.title) }}
          </q-item-label>
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
        :label="$t('auth.sendOtp')"
        color="action"
        size="lg"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="verifyOtp"
      />
    </div>
  </identity-form>
</template>

<style lang="scss" scoped>
@import './identity.scss';

.identity-list-item {
  border-radius: $border-radius-sm;
  border: 1px solid var(--q-primary);
}
</style>
