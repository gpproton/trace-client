<script setup lang="ts">
defineOptions({ name: 'ListOption' });

type Option = {
    title: string;
    description: string;
    icon: string;
};

interface IProps {
    items: Option[];
    dense?: boolean;
}

withDefaults(defineProps<IProps>(), {
    dense: false,
});

const { modelValue } = defineModels<{
    modelValue?: ModelOptions<string, { defaultValue: ''; deep: true }>;
}>();
</script>

<template>
    <q-list class="q-mt-xl q-gutter-y-md">
        <q-item @click="() => modelValue = item.title" v-for="(item, index) in items" :key="index" clickable v-ripple
            class="q-pa-md border-radius-sm"
            :class="modelValue === item.title ? 'bordered bg-app-background' : 'bg-app-background-shift'"
            active-class="bg-indigo-3">
            <q-item-section avatar>
                <q-avatar size="3.5rem" class="border-radius-sm" square rounded color="primary" text-color="white"
                    :icon="item.icon" />
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-h6">{{ item.title }}</q-item-label>
                <q-item-label caption lines="2">{{ item.description }}</q-item-label>
            </q-item-section>
            <q-item-section v-if="modelValue === item.title" side>
                <q-icon name="bi-arrow-right" color="primary" />
            </q-item-section>
        </q-item>
    </q-list>
</template>

<style scoped lang="scss">
.bordered {
    border: 0.2rem solid var(--q-primary);
}
</style>
