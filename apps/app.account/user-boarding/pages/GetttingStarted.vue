<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useServerStore, socialLogins } from '@/stores/app-server';

const serverStore = useServerStore();
const { getServerState, getRegistrationChoice } = storeToRefs(serverStore);

const registrationEmail = ref();
</script>

<template>
  <div class="row justify-center">
    <q-card square flat class="q-mt-lg q-pa-md onboard-form">
      <div style="max-width: 80%">
        <div class="text-h3 text-grey-7">{{ $t('shared.gettingStarted') }}</div>
        <div class="text-grey q-px-sm q-my-md">
          {{
            `${$t('onboard.selectOptionProceed')} ${$t('onboard.ignoreIfUnaware')}`
          }}
        </div>
      </div>
      <div class="q-mt-xl">
        <div class="row justify-center full-width q-mt-lg">
          <q-form class="q-gutter-y-md" style="min-width: 420px">
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

        <div class="row q-gutter-x-sm justify-center no-wrap">
          <q-btn
            v-for="(social, index) in socialLogins"
            :key="index"
            :outline="true"
            size="sm"
            color="accent"
            :no-caps="true"
            :no-wrap="true"
            :disabled="!getServerState.auth[social.title]"
            class="border-radius-xs q-py-md q-px-lg border-radius-sm text-capitalize"
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
