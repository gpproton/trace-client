<script setup lang="ts">
import { ref } from 'vue';
import WebsiteAsset from '@/assets/images/maps.svg?url';

defineOptions({ name: 'Home' });

const email = ref('');
const tag = 'The new transport app';
const details = 'A new way of looking at transportation and logistics';
const registerNote = 'Enter your email to start using trace';

</script>

<template>
  <q-page padding>
    <div class="row q-py-lg">
      <q-card square flat class="col q-px-xs q-pt-xl">
        <span
          class="bg-accent text-white text-body2 q-py-sm q-px-md border-radius-sm"
          >{{ tag }}</span
        >
        <div class="text-h3 text-grey-8 text-weight-bolder q-mt-sm q-mb-xl">
          {{ details }}
        </div>
        <div class="q-gutter-y-sm q-px-xs q-pt-xl">
          <div class="text-primary">{{ registerNote }}</div>
          <div class="row q-gutter-x-sm">
            <q-input
              v-model="email"
              class="col"
              filled
              hide-bottom-space
              placeholder="your@email.com"
            />
            <q-btn
              no-caps
              color="primary"
              class="border-radius-sm q-px-lg text-h6"
              :label="$t('router.startNow')"
              :to="{ name: 'on-board' }"
            />
          </div>
        </div>
      </q-card>
      <q-card square flat class="col-7 px-md gt-sm">
        <q-img
          height="48vh"
          :src="WebsiteAsset"
          alt="Website image"
          no-native-menu
          no-spinner
        />
      </q-card>
    </div>
  </q-page>
</template>
