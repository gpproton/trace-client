<script setup lang="ts">
defineOptions({ name: 'OrganizationInformation' });
</script>

<template>
    <div class="row justify-center">
        <q-card square flat class="q-mt-xl q-pa-md onboard-form">
            <div>
                <div class="text-h4">{{ 'Bussiness registration' }}</div>
                <div class="text-grey">{{ 'message' }}</div>
            </div>
            <q-form class="q-gutter-md">
                <q-input filled v-model="name" label="Company name" />
                <q-input filled v-model="name" label="Website" />
                <q-toggle label="I accept the license and terms" />
                <div class="q-mt-xl full-width row justify-between">
                    <q-btn no-caps flat size="lg" class="border-radius-sm" color="primary" label="Back" />
                    <q-btn no-caps size="lg" class="border-radius-sm" color="primary" label="Continue" />
                </div>
            </q-form>

        </q-card>
    </div>
</template>
