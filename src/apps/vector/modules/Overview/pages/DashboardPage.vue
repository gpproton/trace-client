<script setup lang="ts">
const contextOptions = {
  page: { title: 'General Overview' },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-md">
      <div class="row q-gutter-col-md">
        <q-card class="col-12 col-md-8">
          <q-card-section>
            <span class="q-ml-sm">Graphs</span>
          </q-card-section>
        </q-card>
        <q-card class="col-12 col-md-4">
          <q-card-section>
            <span class="q-ml-sm">Counts</span>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </page-wrapper>
</template>
