<script setup lang="ts">
interface IProps {
  modelValue: boolean;
  type: 'closed' | 'opened';
}
const props = defineProps<IProps>();
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): void;
}>();
const toggleModelValue = () => {
  emits('update:modelValue', !props.modelValue);
};
</script>

<template>
  <fragment>
    <div
      v-show="!props.modelValue && props.type === 'closed'"
      class="arrow arrow-right"
    >
      <span class="panel" @click="toggleModelValue">
        <q-icon name="bi-chevron-right"></q-icon>
      </span>
    </div>
    <span
      v-show="props.modelValue && props.type === 'opened'"
      class="arrow panel"
      @click="toggleModelValue"
    >
      <q-icon name="bi-chevron-left"></q-icon>
    </span>
  </fragment>
</template>

<style lang="scss">
.arrow {
  cursor: pointer;
}

.panel {
  background-color: #fff;
  flex: 1 1 auto;
  width: 1.2rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0.35rem 0.35rem 0;
  box-shadow: 4px 1px 5px 1px rgba(153, 153, 153, 0.44);
  z-index: 1;
}

.arrow-right {
  margin-left: -0.55rem;
  margin-top: 40vh;
}
</style>
