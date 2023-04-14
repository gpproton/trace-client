<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IdentityForm from '../components/IdentityForm.vue';

const contextOptions = {
  page: {
    title: 'Verify OTP',
  },
};
const router = useRouter();
const otpInput = ref([]);
const otpInputValue = ref(['', '', '', '']);
// const otpValues = computed(() => otpInputValue.value.join(''));

const verifyToken = () => {
  router.push({
    name: 'app.identity.password-update',
  });
};

const handleKey = (index: number) => {
  let element: Array<HTMLDivElement> = otpInput.value;
  let value = otpInputValue.value;
  if (typeof Number(value[index]) !== 'number') return;
  if (value[index].length > 1) value[index] = value[index].slice(0, 1);
  if (value[index] !== '')
    element[index + 1] !== undefined ? element[index + 1].focus() : null;
  else if (value[index] === '')
    index - 1 > -1 ? element[index - 1].focus() : null;
};
</script>

<script lang="ts">
export default {
  name: 'VerifyPage',
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <identity-form>
      <template #title>Enter OTP</template>
      <template #sub-title
        >A 4 digit OTP has been sent to
        <span class="text-overline">+234XXX123XXXX</span>
      </template>

      <div class="full-width q-my-lg row justify-center">
        <q-input
          v-for="(verifyItem, verifyIndex) in 4"
          :ref="
              (el: any) => {
                otpInput[verifyIndex] = el;
              }
            "
          maxlength="1"
          v-model="otpInputValue[verifyIndex]"
          :key="verifyIndex"
          :rules="[(val) => val.length <= 1]"
          type="text"
          standout
          no-error-icon
          class="border-radius-sm q-mx-sm verify-input"
          @keyup="handleKey(verifyIndex)"
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
            <span class="q-mx-sm">Didn't recieve a code?</span>
            <router-link
              class="identity-link identity-text text-weight-regular"
              :to="{ name: 'app.identity.sign-in' }"
              >Resend</router-link
            >
          </div>
        </div>
      </template>
    </identity-form>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';

.verify-input {
  width: 64px;
  height: 64px;
  text-align: center !important;
}
</style>
