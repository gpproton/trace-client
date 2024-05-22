<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useServerStore, socialLogins } from '@/stores/app-server';

const serverStore = useServerStore();
const { getServerState, getRegistrationChoice } = storeToRefs(serverStore);

const registrationEmail = ref();
</script>

<template>
  <div class="row justify-center">
    <q-card square flat class="q-mt-lg q-pa-md q-pa-xs-xs onboard-form">
      <div class="full-width">
        <div class="text-h4 text-grey-7">{{ $t('shared.gettingStarted') }}</div>
        <div class="text-grey q-px-sm q-px-xs-xs q-my-md">
          {{
            `${$t('onboard.selectOptionProceed')} ${$t('onboard.ignoreIfUnaware')}`
          }}
        </div>
      </div>
      <div class="q-mt-xl">
        <div class="row justify-center full-width q-mt-lg">
          <q-form class="q-gutter-y-md full-width">
            <template v-if="getRegistrationChoice">
              <q-input
                v-model="registrationEmail"
                filled
                :label="$t('shared.email')"
              />
              <q-btn
                no-caps
                stretch
                size="lg"
                :to="{ name: 'user-boarding.create-account' }"
                class="border-radius-sm full-width"
                color="primary"
                :label="$t('shared.continue')"
              />
            </template>
            <q-btn
              v-else
              no-caps
              stretch
              size="lg"
              :to="{ name: 'user-boarding.create-account' }"
              outline
              color="primary"
              class="border-radius-sm full-width"
            >
              <q-icon
                name="bi-envelope-at"
                size="2rem"
                class="q-mr-lg"
                color="primary"
              />
              <span class="text-body1">{{
                `${$t('onboard.continueWith')} joo***@tra***.ng`
              }}</span>
            </q-btn>
          </q-form>
        </div>
        <div class="q-my-lg row justify-between items-center">
          <div class="col-5">
            <q-separator class="col-5" color="app-background" />
          </div>
          <div class="text-center text-medium text-uppercase">
            {{ $t('shared.or') }}
          </div>
          <div class="col-5"><q-separator color="app-background" /></div>
        </div>

        <div class="row q-gutter-x-sm q-gutter-xs-x-xs justify-center no-wrap">
          <q-btn
            v-for="(social, index) in socialLogins"
            :key="index"
            :outline="true"
            size="sm"
            color="accent"
            :no-caps="true"
            :no-wrap="true"
            :disabled="!getServerState.auth[social.title]"
            class="border-radius-xs q-py-md q-px-lg q-px-xs-md border-radius-sm text-capitalize"
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
      </div>
    </q-card>
  </div>
</template>

<style scoped lang="scss">
@import '@/app.account/shared/styles/identity.scss';
</style>
