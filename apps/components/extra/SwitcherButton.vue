<script setup lang="ts">
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'SwitcherButton' });

const props = withDefaults(defineProps<{
  items: RouteMenu[];
  dense?: boolean;
  route?: boolean;
  flat?: boolean;
  outsideArrows?: boolean;
}>(), {
  dense: false,
  route: false,
  flat: false,
  outsideArrows: true,
});

const { modelValue } = defineModels<{
  modelValue?: ModelOptions<string, { defaultValue: ''; deep: true }>;
}>();
</script>

<template>
  <q-tabs
    v-model="modelValue"
    :dense="props.dense"
    no-caps
    inline-label
    :outside-arrows="props.outsideArrows"
    align="center"
    indicator-color="transparent"
    class="bg-app-background border-radius-sm text-accent"
    :active-class="
      props.flat
        ? 'shadow-0 bg-app-plainer text-action'
        : 'shadow-2 bg-app-plainer text-action'
    "
    content-class="text-body1 text-weight-regular"
    v-bind="$attrs"
  >
    <template v-if="props.route">
      <q-route-tab
        v-for="(moduleItem, moduleIndex) in props.items"
        :key="moduleIndex"
        :name="moduleItem.name as string"
        :to="{ name: moduleItem.name }"
        class="border-radius-sm q-ma-xs q-px-none"
        content-class="q-px-md"
      >
        {{ $t(moduleItem.title as string) }}
      </q-route-tab>
    </template>
    <q-tab
      v-for="(moduleItem, moduleIndex) in props.items"
      v-else
      :key="moduleIndex"
      :name="moduleItem.name as string"
      class="border-radius-sm q-ma-xs"
      content-class="q-px-sm"
    >
      {{ moduleItem.title }}
    </q-tab>
  </q-tabs>
</template>
