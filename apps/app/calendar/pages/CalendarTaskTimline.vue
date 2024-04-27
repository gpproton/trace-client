<script lang="ts" setup>
import { QCalendarResource, today } from '@quasar/quasar-ui-qcalendar';
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarResource.sass';

const calendarRef = ref();
const styles = computed(() => ({ '--calendar-resources-width': 150 + 'px' }));
const selectedDate = ref(today());
const resources = ref([
  {
    id: '1',
    name: 'Vehicle 000',
    icon: 'meeting_room',
  },
  {
    id: '2',
    name: 'Vehicle 001',
    icon: 'meeting_room',
    expanded: false,
  },
  {
    id: '3',
    name: 'Vehicle 001',
    icon: 'meeting_room',
  },
]);

// TODO: For calendar navigation
// const onToday = () => calendarRef.value.moveToToday();
// const onPrev = () => calendarRef.value.prev();
// const onNext = () => calendarRef.value.next();

const onMoved = (data: any) => console.log('onMoved', data);
const onChange = (data: any) => console.log('onChange', data);
const onResourceExpanded = (data: any) =>
  console.log('onResourceExpanded', data);
const onClickDate = (data: any) => console.log('onClickDate', data);
const onClickTime = (data: any) => console.log('onClickTime', data);
const onClickResource = (data: any) => console.log('onClickResource', data);
const onClickHeadResources = (data: any) =>
  console.log('onClickHeadResources', data);
const onClickInterval = (data: any) => console.log('onClickInterval', data);
</script>

<template>
  <div class="subcontent">
    <div class="row justify-center">
      <div class="calendar-style">
        <q-calendar-resource
          ref="calendarRef"
          v-model="selectedDate"
          v-model:model-resources="resources"
          :hour24-format="true"
          resource-key="id"
          resource-label="name"
          bordered
          :style="styles"
          @change="onChange"
          @moved="onMoved"
          @resource-expanded="onResourceExpanded"
          @click-date="onClickDate"
          @click-time="onClickTime"
          @click-resource="onClickResource"
          @click-head-resources="onClickHeadResources"
          @click-interval="onClickInterval"
        >
          <template #resource-label="{ scope: { resource } }">
            <div class="col-12">
              <q-chip class="text-caption" color="app-background text-primary">
                <q-avatar>
                  <q-icon size="xs" :name="resource.icon" />
                </q-avatar>
                {{ resource.name }}
              </q-chip>
            </div>
          </template>
        </q-calendar-resource>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calendar-style {
  display: flex;
  max-width: calc(100vw - 72px);
  width: 100%;
  height: calc(100dvh - 164px);
}
</style>
