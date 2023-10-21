<script setup lang="ts">
import type { IModule } from '@trace/shared';
import SidebarListItem from '@/components/drawer/SidebarListItem.vue';

defineOptions({ name: "DesktopSecondarySidebar" });

interface IProps {
  modelValue: boolean;
  title: string;
  items: IModule[];
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  title: 'Secondary Title',
});

const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): boolean;
  (eventName: 'update:title', value: string): void;
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
  <q-drawer v-if="drawer" v-model="drawer" :width="230" show-if-above persistent behavior="desktop" side="left" bordered>
    <q-toolbar>
      <q-toolbar-title class="q-px-sm">
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
    <q-separator size="1" class="q-mb-md" />
    <q-list padding class="text-primary">
      <template v-for="(item, index) in items" :key="index">
        <sidebar-list-item :item="item" :dense="false" />
        <q-separator v-if="item.separator" :key="'sep' + index" />
      </template>
    </q-list>
  </q-drawer>
</template>

<style lang="scss" scoped>
.q-list {
  :hover {
    background-color: var(--q-app-background);
  }
}
</style>
