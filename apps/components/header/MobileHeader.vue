<script setup lang="ts">
defineOptions({ name: 'MobileHeader' });

const { modelValue, title } = defineModels<{
  modelValue?: ModelOptions<boolean, { defaultValue: false; deep: true }>;
  search: ModelOptions<string, { defaultValue: ''; deep: true }>;
  title: ModelOptions<string, { defaultValue: 'Title'; deep: true }>;
}>();
</script>

<template>
  <q-header reveal :elevated="false" class="bg-transparent">
    <q-toolbar>
      <q-btn
        flat
        square
        color="primary"
        icon="bi-list"
        class="q-mr-sm q-px-sm"
        @click="() => (modelValue = !modelValue)"
      />
      <q-toolbar-title
        class="text-primary text-h5 text-weight-bold text-no-wrap overflow-hidden ellipsis"
      >
        {{ title }}
      </q-toolbar-title>
      <q-space />
      <div class="q-gutter-xs">
        <q-btn
          flat
          square
          color="primary"
          icon="bi-bell"
          class="border-radius-sm q-px-sm"
        />
        <q-btn
          square
          color="primary"
          icon="bi-plus-lg"
          class="border-radius-sm q-px-sm"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>
