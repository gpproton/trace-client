<script setup lang="ts">
defineOptions({ name: 'CreatePassword' });

const password = reactive({
  newPassword: '',
  confirmedPassword: '',
});
</script>

<template>
  <div class="row justify-center">
    <q-card square flat class="q-mt-sm q-pa-md onboard-form">
      <div class="q-mb-xl q-py-sm">
        <div class="text-h4">{{ 'Create Password' }}</div>
      </div>
      <q-form class="q-gutter-y-md">
        <q-input
          v-model="password.newPassword"
          class="col"
          type="password"
          filled
          label="New password"
        />

        <q-input
          v-model="password.confirmedPassword"
          class="col"
          type="password"
          filled
          label="Confirm password"
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
