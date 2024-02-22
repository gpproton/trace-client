<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'OrganizationInformation' });

const licenseToggle = ref(false);
const organizationName =ref('');
const organizationWebsite = ref('');
</script>

<template>
    <div class="row justify-center">
        <q-card square flat class="q-mt-xl q-pa-md onboard-form">
            <div>
                <div class="text-h4">{{ 'Bussiness registration' }}</div>
                <div class="text-grey">{{ 'message' }}</div>
            </div>
            <q-form class="q-gutter-md">
                <q-input filled v-model="organizationName" label="Organization name" />
                <q-input filled v-model="organizationWebsite" label="Website" />
                <q-toggle $="licenseToggle" label="I accept the license and terms" />
                <div class="q-mt-xl full-width row justify-between">
                    <q-btn no-caps flat size="lg" class="border-radius-sm" color="primary" label="Back" />
                    <q-btn no-caps size="lg" class="border-radius-sm" color="primary" label="Continue" />
                </div>
            </q-form>

        </q-card>
    </div>
</template>
