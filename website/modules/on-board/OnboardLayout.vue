<script setup lang="ts">
import AppLogo from '@trace/base-app/icons/logo.svg';
import LangSelector from '@trace/base-app/components/extra/LangSelector.vue';

defineOptions({ name: 'WelcomeLayout' });
</script>

<template>
    <q-layout view="hHh LpR fff">
        <q-page-container>
            <div class="row fit" style="max-height: 100vh">
                <q-card square fit class="gt-sm col-5 bg-app-background window-height column justify-between">
                    <q-toolbar class="q-pa-md">
                        <app-logo style="height: 38px; width: 38px; fill: var(--q-primary)"
                            class="border-radius-sm text-primary" />
                        <q-toolbar-title class="text-h5 text-primary text-weight-bold">
                            {{ 'Trace' }}
                        </q-toolbar-title>
                    </q-toolbar>

                </q-card>
                <q-card square fit class="col window-height">
                    <q-toolbar class="q-px-md">
                        <lang-selector />
                        <q-space />
                        <q-btn flat no-caps color="primary" class="text-body1 border-radius-sm">Support</q-btn>
                    </q-toolbar>
                    <div class="q-pa-sm">
                        <slot>
                            <router-view />
                        </slot>
                    </div>
                </q-card>
            </div>
        </q-page-container>
    </q-layout>
</template>
