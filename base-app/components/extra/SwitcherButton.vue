<script setup lang="ts">
import type { IModule } from '@trace/shared';

defineOptions({ name: 'SwitcherButton' });

interface IProps {
  items: IModule[];
  dense?: boolean;
  route?: boolean;
  flat?: boolean;
  outsideArrows?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  dense: false,
  route: false,
  flat: false,
  outsideArrows: true,
});

const { modelValue } = defineModels<{
  modelValue?: ModelOptions<string, { defaultValue: ''; deep: true; passive: true }>;
}>();
</script>

<template>
  <q-tabs $="modelValue" :dense="props.dense" no-caps inline-label :outside-arrows="props.outsideArrows"
    align="center" indicator-color="transparent" class="bg-app-background border-radius-sm text-accent" :active-class="props.flat
      ? 'shadow-0 bg-app-plainer text-action'
      : 'shadow-2 bg-app-plainer text-action'
      " content-class="text-body1 text-weight-regular" v-bind="$attrs">
    <template v-if="props.route">
      <q-route-tab v-for="(moduleItem, moduleIndex) in props.items" :key="moduleIndex" :name="moduleItem.name"
        :to="{ name: moduleItem.name }" class="border-radius-sm q-ma-xs q-px-none" content-class="q-px-md">
        {{ $t(moduleItem.title) }}
      </q-route-tab>
    </template>
    <q-tab v-for="(moduleItem, moduleIndex) in props.items" v-else :key="moduleIndex" :name="moduleItem.name"
      class="border-radius-sm q-ma-xs" content-class="q-px-sm">
      {{ moduleItem.title }}
    </q-tab>
  </q-tabs>
</template>
