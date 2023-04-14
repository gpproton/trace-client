<script setup lang="ts">
import SwitcherButton from '@/layouts/navigation/SwitcherButton.vue';
import { IModule } from 'src/shared/libs/Menu';
import { ref } from 'vue';
/* eslint-disable @typescript-eslint/no-explicit-any */
const contextOptions = {
  page: {
    title: 'Task Timeline',
  },
};

const currentHour = ref('hour-8');

const periodSelections = [
  {
    name: 'hour-8',
    title: '8 Hours',
    icon: '',
  },
  {
    name: 'hour-12',
    title: '12 Hours',
    icon: '',
  },
  {
    name: 'hour-24',
    title: '24 Hours',
    icon: '',
  },
] as Array<IModule>;

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Vehicle / Driver',
    align: 'left',
    field: (row: { name: any }) => row.name,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: 'hour-0',
    align: 'center',
    label: '14:00',
    field: 'hour0',
    sortable: true,
  },
  {
    name: 'hour-1',
    align: 'center',
    label: '15:00',
    field: 'hour0',
    sortable: true,
  },
  {
    name: 'hour-2',
    align: 'center',
    label: '16:00',
    field: 'hour0',
    sortable: true,
  },
  {
    name: 'hour-3',
    align: 'center',
    label: '17:00',
    field: 'hour0',
    sortable: true,
  },
  {
    name: 'hour-4',
    align: 'center',
    label: '16:00',
    field: 'hour0',
    sortable: true,
  },
  {
    name: 'hour-5',
    align: 'center',
    label: '17:00',
    field: 'hour0',
    sortable: true,
  },
  {
    name: 'hour-6',
    align: 'center',
    label: '18:00',
    field: 'hour0',
    sortable: true,
  },
];

const rows = [
  {
    name: 'AAA 767 XH',
    driver: 'Driver A',
    hour0: 'Pending',
  },
  {
    name: 'KTU 203 XC',
    driver: 'Driver A',
    hour0: 'Transit',
  },
  {
    name: 'LND 100 XG',
    driver: 'Driver A',
    hour0: 'Delayed',
  },
];
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="column q-pa-sm">
      <q-table
        class="sticky-header-column-table"
        separator="vertical"
        style="min-height: calc(100vh - 80px)"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template #top="props">
          <input-text
            label="Search"
            style="min-width: 300px"
            class="border-radius-sm"
          ></input-text>
          <q-space></q-space>

          <switcher-button
            :items="periodSelections"
            v-model="currentHour"
            align="justify"
            :route="false"
            flat
          ></switcher-button>

          <q-btn
            size="xl"
            dense
            color="secondary"
            :icon="props.inFullscreen ? 'bi-fullscreen-exit' : 'bi-fullscreen'"
            @click="props.toggleFullscreen"
            class="q-ml-md"
          />
        </template>

        <template #body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td v-for="item in 7" :key="'hour-' + item" :props="props">
              {{ 'test-0' }}
            </q-td>
          </q-tr>
        </template>

        <template #bottom>
          <div></div>
        </template>
      </q-table>
    </q-page>
  </page-wrapper>
</template>

<style lang="scss">
.sticky-header-column-table {
  td:first-child {
    background-color: #c1f4cd !important;
  }
  tr th {
    position: sticky;
    z-index: 2;
    background: #fff;
  }
  thead tr:last-child th {
    top: 48px;
    z-index: 3;
  }
  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }
  tr:first-child th:first-child {
    z-index: 3;
  }
  td:first-child {
    z-index: 1;
  }
  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
  }
}
</style>
