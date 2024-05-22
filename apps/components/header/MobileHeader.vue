<script setup lang="tsx">
import type { Route, RouteMenu } from '@trace/base/typings';
import { useQuasar } from 'quasar';
import { inject } from 'vue';
import DialogMenu from '@/components/extra/DialogMenu.vue';

defineOptions({ name: 'MobileHeader' });

const $q = useQuasar();
const route = useRoute();
const { modelValue } = defineModels<{
  modelValue?: ModelOptions<boolean, { defaultValue: false; deep: true }>;
  search: ModelOptions<string, { defaultValue: ''; deep: true }>;
  title: ModelOptions<string, { defaultValue: 'Title'; deep: true }>;
}>();

const currentRoute = computed<Route>(() => route);
const workspace = inject<Ref<string>>('app:workspace');
const moduleFeatures = inject<Ref<RouteMenu[]>>('app:modules-features');
const triggerMobileMenu = () => {
  $q.dialog({
    component: DialogMenu,
    componentProps: {
      persistent: false,
      workspace: workspace,
      moduleFeatures: moduleFeatures?.value,
    },
  });
};
</script>

<template>
  <q-header reveal :elevated="false" class="bg-transparent">
    <q-toolbar>
      <q-btn
        flat
        square
        color="primary"
        icon="bi-list"
        class="q-mr-sm q-px-sm"
        @click="() => (modelValue = !modelValue)"
      />
      <q-space />

      <div class="row q-gutter-sm">
        <q-field
          dense
          outlined
          stack-label
          style="min-width: 180px"
          @focus="triggerMobileMenu"
        >
          <template #control>
            <div
              class="self-center full-width no-outline text-accent"
              tabindex="0"
            >
              {{ $t(currentRoute.meta.title) }}
            </div>
          </template>

          <template #append>
            <q-icon size="sm" name="unfold_more" />
          </template>
        </q-field>
        <q-btn
          square
          color="primary"
          icon="bi-plus-lg"
          class="border-radius-sm q-px-sm"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>
