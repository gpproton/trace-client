<script setup lang="ts">
import { IModule } from '@trace/shared';
import LinkSecondaryItem from './LinkSecondaryItem.vue';
import SidebarListItem from './SidebarListItem.vue';

interface IProps {
  modelValue: boolean;
  search: string;
  items: IModule[];
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  search: '',
});

const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): boolean;
  (eventName: 'update:search', value: string): void;
  (eventName: 'update:items', value: IModule[]): void;
}>();

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});

onMounted(() => {
  if (props.items.length > 0) {
    drawer.value = true;
  }
});
</script>

<template>
  <q-drawer
    v-if="drawer"
    v-model="drawer"
    :width="230"
    show-if-above
    persistent
    behavior="desktop"
    side="left"
    bordered
  >
    <div>
      <q-input
        :model-value="search"
        dense
        label="Search"
        class="q-ma-sm rounded-borders"
        filled
        @update:model-value="$emit('update:search', $event)"
      >
        <template #prepend>
          <q-avatar>
            <q-icon size="sm" name="bi-search" />
          </q-avatar>
        </template>
      </q-input>
      <q-list padding class="text-primary">
        <template v-for="(item, index) in items" :key="index">
          <sidebar-list-item :item="item" :dense="false" />
          <q-separator v-if="item.separator" :key="'sep' + index" />
        </template>
      </q-list>
    </div>
  </q-drawer>
</template>

<style lang="scss" scoped>
.q-list {
  :hover {
    background-color: var(--q-app-background);
  }
}
</style>
