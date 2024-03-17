<script setup lang="ts">
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'LinkSecondaryItem' });
type RouteSecondary = RouteMenu & { separator?: boolean };
interface IProps {
  item: RouteSecondary;
  dense?: boolean;
  iconSize?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  dense: false,
  iconSize: '',
});
</script>

<template>
  <q-expansion-item :expand-separator="item.separator" :icon="props.item.icon" :label="$t(props.item.title as string)"
    :hide-expand-icon="item.children == undefined"
    :class="iconSize.length > 0 ? 'seperator-icon' : ''" active-class="app-list-item-active" :to="props.item.name !== undefined ? { name: props.item.name } : { name: '#' }
      ">
    <q-list v-if="item.children !== undefined" :dense="props.dense" bordered padding>
      <template v-for="(menuItem, index) in item.children" :key="index">
        <q-item class="secondary-expansion-item" v-ripple clickable :to="menuItem.name !== undefined ? { name: menuItem.name } : { name: '#' }
          ">
          <q-item-section v-if="item.icon != undefined" avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>{{ $t(menuItem?.title as string) }}</q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-expansion-item>
</template>

<style lang="scss" scoped>
@import '../styles/list-items.scss';

:deep(.q-item) {
  border-radius: $border-radius-sm;
}

.seperator-icon {
  .q-icon {
    font-size: v-bind('iconSize');
  }

  border-radius: $border-radius-sm;
}
</style>
