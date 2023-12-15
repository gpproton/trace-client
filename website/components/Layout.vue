<script setup lang="ts">
import AppLogo from '@trace/base/icons/logo.svg';

defineOptions({ name: 'Layout' });

const links = [
    {
        name: 'home',
        label: 'router.home',
    },
    {
        name: 'pricing',
        label: 'router.pricing',
    },
    {
        name: 'solutions',
        label: 'router.solutions',
    },
    {
        name: 'contact',
        label: 'router.contact',
    }
]
</script>

<template>
    <q-layout view="hHh lpR fff">
        <q-header class="bg-white text-white q-pa-md">
            <q-toolbar>
                <app-logo style="height: 42px; fill: var(--q-primary)" class="border-radius-sm text-primary" />
                <q-toolbar-title class="text-h5 text-primary text-weight-bold">
                    {{ 'Trace' }}
                </q-toolbar-title>
                <q-space />
                <q-tabs no-caps shrink stretch content-class="text-primary q-mr-lg">
                    <q-route-tab exact v-for="(link, index) in links" :key="index" :to="{ name: link.name }"
                        :name="link.name" class="text-body1 border-radius-sm">{{ $t(link.label) }}</q-route-tab>
                </q-tabs>
                <q-btn unelevated no-caps size="lg" :to="{ name: 'getting-started' }" class="border-radius-sm gt-sm"
                    color="primary">{{ $t('router.getStarted') }}</q-btn>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <slot>
                <router-view />
            </slot>
        </q-page-container>
        <q-footer class="bg-secondary text-white q-pa-md">
            <div>{{ 'All right reserved @Trace' }}</div>
        </q-footer>
    </q-layout>
</template>
