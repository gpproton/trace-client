<script setup lang="ts">
defineOptions({ name: 'CreateAccount' });

const information = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  extra: '',
  acceptterms: false,
});
</script>

<template>
  <div class="row justify-center">
    <q-card square flat class="q-mt-sm q-pa-md onboard-form">
      <div class="q-mb-xl q-py-sm">
        <div class="text-h4">{{ 'Complete onboarding' }}</div>
        <div class="text-grey">{{ 'Process message information...' }}</div>
      </div>
      <q-form class="q-gutter-y-md">
        <div class="row q-gutter-x-md">
          <q-input
            v-model="information.firstName"
            class="col"
            filled
            label="Firstname"
          />
          <q-input
            v-model="information.lastName"
            class="col"
            filled
            label="Lastname"
          />
        </div>
        <q-input v-model="information.phone" filled label="Phone" />
        <q-input v-model="information.extra" filled label="Extra" />
        <q-toggle
          v-model="information.acceptterms"
          label="I accept the license and terms"
        />
        <div class="q-mt-xl full-width row justify-between">
          <q-btn
            no-caps
            flat
            size="lg"
            class="border-radius-sm"
            color="primary"
            label="Cancel"
          />
          <q-btn
            no-caps
            size="lg"
            class="border-radius-sm"
            color="primary"
            label="Continue"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>
