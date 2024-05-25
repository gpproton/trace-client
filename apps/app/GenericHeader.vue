<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import AppLogo from '@trace/base/assets/icons/logo.svg';
import { storeToRefs } from 'pinia';
import { useServerStore } from '@/stores/app-server';

const LangSelector = defineAsyncComponent(() => import('@trace/base/components/LangSelector.vue'));

withDefaults(
  defineProps<{
    language?: boolean;
    white?: boolean;
  }>(),
  {
    language: true,
    white: false,
  },
);

const serverStore = useServerStore();
const { getTenantName } = storeToRefs(serverStore);
</script>

<template>
  <q-toolbar class="q-py-sm q-px-md">
    <slot name="start"></slot>
    <div class="row justify-start q-gutter-x-sm items-center">
      <slot name="title">
        <q-toolbar-title>
          <nuxt-link
            class="row items-center q-gutter-x-sm"
            style="text-decoration: none"
            to="/"
          >
            <app-logo :class="white ? 'white-logo' : 'app-logo'" />
            <span
              class="text-h5 text-weight-bolder"
              :class="white ? 'text-white' : 'text-primary'"
              >{{ getTenantName }}</span
            >
          </nuxt-link>
        </q-toolbar-title>
      </slot>
    </div>
    <slot name="left"></slot>
    <q-space />
    <slot />
    <slot name="right"></slot>
    <slot name="language">
      <lang-selector v-if="language" class="q-mr-md" />
    </slot>
    <slot name="end"></slot>
  </q-toolbar>
</template>

<style lang="scss" scoped>
.white-logo {
  width: 48px;
  height: 48px;
  :deep(path) {
    fill: #fff !important;
  }
}
</style>
