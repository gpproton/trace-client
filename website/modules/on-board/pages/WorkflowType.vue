<script setup lang="ts">
import { useOnboardStore } from '@trace/base/composables/on-board';
import ListOption from '@trace/base/components/form/ListOption.vue';

defineOptions({ name: 'WorkflowType' });

const router = useRouter();
const onboardStore = useOnboardStore();
const message = 'Select which option fit your business or industry';
const workflow = ref('Individual');
const workflows = [
  {
    title: 'Telematics',
    description: 'Provides access to GPS tracking',
    icon: 'bi-compass'
  },
  {
    title: 'Courier',
    description: 'Organize sending goods to customers',
    icon: 'bi-box'
  },
  {
    title: 'Logistics',
    description: 'Maximize logistics processes end to end',
    icon: 'bi-truck'
  },
  {
    title: 'Passenger',
    description: 'Allow organizing and processing passengers',
    icon: 'bi-bus-front'
  },
];

const proceed = () => {
  onboardStore.addPage()
  router.push({ name: 'on-board.organization-information' });
}
</script>

<template>
  <div class="row justify-center">
    <q-card square flat class="q-mt-sm q-pa-md onboard-form">
      <div>
        <div class="text-h3">{{ $t('onboard.selectWorkflow') }}</div>
        <div class="text-grey">{{ message }}</div>
      </div>
      <list-option :items="workflows" v-model="workflow" />
      <div class="q-my-lg full-width row justify-between">
        <q-btn no-caps flat size="lg" @click="() => router.back()" class="border-radius-sm" color="primary"
          label="Back" />
        <q-btn no-caps size="lg" @click="proceed" class="border-radius-sm" color="primary" label="Continue" />
      </div>
    </q-card>
  </div>
</template>
