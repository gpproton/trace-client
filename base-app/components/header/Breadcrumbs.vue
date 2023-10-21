<script setup lang="ts">
import { useBreadcrumbsStore } from "@/stores/breadcrumbs";
import { storeToRefs } from 'pinia';

defineOptions({ name: 'BreadCrumbs' });

interface IProps {
  showIcon?: boolean
}

withDefaults(defineProps<IProps>(), { showIcon: true })

const breadcrumbsStore = useBreadcrumbsStore();
const { getBreadCrumbs } = storeToRefs(breadcrumbsStore);
</script>

<template>
  <q-breadcrumbs class="flex items-center" active-color="none">
    <transition-group appear enter-active-class="animated fadeInRight">
      <template v-for="(breadcrumb, index) in getBreadCrumbs">
        <q-breadcrumbs-el v-if="breadcrumb.title" :key="index + breadcrumb.title" name="breadcrumb"
          :label="$t(breadcrumb.title)" :icon="showIcon ? breadcrumb.icon : undefined">
          <div v-if="getBreadCrumbs.length !== index + 1" name="breadcrumb" style="margin: 0px 0px 0px 8px">
            {{ '/' }}
          </div>
        </q-breadcrumbs-el>
      </template>
    </transition-group>
  </q-breadcrumbs>
</template>
