<script setup lang="ts">
// import { IModule, IModuleCommands } from '@trace/shared';

interface IProps {
  // quickCommands?: IModuleCommands[];
  // appSections?: IModule[];
  // headerMenu?: IModule[];
  modelValue?: boolean;
  search: string;
  title: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  search: '',
  title: 'Title',
});

const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): void;
  (eventName: 'update:search', value: string): void;
  (eventName: 'update:title', value: string): void;
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
        class="q-mr-sm"
        @click="() => emits('update:modelValue', !props.modelValue)"
      />
      <q-toolbar-title
        class="text-primary text-h5 text-weight-bold text-no-wrap overflow-hidden ellipsis"
      >
        {{ props.title }}
      </q-toolbar-title>
      <q-space />
      <div class="q-gutter-xs">
        <q-btn
          flat
          square
          color="primary"
          icon="bi-search"
          class="border-radius-sm"
        />
        <q-btn
          flat
          square
          color="primary"
          icon="bi-bell"
          class="border-radius-sm"
        />
        <q-btn
          square
          color="primary"
          icon="bi-plus-lg"
          class="border-radius-sm"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>
