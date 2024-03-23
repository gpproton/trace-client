<template>
  <q-item v-ripple clickable>
    <q-item-section avatar top>
      <q-avatar :icon="icon" color="grey-2" :text-color="textColor" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ value }}</q-item-label>
      <q-item-label caption class="text-grey-8">{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
interface IProps {
  icon: string;
  textColor: string;
  value?: string;
  label: string;
}

defineOptions({ name: 'ContactDetailItem' });

defineProps<IProps>();
</script>

<style scoped></style>
