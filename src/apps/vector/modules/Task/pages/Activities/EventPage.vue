<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const layout = computed(() => {
  const auto = $q.screen.lt.sm
    ? 'dense'
    : $q.screen.lt.md
    ? 'comfortable'
    : 'loose';
  if (true) return 'dense';
  else return auto;
});
</script>

<template>
  <div class="q-pa-sm">
    <q-timeline class="activity-timeline" :layout="layout" color="secondary">
      <q-timeline-entry heading>
        <div class="bordered-section q-pa-md text-body1">Details</div>
      </q-timeline-entry>
      <q-timeline-entry
        title="To Customer"
        subtitle="2022-01-02 00:00"
        side="right"
        icon="bi-bell"
        color="primary"
      >
        <div class="bordered-section q-pa-sm">
          <div class="q-pa-sm row justify-between">
            <q-btn
              no-caps
              color="blue"
              icon="bi-pencil-square"
              label="Update"
              class="border-radius-sm"
            ></q-btn>
            <q-btn
              outline
              no-caps
              color="red"
              icon="bi-trash"
              label="Delete"
              class="border-radius-sm"
            ></q-btn>
          </div>
          <div class="q-mt-sm text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Loading Backhaul"
        subtitle="2022-01-01 00:00"
        side="right"
        color="red"
      >
        <div class="bordered-section q-pa-sm">
          <div class="q-my-sm text-center">
            <q-btn
              size="sm"
              color="accent"
              icon="bi-three-dots"
              class="border-radius-sm"
            ></q-btn>
          </div>
          <div class="text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped lang="scss">
.activity-timeline .q-timeline__title {
  color: var(--q-primary);
  margin-bottom: 0.2rem;
}

.activity-timeline .q-timeline__subtitle {
  color: var(--q-accent);
  margin: 0;
}
.activity-timeline .timeline-content {
  color: var(--q-accent);
}
.bordered-section {
  border: 1px solid var(--q-app-background);
  border-radius: $border-radius-sm;
  min-height: 48px;
}
</style>
