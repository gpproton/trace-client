import { useTagViewStore } from "@/stores/tag-view";
import { useBreadcrumbsStore } from "@/stores/breadcrumbs";
import { useKeepAliveStore } from "@/stores/keep-alive";
import { LoadingBar } from "quasar";
import { storeToRefs } from 'pinia';
import type { RouteLocationNormalized, Router } from "vue-router";
import { constantRoutes } from '@/app/routes';
import type { RouteData } from "@/types/index";

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  const tagViewStore = useTagViewStore();
  const breadCrumbsStore = useBreadcrumbsStore();
  const keepAliveStore = useKeepAliveStore();

  const { setTagView, addTagView } = tagViewStore;
  const { getTagView, getStoredTagView } = storeToRefs(tagViewStore);
  const { setKeepAliveList } = keepAliveStore;
  const { getBreadCrumbs } = storeToRefs(breadCrumbsStore);
  const { setBreadcrumbs } = breadCrumbsStore;

  router.beforeEach((to, from) => {
    LoadingBar.stop();
    LoadingBar.start();
    
    if (to.name != null) {
      // is a public route
      for (let i = 0; i < constantRoutes.length; i++) {
        if (constantRoutes[i].path === to.path) {
          return;
        }
      }
      const storedTagView = (getStoredTagView.value ?? []) as unknown as RouteData[];
      if (
        // @ts-ignore
        getTagView.value.length === 0 &&
        storedTagView.length !== 0
      ) {
        setTagView(storedTagView);
        setKeepAliveList(storedTagView);
      } else if (from.fullPath !== to.fullPath) {
        addTagView(to);
      }
      
      setBreadcrumbs(to.matched, to.query);
      handleKeepAlive(to);
    }
  });

  router.afterEach(() => {
    LoadingBar.stop();
  });
});

/**
 * Handle redundant layout: router-view and keep the current component under the first layer index <router-view>
 * This method cannot filter the on-demand loading <layout> used for nested routing
 * @param to
 */
function handleKeepAlive(to: RouteLocationNormalized) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i];
      const isLayout = element.components?.default.name?.toString();
      if (typeof isLayout === 'string' && isLayout.includes('Layout')) {
        to.matched.splice(i, 1);
        handleKeepAlive(to);
      }
    }
  }
}
