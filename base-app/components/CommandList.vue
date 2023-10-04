<script setup lang="ts">
import { IModule, IModuleCommands } from '@trace/shared';

interface IProps {
  items: Array<IModuleCommands | IModule>;
}
const props = defineProps<IProps>();
const emits = defineEmits<{
  (eventName: 'update:visible', value: boolean): void;
}>();
const closeModal = (value: boolean) => {
  emits('update:visible', value);
};
</script>

<template>
  <q-list style="min-width: 175px">
    <q-item
      v-for="(quickCreateItem, quickCreateIndex) in props.items"
      :key="quickCreateIndex"
      :to="{ name: quickCreateItem.name }"
      active-class="bg-primary"
      class="border-radius-sm"
      clickable
      @click="closeModal(false)"
    >
      <q-item-section class="no-margin no-padding" avatar>
        <q-icon color="primary" :name="quickCreateItem.icon" />
      </q-item-section>
      <q-item-section
        class="text-body1 text-weight-bold text-primary"
        style="margin-left: -1rem"
      >
        {{ quickCreateItem.title }}
      </q-item-section>

      <q-item-section side>
        <div
          v-if="(quickCreateItem as IModuleCommands).command != undefined"
          class="row items-center justify-center q-px-none q-mx-none"
          style="min-width: 5rem"
        >
          <span class="col list-span-pill text-center">
            <q-icon size="1.5em" name="bi-command" />
          </span>
          <span
            class="col list-span-pill text-weight-bold text-body1 text-center q-ml-xs"
            >{{ (quickCreateItem as IModuleCommands).command }}</span
          >
        </div>
        <div v-else>&nbsp;</div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style lang="scss" scoped>
.q-list {
  :hover {
    background-color: var(--q-app-background);
  }
}

.list-span-pill {
  border: 0.05rem solid var(--q-space);
  border-radius: $border-radius-xs;
  background-color: var(--q-app-white);
  padding: 0.15rem;
  color: var(--q-accent);
  min-height: 1.75rem;
  max-height: 1.75rem;
  max-width: 1.75rem;
}
</style>
