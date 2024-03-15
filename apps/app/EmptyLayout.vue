<script setup lang="ts">
// NOTE: Affects nested layout if enabled
// defineOptions({ name: 'EmptyLayout' });
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
