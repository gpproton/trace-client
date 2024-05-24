/*
 * Copyright (c) 2023 - 2024 drolx Labs
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://trace.ng/licenses/license-1-0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

import type { RouteLocationNormalized, Router } from 'vue-router';
import type { RouteData } from '@trace/base/typings';
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
import { getFirst } from '@trace/base/utils';
import { defineStore, storeToRefs } from 'pinia';
import { Workspace } from '@trace/shared';
import { useUserAuthStore } from './user-auth';

enum removeType {
  Right,
  Left,
  Other,
}

export const useTagViewStore = defineStore(
  'state-tag-view',
  () => {
    const router: Router = useRouter();
    const breakpointStates = useAppBreakpoints();
    const userAuthStore = useUserAuthStore();
    const { isMobile } = storeToRefs(breakpointStates);
    const { getAccessToken } = storeToRefs(userAuthStore);

    const tagViewEnabled = ref(true);
    const tagView = ref<RouteData[]>([]);
    const storedTagView = ref<RouteData[] | null>(null);

    const getTagView = computed(() => tagView.value);
    const setTagView = (value: RouteData[]) => (tagView.value = value);
    const setTagViewEnabled = (value: boolean) =>
      (tagViewEnabled.value = value);
    const getStoredTagView = computed(() => storedTagView.value);
    const setStoredTagView = (value: RouteData[]) =>
      (storedTagView.value = value);

    const addTagView = (to: RouteLocationNormalized) => {
      const tag: RouteData = {
        title: to.meta.title,
        name: to.name,
        fullPath: to.fullPath,
        icon: to.meta.icon,
        keepAlive: to.meta.keepAlive,
        isHidden: to.meta.isHidden,
      };
      if (getFirst(to.query)) {
        tag.title += '：' + getFirst(to.query);
      } else if (getFirst(to.params)) {
        tag.title += '：' + getFirst(to.params);
      }

      if (
        tag.title !== null &&
        tag.title !== undefined &&
        tag.fullPath !== '/' &&
        tag.fullPath.indexOf('#') === -1
      ) {
        const size = tagView.value.length;
        // When entering or refreshing the page for the first time & the current route is not the root route
        if (!size && tag.fullPath !== '/') {
          tagView.value.push(tag);
          return;
        }
        // To avoid adding tagView repeatedly. Construct an array t[] identified by fullPath
        const t = [];
        for (let i = 0; i < size; i++) {
          t.push(tagView.value[i].fullPath);
        }
        // If there is no current route in t[]
        if (t.indexOf(tag.fullPath) === -1) {
          tagView.value.push(tag);
        }
      }
    };

    /**
     * Only remove one tagView
     * @param state
     * @param payload
     */
    const removeATagView = (index: any) => {
      // Record removed routes
      const removedTagView = tagView.value[index].fullPath;
      tagView.value.splice(index, 1);
      // If tagView is empty
      if (tagView.value.length === 0) {
        setStoredTagView([]);
        router.push({ name: 'home' });
      } else {
        // If the last tagView is removed, the route jumps to the current last tagView
        if (
          index === tagView.value.length &&
          window.location.href.indexOf(removedTagView) !== -1
        ) {
          router.push(tagView.value[index - 1].fullPath);
          return;
        }
        // If the first tagView is removed, the route jumps to the next tagView
        if (
          index === 0 &&
          window.location.href.indexOf(removedTagView) !== -1
        ) {
          router.push(tagView.value[0].fullPath);
          return;
        }
        if (window.location.href.indexOf(removedTagView) !== -1) {
          router.push(tagView.value[index - 1].fullPath);
        }
      }
    };

    const removeTagViewByFullPath = (fullPath: string) => {
      const index = tagView.value.findIndex(
        (item) => item.fullPath === fullPath,
      );
      if (index !== -1) {
        removeATagView(index);
      }
    };

    const removeTagViewAt = (index: number) => {
      removeATagView(index);
    };

    /**
     * Remove one side of tagView
     * @param state
     * @param payload
     */
    const removeOnSide = (type: removeType, index: number) => {
      const router: Router = useRouter();
      switch (type) {
        case removeType.Right:
          tagView.value = tagView.value.slice(0, index + 1);
          if (tagView.value.length === 1) {
            router.push(tagView.value[0].fullPath);
          }
          if (tagView.value.length === index + 1) {
            router.push(tagView.value[index].fullPath);
          }
          break;
        case removeType.Left:
          tagView.value = tagView.value.slice(index, tagView.value.length);
          if (tagView.value.length === 1) {
            router.push(tagView.value[0].fullPath);
          }
          if (tagView.value.length <= index) {
            router.push(tagView.value[0].fullPath);
          }
          break;
        case removeType.Other:
          tagView.value = tagView.value.splice(index, 1);
          router.push(tagView.value[0].fullPath);
          break;
        default:
          break;
      }
    };

    const removeTagViewOnLeft = (index: number) => {
      removeOnSide(removeType.Left, index);
    };

    const removeTagViewOnRight = (index: number) => {
      removeOnSide(removeType.Right, index);
    };

    const removeOtherTagView = (index: number) => {
      removeOnSide(removeType.Other, index);
    };

    const removeAllTagView = () => {
      const router: Router = useRouter();
      setTagView([]);
      setStoredTagView([]);
      if (getAccessToken.value) {
        router.push({ name: 'home' });
      }
    };

    watchEffect(() => {
      const isTrackWorkflow = router.currentRoute.value.fullPath.startsWith(
        `/${Workspace.Track}/`,
      );
      if (isMobile.value) {
        setTagViewEnabled(false);
      } else {
        if (isTrackWorkflow) {
          // placeholder on condition
        }
        setTagViewEnabled(true);
      }
    });

    return {
      tagView,
      tagViewEnabled,
      storedTagView,
      getTagView,
      getStoredTagView,
      setTagView,
      setTagViewEnabled,
      setStoredTagView,
      addTagView,
      removeTagViewByFullPath,
      removeTagViewAt,
      removeTagViewOnLeft,
      removeTagViewOnRight,
      removeOtherTagView,
      removeAllTagView,
    };
  },
  {
    persist: {
      paths: ['storedTagView'],
      storage: persistedState.sessionStorage,
    },
  },
);
