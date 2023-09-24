<script lang="ts" setup>
interface IProps {
  modelValue: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
});

const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): void;
}>();

const isDark = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});

const setThemeState = (value: boolean) => {
  isDark.value = value;
};

const darkOptions = [
  {
    name: 'light',
    value: false,
    icon: 'bi-brightness-high-fill',
  },
  {
    name: 'dark',
    value: true,
    icon: 'bi-moon-fill',
  },
];

const themeStatus = (value: string) => {
  if (value === 'dark' && isDark.value) {
    return true;
  }
  return value === 'light' && !isDark.value;
};
</script>

<template>
  <div class="text-center theme-switcher">
    <q-btn
      v-for="(option, index) in darkOptions"
      :key="index"
      size="md"
      class="q-px-md"
      rounded
      :icon="option.icon"
      :flat="!themeStatus(option.name)"
      :color="themeStatus(option.name) ? 'white' : 'transparent'"
      :text-color="themeStatus(option.name) ? 'primary-only' : 'primary'"
      @click="setThemeState(option.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  max-width: 125px;
  border-radius: $border-radius-lg;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: var(--q-app-background);
}
</style>
