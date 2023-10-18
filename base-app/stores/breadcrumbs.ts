import { defineStore } from 'pinia';
import { RouteData } from "@/types/index";
import { RouteRecordNormalized, LocationQuery } from "vue-router";
import { getFirst } from "@/utils/index";

export const useBreadcrumbsStore = defineStore(
  'breadCrumbs',
  () => {
    const breadcrumbs = ref<RouteData[]>([]);
    const getBreadCrumbs = computed(() => breadcrumbs.value);
    const setBreadcrumbs = (matched: RouteRecordNormalized[], query: LocationQuery): void => {
      const temp = [];
      for (let i = 0; i < matched.length; i++) {
        const breadcrumb: RouteData = {
          title: matched[i].meta.title,
          name: matched[i].name,
          fullPath: matched[i].path,
          icon: matched[i].meta.icon,
          keepAlive: matched[i].meta.keepAlive,
        };
        temp.push(breadcrumb);
      }

      const last = temp.length - 1
      if (Object.keys(query).length)
        temp[last].title += '：' + getFirst(query)

      breadcrumbs.value = temp;
    }

    return {
      breadcrumbs,
      getBreadCrumbs,
      setBreadcrumbs
    };
  }
);
