<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';

const IdentityForm = defineAsyncComponent(() => import('@/app.account/shared/components/IdentityForm.vue'));

defineOptions({ name: 'OtpChoice' });

const router = useRouter();
const selectedOption = ref(0);
const resetOptions = ref([
  {
    type: 'email',
    title: 'auth.passwordResetEmail',
    caption:
      'auth.recoveryOptionEmail',
    icon: 'bi-envelope',
  },
  {
    type: 'sms',
    title: 'auth.passwordResetSms',
    caption:
      'auth.recoverySmsOption',
    icon: 'bi-telephone',
  },
]);

const setOption = (index: number) => {
  selectedOption.value = index;
};
const verifyOtp = () => {
  router.push({
    name: 'account-recovery.verify-otp',
  });
};
</script>

<template>
  <identity-form>
    <template #title>{{ $t('auth.forgotPassword') }}</template>
    <template #sub-title>
      <div class="text-body2 text-left q-mt-sm q-mr-md">
        {{ $t('auth.recoveryActionNote') }}
      </div>
    </template>
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
          <q-item-label class="text-caption text-accent">
            {{ $t(resetOption.caption) }}
          </q-item-label>
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
@import '@/app.account/shared/styles/identity.scss';

.identity-list-item {
  border-radius: $border-radius-sm;
  border: 1px solid var(--q-primary);
}
</style>
