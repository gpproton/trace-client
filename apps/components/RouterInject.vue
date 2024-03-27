<script setup lang="ts">
import { useKeepAliveStore } from '@/stores/keep-alive';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'RouterInject' });

const appStore = useAppStore();
const keepAliveStore = useKeepAliveStore();
const { reloadFlag } = storeToRefs(appStore);
const { getKeepAliveList } = storeToRefs(keepAliveStore);
</script>

<template>
  <router-view v-if="reloadFlag" v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive :max="10" :include="getKeepAliveList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>
