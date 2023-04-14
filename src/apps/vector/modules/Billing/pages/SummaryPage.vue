<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const contextOptions = {
  page: {
    title: 'Billing Summary',
  },
};

const $q = useQuasar();

const data = ref([
  { value: 1048, name: 'Transit' },
  { value: 735, name: 'Delayed' },
  { value: 580, name: 'Pending' },
  { value: 484, name: 'Diverted' },
  { value: 300, name: 'Completed' },
]);

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      // top: '5%',
      left: '10%',
      bottom: 'bottom',
    },
    title: {
      text: 172 + ' Tasks',
      left: 'center',
      top: 'center',
      nameTextStyle: {
        fontSize: 16,
        color: '#ff33ee',
        fontWeight: 'bold',
      },
    },
    series: [
      {
        name: 'Status',
        type: 'pie',
        color: ['#7f7f7f', '#3hhg33', '#e69d87', '#8dc1a9', '#ea7e53'],
        radius: ['67%', '75%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 9,
          borderColor: $q.dark.isActive ? '#2c2c2c' : '#fff',
          borderWidth: 4,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '32',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data.value,
      },
    ],
  };
});
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm">
      <div class="row">
        <div class="col-2 col-md-6">
          <q-card class="q-pa-sm border-radius-sm">
            <div class="row q-mb-sm q-px-md">
              <div class="text-h6 text-secondary">{{ 'Active Tasks' }}</div>
            </div>
            <chart-object class="fit-chart" v-model="option"></chart-object>
          </q-card>
        </div>
      </div>
    </q-page>
  </page-wrapper>
</template>

<style lang="scss">
.fit-chart {
  height: 400px;
  width: 500px;
}
</style>
