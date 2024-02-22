<script setup lang="ts">
import { useBreadcrumbsStore } from "@/stores/breadcrumbs";
import type { RouteData } from "@trace/base/types/index";
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
  <q-breadcrumbs class="flex items-center text-primary" active-color="none">
    <transition-group appear enter-active-class="animated fadeInRight">
      <template v-for="(item, index) in getBreadCrumbs">
        <q-breadcrumbs-el v-if="item.title" name="breadcrumb" :key="index + item.title" :label="$t(item.title)"
          :icon="showIcon ? item.icon : undefined">
          <div v-if="getBreadCrumbs.length !== index + 1" name="breadcrumb" style="margin: 0px 0px 0px 8px">
            {{ '/' }}
          </div>
        </q-breadcrumbs-el>
      </template>
    </transition-group>
  </q-breadcrumbs>
</template>
