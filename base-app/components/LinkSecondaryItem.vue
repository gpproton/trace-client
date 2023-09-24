<script setup lang="ts">
import { IModule } from '@trace/shared';

interface IProps {
  item: IModule;
  dense?: boolean;
  iconSize?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  dense: false,
  iconSize: '',
});
</script>

<template>
  <q-expansion-item
    :expand-separator="item.separator"
    :icon="props.item.icon"
    :label="props.item.title"
    :class="iconSize.length > 0 ? 'seperator-icon' : ''"
    active-class="app-list-item-active"
    :to="
      props.item.name == undefined ? { name: props.item.name } : { name: '#' }
    "
  >
    <q-list :dense="props.dense" bordered padding>
      <template v-for="(menuItem, index) in item.items" :key="`x-${index}`">
        <q-item
          v-ripple
          clickable
          :to="
            menuItem.name == undefined ? { name: menuItem.name } : { name: '#' }
          "
        >
          <q-item-section v-if="item.icon != undefined" avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>{{ menuItem.title }}</q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-expansion-item>
</template>

<style lang="scss">
@import '../styles/list-items.scss';

.seperator-icon {
  .q-icon {
    font-size: v-bind('iconSize');
  }
  border-radius: $border-radius-sm;
}
</style>
