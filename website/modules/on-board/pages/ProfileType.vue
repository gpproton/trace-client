<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useOnboardStore } from '@trace/base/composables/on-board';

const ListOption = defineAsyncComponent(
  () => import('@trace/base/components/form/ListOption.vue'),
);

defineOptions({ name: 'ProfileType' });

const router = useRouter();
const onboardStore = useOnboardStore();
const message = 'Select if account belongs to an organization or individual';
const profile = ref('Individual');
const profiles = [
  {
    title: 'Individual',
    description: 'Single user profile',
    icon: 'bi-person-badge-fill',
  },
  {
    title: 'Organization',
    description: 'Organiation with multiple users',
    icon: 'business',
  },
];

const proceed = () => {
  onboardStore.addPage();
  router.push({ name: 'on-board.workflow-type' });
};
</script>

<template>
  <div class="row justify-center">
    <q-card square flat class="q-mt-xl q-pa-md onboard-form">
      <div>
        <div class="text-h4">{{ $t('onboard.selectProfile') }}</div>
        <div class="text-grey">{{ message }}</div>
      </div>
      <list-option v-model="profile" :items="profiles" />
      <div class="q-my-xl full-width row justify-between">
        <q-btn
          no-caps
          flat
          size="lg"
          class="border-radius-sm"
          color="primary"
          label="Back"
          @click="() => router.back()"
        />
        <q-btn
          no-caps
          size="lg"
          class="border-radius-sm"
          color="primary"
          label="Continue"
          @click="proceed"
        />
      </div>
    </q-card>
  </div>
</template>
