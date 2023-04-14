<script setup lang="ts">
import { IModule } from '@/libs/IModule';
import SwitcherButton from '@/layouts/navigation/SwitcherButton.vue';

interface IProps {
  moduleItems?: Array<IModule>;
}

const props = withDefaults(defineProps<IProps>(), {
  moduleItems: () => [],
});
</script>
<script lang="ts">
export default {
  name: 'ActivityContainer',
};
</script>

<template>
  <div class="gt-md col-md-8" v-bind="$attrs">
    <div class="q-mb-sm">
      <switcher-button
        :items="props.moduleItems"
        align="justify"
        route
        flat
      ></switcher-button>
    </div>

    <q-card flat class="border-radius-sm full-height">
      <slot>
        <router-view />
      </slot>
    </q-card>
  </div>
</template>
