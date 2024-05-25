<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const IdentityForm = defineAsyncComponent(() => import('@/app.account/shared/components/IdentityForm.vue'));

defineOptions({ name: 'VerifyOtp' });

const router = useRouter();
const otpInput = ref<any>([]);
const otpInputValue = ref(['', '', '', '']);
// const otpValues = computed(() => otpInputValue.value.join(''));

const verifyToken = () => {
  router.push({
    name: 'account-recovery.password-update',
  });
};

const handleKey = (index: number) => {
  const element: Array<HTMLDivElement> = otpInput.value;
  const value = otpInputValue.value;
  if (typeof Number(value[index]) !== 'number') return;
  if (value[index].length > 1) value[index] = value[index].slice(0, 1);
  if (value[index] !== '')
    element[index + 1] !== undefined ? element[index + 1].focus() : null;
  else if (value[index] === '')
    index - 1 > -1 ? element[index - 1].focus() : null;
};
</script>

<template>
  <identity-form>
    <template #title>{{ $t('auth.verifyOtp') }}</template>
    <template #sub-title>
      <div class="text-body2 text-left q-mt-sm q-mr-md">
        {{ $t('auth.recoveryOtpSent') }}
        <span class="text-overline">+234XXX123XXXX</span>
      </div>
    </template>
    <div class="full-width q-my-lg row justify-center no-wrap">
      <q-input
        v-for="(verifyItem, verifyIndex) in 4"
        :ref="
          (el: any) => {
            otpInput[verifyIndex] = el;
          }
        "
        :key="verifyIndex"
        v-model="otpInputValue[verifyIndex]"
        dense
        maxlength="1"
        :rules="[(val) => val.length <= 1]"
        type="text"
        standout
        no-error-icon
        class="border-radius-sm q-mx-sm verify-input"
        @keyup="handleKey(verifyIndex)"
        @keyup.enter="verifyToken"
      />
    </div>

    <q-separator class="q-mb-lg q-mx-lg" />

    <div class="q-my-md">
      <q-btn
        label="Verify"
        color="action"
        size="lg"
        no-caps
        class="full-width border-radius-sm text-weight-medium"
        @click="verifyToken"
      />
    </div>

    <template #footer>
      <div class="full-width row items-center justify-center q-pa-xs q-px-md">
        <div>
          <span class="q-mx-sm">{{ $t('auth.dintRecieveCode') }}</span>
          <router-link
            class="identity-link identity-text text-weight-regular"
            :to="{ name: 'auth.sign-in' }"
            >{{ $t('auth.resendOtp') }}</router-link
          >
        </div>
      </div>
    </template>
  </identity-form>
</template>

<style lang="scss" scoped>
@import '@/app.account/shared/styles/identity.scss';

.verify-input {
  width: 64px;
  height: 64px;
  text-align: center !important;
}

@media screen and (max-width: $breakpoint-sm-min) {
  .verify-input {
    width: 52px;
    height: 52px;
  }
}
</style>
