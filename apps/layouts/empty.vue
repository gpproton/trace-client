<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const GenericHeader = defineAsyncComponent(
  () => import('@/app/GenericHeader.vue'),
);
const GenericFooter = defineAsyncComponent(
  () => import('@/app/GenericFooter.vue'),
);
const SupportLinks = defineAsyncComponent(
  () => import('@/app.account/SupportLinks.vue'),
);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header :elevated="false" class="bg-transparent" height-hint="64">
      <generic-header>
        <support-links class="q-mr-xl gt-sm"></support-links>
      </generic-header>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-secondary row justify-center">
      <generic-footer class="text-white"></generic-footer>
    </q-footer>
  </q-layout>
</template>
