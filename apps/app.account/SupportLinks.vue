<script setup lang="ts">
const links = [
  {
    name: 'support-center',
    label: 'shared.support',
  },
  {
    name: 'faqs',
    label: 'shared.faqs',
  },
  {
    name: 'contact',
    label: 'shared.contact',
  },
];
</script>

<template>
  <q-tabs no-caps shrink stretch content-class="text-primary">
    <q-route-tab
      v-for="(link, index) in links"
      :key="index"
      :to="`/${link.name}`"
      :name="link.name"
      class="text-body1 border-radius-sm gt-sm"
      >{{ $t(link.label) }}</q-route-tab
    >
  </q-tabs>
</template>
