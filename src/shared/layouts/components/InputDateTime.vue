<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

interface IProps {
  modelValue: string;
}
const model = ref('');
const mask = ref('YYYY-MM-DD HH:mm');
const props = defineProps<IProps>();
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: string): void;
}>();
onBeforeMount(() => {
  model.value = props.modelValue;
});
</script>
<script lang="ts">
export default {
  name: 'InputDateTime',
};
</script>

<template>
  <q-input
    v-bind="$attrs"
    v-model="model"
    color="action"
    label-color="accent"
    bg-color="app-background-shift2"
    standout="bg-app-background text-accent"
    label="Date Time"
    readonly
    @update:model-value="emits('update:modelValue', model)"
  >
    <template #prepend>
      <q-icon name="bi-calendar-event" color="accent" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date
            v-model="model"
            :mask="mask"
            class="border-radius-sm"
            @update:model-value="emits('update:modelValue', model)"
          >
            <div class="row items-center justify-center">
              <q-btn
                v-close-popup
                outline
                label="Close"
                color="primary"
                class="border-radius-sm full-width"
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template #append>
      <q-icon name="bi-clock" color="accent" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            v-model="model"
            :mask="mask"
            format24h
            class="border-radius-sm"
            @update:model-value="emits('update:modelValue', model)"
          >
            <div class="row items-center justify-center">
              <q-btn
                v-close-popup
                outline
                label="Close"
                color="primary"
                class="border-radius-sm full-width"
              />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
