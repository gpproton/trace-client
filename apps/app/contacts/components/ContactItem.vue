<template>
  <q-item clickable>
    <q-item-section avatar>
      <q-avatar color="secondary" text-color="white">
        <span v-if="avatar === undefined">XA</span>
        <img v-else :src="avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ name }}</q-item-label>
      <q-item-label caption lines="2">
        <span class="text-weight-bold">{{ position }}</span>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
interface IProps {
  avatar?: string;
  name: string;
  position: string;
}
defineOptions({ name: 'ContactItem' });
defineProps<IProps>();
</script>

<style scoped></style>
