<script setup lang="ts">
interface IProps {
  type: 'closed' | 'opened';
}
defineOptions({ name: 'PanelToogle' });

const props = defineProps<IProps>();
const { modelValue } = defineModels<{
  modelValue: ModelOptions<boolean, { defaultValue: false; deep: true }>;
}>();
const togglePanel = () => (modelValue.value = !modelValue.value);
</script>

<template>
  <div
    v-show="!modelValue && props.type === 'closed'"
    class="cursor-pointer arrow-right"
  >
    <span class="panel" @click="togglePanel">
      <q-icon name="bi-chevron-right"></q-icon>
    </span>
  </div>
  <span
    v-show="modelValue && props.type === 'opened'"
    class="cursor-pointer panel"
    @click="togglePanel"
  >
    <q-icon name="bi-chevron-left"></q-icon>
  </span>
</template>

<style lang="scss">
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
