<script setup lang="ts">
defineOptions({ name: 'IdentityForm' });
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
      <div class="q-mb-lg">
        <div class="text-primary text-h4">
          <slot name="title" />
        </div>
        <div class="text-accent text-center text-subtitle1 q-px-sm">
          <slot name="sub-title" />
        </div>
      </div>

      <slot />
      <slot name="footer">
        <div class="full-width row items-center justify-end q-pa-xs q-px-md">
          <router-link
            class="identity-link identity-text"
            :to="{ name: 'auth.sign-in' }"
          >
            <q-icon name="bi-arrow-left" color="action" size="1.2em" />
            <span class="q-ml-xs">{{ $t('auth.signIn') }}</span>
          </router-link>
        </div>
      </slot>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/identity.scss';
</style>
