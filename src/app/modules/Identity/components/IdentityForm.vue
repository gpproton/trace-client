<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();
</script>

<script lang="ts">
export default {
  name: 'IdentityForm',
};
</script>

<template>
  <div class="identity-form">
    <q-form
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
      class="q-pa-md"
    >
      <h3
        class="text-primary q-my-none q-mb-lg text-weight-medium"
        :class="$q.platform.is.desktop ? 'text-center' : 'text-left'"
      >
        <slot name="title"></slot>
      </h3>

      <div
        class="text-accent"
        :class="
          $q.platform.is.desktop ? 'text-center q-px-lg' : 'text-left q-px-xs'
        "
      >
        <slot name="sub-title"></slot>
      </div>

      <slot></slot>
      <slot name="footer">
        <div class="full-width row items-center justify-end q-pa-xs q-px-md">
          <router-link
            class="identity-link identity-text"
            :to="{ name: 'app.identity.sign-in' }"
          >
            <q-icon name="bi-arrow-left" color="action" size="1.2em" />
            <span class="q-ml-xs">Sign In</span>
          </router-link>
        </div>
      </slot>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
@import '../pages/identity.scss';
</style>
