<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const GenericFooter = defineAsyncComponent(
  () => import('@/app/GenericFooter.vue'),
);
</script>

<template>
  <div class="row justify-between items-center text-grey">
    <div class="q-px-lg">
      <span>{{ $t('onboard.accountAlready') }}</span>
      <nuxt-link
        style="text-decoration: none"
        class="text-body1 text-primary q-ml-sm text-capitalize"
        :to="{ name: 'auth.sign-in' }"
      >
        {{ $t('auth.signIn') }}
      </nuxt-link>
    </div>
    <generic-footer></generic-footer>
  </div>
</template>
