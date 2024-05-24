<script lang="ts" setup>
import { computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTagViewStore } from '@/stores/tag-view';
import { useKeepAliveStore } from '@/stores/keep-alive';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'TagView' });

const route = useRoute();
const tagViewStore = useTagViewStore();
const keepAliveStore = useKeepAliveStore();
const { setKeepAliveList } = keepAliveStore;
const themeStore = useThemeStore();
const { activeTextColor, activeBgColor } = storeToRefs(themeStore);
const { tagViewEnabled } = storeToRefs(tagViewStore);

const removeAllTagView = () => {
  tagViewStore.removeAllTagView();
};

const removetagViewAt = (i: number) => {
  tagViewStore.removeTagViewAt(i);
};

const removetagViewOnRight = (i: number) => {
  tagViewStore.removeTagViewOnRight(i);
};

const removetagViewOnLeft = (i: number) => {
  tagViewStore.removeTagViewOnLeft(i);
};

const removeOthertagView = (i: number) => {
  tagViewStore.removeOtherTagView(i);
};

const tagViewClass = computed(() => {
  return (path: any) => {
    return route.fullPath === path ? 'tagView tagActive' : 'tagView';
  };
});

onUnmounted(() => {
  if (tagViewEnabled.value) {
    unSubscribe();
  }
});

const unSubscribe = tagViewStore.$subscribe((mutation, state) => {
  setKeepAliveList(state.tagView);
  tagViewStore.setStoredTagView(state.tagView);
});
</script>

<template>
  <div
    class="row"
    :style="{
      margin: !$q.screen.gt.sm ? '0px 3px 0px 3px' : '0px 15px 0px 5px',
    }"
  >
    <q-tabs
      class="tagViewBase col-12 gt-sm"
      align="left"
      active-color="white"
      active-class="tagActive"
      dense
      swipeable
      inline-label
      indicator-color="transparent"
      :breakpoint="0"
    >
      <q-route-tab to="/" :class="tagViewClass('/')" flat dense no-caps>
        <q-icon size="1.1rem" name="bi-ui-checks-grid" />
        <div class="line-limit-length">
          {{ $t('router.work-spaces') }}
        </div>
      </q-route-tab>
      <template
        v-for="(tag, i) in tagViewStore.tagView"
        :key="tag.fullPath + i"
      >
        <q-route-tab
          :to="tag.fullPath"
          :class="tagViewClass(tag.fullPath)"
          flat
          dense
          no-caps
        >
          <q-icon size="1.1rem" :name="tag.icon" />
          <div class="line-limit-length">
            {{ $t(tag.title) }}
          </div>
          <q-btn
            class="tagView-remove-icon"
            style="display: inline-flex"
            round
            size="0.45em"
            flat
            icon="close"
            @click.prevent.stop="removetagViewAt(i)"
          />
          <q-menu touch-position context-menu>
            <q-list dense>
              <q-item v-close-popup clickable>
                <q-item-section @click="removetagViewOnRight(i)">
                  Close Right
                </q-item-section>
              </q-item>
              <q-item v-close-popup clickable>
                <q-item-section @click="removetagViewOnLeft(i)">
                  Close Left
                </q-item-section>
              </q-item>
              <q-item v-close-popup clickable>
                <q-item-section @click="removeOthertagView(i)">
                  Close Other
                </q-item-section>
              </q-item>
              <q-item v-close-popup clickable>
                <q-item-section @click="removeAllTagView()">
                  Close All
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-route-tab>
      </template>
    </q-tabs>
  </div>
</template>

<style lang="scss" scoped>
.tagViewBase {
  .tagView {
    margin: 4px 3px 2px 3px;
    min-height: 20px;
    padding: 0 10px;
    border-style: solid;
    border-width: 1px;
    border-color: $grey-4;
    border-radius: 4px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary;
  }

  .tagActive {
    font-weight: bold;
    color: v-bind(activeTextColor) !important;
    background: v-bind(activeBgColor) !important;
  }
}

.tagView-remove-icon {
  // font-size: .7rem;
  // border-radius: 0.2rem;
  font-weight: bold;
  opacity: 0.58;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
}

.line-limit-length {
  margin: 0px 5px 0px 7px;
  overflow: hidden;
  max-width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
