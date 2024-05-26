<script lang="ts" setup>
import { QCalendarDay, today } from '@quasar/quasar-ui-qcalendar';
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarDay.sass';

const calendarRef = ref();
const selectedDate = ref(today());
const dateAlign = ref('center');
const weekdayAlign = ref('center');
const dateHeader = ref('stacked');

// TODO: For calendar navigation
// const onToday = () => calendarRef.value.moveToToday();
// const onPrev = () => calendarRef.value.prev();
// const onNext = () => calendarRef.value.next();

const onMoved = (data: any) => console.log('onMoved', data);
const onChange = (data: any) => console.log('onChange', data);
const onClickDate = (data: any) => console.log('onClickDate', data);
const onClickTime = (data: any) => console.log('onClickTime', data);
const onClickInterval = (data: any) => console.log('onClickInterval', data);
const onClickHeadIntervals = (data: any) =>
  console.log('onClickHeadIntervals', data);
const onClickHeadDay = (data: any) => console.log('onClickHeadDay', data);
</script>

<template>
  <div class="subcontent">
    <div class="row justify-center">
      <div class="calendar-style">
        <q-calendar-day
          ref="calendarRef"
          v-model="selectedDate"
          class="border-rounded-sm"
          view="week"
          short-weekday-label
          :hour24-format="true"
          :date-header="dateHeader"
          :weekday-align="weekdayAlign"
          :date-align="dateAlign"
          animated
          bordered
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-time="onClickTime"
          @click-interval="onClickInterval"
          @click-head-intervals="onClickHeadIntervals"
          @click-head-day="onClickHeadDay"
        />
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
