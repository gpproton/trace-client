<script setup lang="ts">
const contextOptions = {
  page: {
    title: 'Error has occured',
    showTitle: false,
    withMobile: true,
  },
};
</script>

<script lang="ts">
export default {
  name: 'ErrorPage',
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="column items-center justify-center">
        <error-page-wrapper :options="contextOptions"></error-page-wrapper>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
