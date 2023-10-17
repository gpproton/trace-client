<script lang="ts" setup>
import { useBreadcrumbsStore } from "@/stores/breadcrumbs";
import { storeToRefs } from 'pinia';

interface IProps {
  showIcon?: boolean
}

defineOptions({ name: "BreadCrumbs" })
withDefaults(defineProps<IProps>(), { showIcon: true })

const breadcrumbsStore = useBreadcrumbsStore();
const { breadcrumbs } = storeToRefs(breadcrumbsStore);
</script>

<template>
  <q-breadcrumbs
    class="flex items-center"
    active-color="none"
  >
    <transition-group
      appear
      enter-active-class="animated fadeInRight"
    >
      <template v-for="(breadcrumb, index) in breadcrumbs">
        <q-breadcrumbs-el
          v-if="breadcrumb.title"
          :key="index + breadcrumb.title"
          name="breadcrumb"
          :label="$t(breadcrumb.title)"
          :icon="showIcon ? breadcrumb.icon : undefined"
        >
          <div
            v-if="breadcrumbs.length !== index + 1"
            name="breadcrumb"
            style="margin: 0px 0px 0px 8px"
          >
            /
          </div>
        </q-breadcrumbs-el>
      </template>
    </transition-group>
  </q-breadcrumbs>
</template>
