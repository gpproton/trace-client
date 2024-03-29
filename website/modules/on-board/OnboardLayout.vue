<script setup lang="ts">
import { computed } from 'vue';
import AppLogo from '@trace/base/icons/logo.svg';
import LangSelector from '@trace/base/components/LangSelector.vue';
import { onboardRoutes } from './routes';
import { useOnboardStore } from '@trace/base/composables/on-board';

defineOptions({ name: 'OnboardLayout' });

const onboardStore = useOnboardStore();
const { status } = onboardStore;
const getStatus = computed(() => {
  return (name: string) => {
    const state = status(name);
    if (state === null) return 'item-inactive';

    return state ? 'item-completed' : 'item-active';
  };
});
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <div class="row fit" style="max-height: 100vh">
        <q-card
          square
          fit
          class="gt-sm col-5 bg-grey-1 window-height column justify-between"
        >
          <q-toolbar class="q-pa-md">
            <app-logo class="app-logo" />
            <q-toolbar-title class="text-h5 text-primary text-weight-bold">
              {{ 'Trace' }}
            </q-toolbar-title>
          </q-toolbar>
          <div class="q-pa-lg">
            <q-list>
              <q-item
                v-for="(item, index) in onboardRoutes"
                :key="index"
                class="q-my-md"
              >
                <q-item-section avatar>
                  <div class="item-dot" :class="getStatus(item.name)">
                    <q-icon
                      v-if="getStatus(item.name) === 'item-completed'"
                      color="white"
                      name="bi-check"
                      size="sm"
                    />
                  </div>
                </q-item-section>
                <q-item-section
                  class="text-h6"
                  :class="
                    getStatus(item.name) === 'item-active'
                      ? 'text-accent'
                      : 'text-grey-6'
                  "
                  >{{ $t(`${item.meta?.title}`) }}</q-item-section
                >
                <q-item-section
                  v-if="getStatus(item.name) === 'item-active'"
                  side
                >
                  <q-icon
                    name="bi-arrow-right"
                    :class="
                      getStatus(item.name) === 'item-active'
                        ? 'text-accent'
                        : 'text-grey-6'
                    "
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="q-px-md q-py-sm text-primary">
            {{ 'All right reserved.' }}
            <NuxtLink class="footer-link" to="https://drolx.com">{{
              'drolx Solutions'
            }}</NuxtLink>
          </div>
        </q-card>
        <q-card square fit class="col window-height">
          <q-toolbar class="q-px-md">
            <lang-selector />
            <q-space />
            <q-btn
              flat
              no-caps
              color="primary"
              class="text-body1 border-radius-sm"
              >{{ $t('shared.support') }}</q-btn
            >
          </q-toolbar>
          <div class="q-pa-sm">
            <slot>
              <router-view />
            </slot>
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.item-dot {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-active {
  background: $green-6 !important;
}

.item-completed {
  background: $green-6 !important;
}

.item-inactive {
  border: 2px solid $grey-6 !important;
}
</style>
