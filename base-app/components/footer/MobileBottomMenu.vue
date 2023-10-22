<script setup lang="ts">
import type { IModule } from '@trace/shared';

defineOptions({ name: 'MobileBottomMenu' });

interface IProps {
  items: IModule[];
  overflowItems?: IModule[];
}

const props = withDefaults(defineProps<IProps>(), {
  overflowItems: () => [],
});

const state = ref('');
const moreItems = ref(false);
</script>

<template>
  <q-footer class="app-footer q-pa-xs q-mb-sm q-mx-sm">
    <q-menu v-if="props.overflowItems.length > 0 && moreItems" $="moreItems" :offset="[0, 20]" fit auto-close
      class="border-radius-md">
      <q-list padding>
        <template v-for="(item, index) in props.overflowItems" :key="index">
          <q-item :to="{ name: item.name }" class="border-radius-sm text-accent-more" active-class="text-action"
            clickable>
            <q-item-section avatar>
              <q-icon size="1.7em" color="primary" :name="item.icon" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-regular" no-wrap>
              {{ item.title }}
            </q-item-section>
          </q-item>
          <q-separator v-if="index < props.overflowItems.length - 1" color="app-background" class="q-mx-sm" />
        </template>
      </q-list>
    </q-menu>
    <q-tabs $="state" active-color="action" align="justify" no-caps switch-indicator narrow-indicator
      indicator-color="action" content-class="mobile-footer-item" class="text-space">
      <q-route-tab v-for="(item, index) in props.items" :key="index" :name="item.name" :to="{ name: item.name }"
        :icon="item.icon" class="border-radius-md">
        <q-badge v-show="item.name === 'overview'" floating color="red-7" rounded>
          {{ '23+' }}
        </q-badge>
      </q-route-tab>
      <q-route-tab $="moreItems" name="more" icon="bi-grid-3x3-gap" class="border-radius-md"
        @click="() => (moreItems = !moreItems)" />
    </q-tabs>
  </q-footer>
</template>

<style lang="scss" scoped>
.app-footer {
  border-radius: $border-radius-md;
  background-color: var(--q-app-plain);
  border: 1px solid var(--q-app-background-more);

  .badge {
    font-size: unset;
    top: 0.4rem;
    right: 0.3rem;
  }
}
</style>
