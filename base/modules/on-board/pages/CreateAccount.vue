<script setup lang="ts">
defineOptions({ name: 'CreateAccount' });
</script>

<template>
    <div class="row justify-center">
        <q-card square flat class="q-mt-xl q-pa-md onboard-form">
            <div class="q-mb-md">
                <div class="text-h4">{{ 'Complete invitation' }}</div>
                <div class="text-grey">{{ 'message' }}</div>
            </div>
            <q-form class="q-gutter-y-md">
                <div class="row q-gutter-x-sm">
                    <q-input filled v-model="name" label="Firstname" />
                    <q-input filled v-model="name" label="Lastname" />
                </div>
                <q-input filled v-model="name" label="Phone" />
                <q-input filled v-model="name" label="Extra" />
                <q-toggle label="I accept the license and terms" />
                <div class="q-mt-xl full-width row justify-between">
                    <q-btn no-caps flat size="lg" class="border-radius-sm" color="primary" label="Cancel" />
                    <q-btn no-caps size="lg" class="border-radius-sm" color="primary" label="Continue" />
                </div>
            </q-form>
        </q-card>
    </div>
</template>
