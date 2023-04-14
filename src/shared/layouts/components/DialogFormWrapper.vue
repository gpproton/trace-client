<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import BottomSheet from '@/layouts/navigation/BottomSheet.vue';
import OverlayLoading from './OverlayLoading.vue';

const $q = useQuasar();
const router = useRouter();
interface IProps {
  persistent?: boolean;
  seamless?: boolean;
  position?: 'right' | 'left' | 'top' | 'bottom';
}

const props = withDefaults(defineProps<IProps>(), {
  persistent: true,
  seamless: false,
  position: 'right',
});

const showView = ref(true);
const overlay = ref();
const emits = defineEmits<{
  (eventName: 'form:loading', value: boolean): void;
  (eventName: 'form:hide', value: boolean): void;
  (eventName: 'form:save'): void;
}>();

const setLoadingState = (value: boolean) => {
  overlay.value.setModelValue(value);
  overlay.value.setLoading(value);
  emits('form:loading', value);
};

const triggerHide = () => {
  showView.value = false;
  const value: boolean = showView.value;
  emits('form:hide', value);
};

const triggerSaving = () => {
  setLoadingState(true);
  emits('form:save');
};

watch(showView, () => {
  !showView.value ? router.back() : null;
});

defineExpose({ setLoadingState, triggerHide, triggerSaving });
</script>

<script lang="ts">
export default {
  name: 'DialogFormWrapper',
};
</script>

<template>
  <fragment>
    <!-- Start dessktop form dialog card -->
    <q-dialog
      v-if="$q.platform.is.desktop"
      :persistent="props.persistent"
      :seamless="props.seamless"
      :position="props.position"
      v-model="showView"
      class="hide-scrollbar"
    >
      <q-card class="dialog-card border-radius-md no-scroll">
        <overlay-loading ref="overlay">
          <q-card-actions align="right" class="q-pa-md card-item-button">
            <slot name="actions">
              <q-btn
                size="lg"
                label="Cancel"
                no-caps
                flat
                color="primary"
                class="border-radius-sm q-mx-xs dialog-button-cancel"
                v-close-popup
                @click="triggerHide"
              />
              <q-btn
                size="lg"
                label="Save"
                no-caps
                color="primary"
                text-color="primary-inverted"
                class="border-radius-sm q-mx-xs dialog-button-save"
                @click="triggerSaving"
              />
            </slot>
          </q-card-actions>
          <q-card-section
            class="q-pt-none scroll child q-pb-xl hide-scrollbar overflow-y-auto card-item-content"
          >
            <slot>
              <router-view></router-view>
            </slot>
          </q-card-section>
          <q-space />
        </overlay-loading>
      </q-card>
    </q-dialog>
    <!-- End dessktop form dialog card -->

    <!-- Start mobile form bottom sheet -->
    <bottom-sheet
      v-else
      v-model:visible="showView"
      :click-outside="!props.persistent"
      :threshold="90"
      height="90vh"
    >
      <q-card class="shadow-0 transparent border-radius-md no-scroll">
        <overlay-loading ref="overlay">
          <q-card-section>
            <slot>
              <router-view></router-view>
            </slot>
          </q-card-section>
          <q-card-actions class="q-pa-md q-my-xs">
            <slot name="actions">
              <q-btn
                size="lg"
                label="Save"
                no-caps
                color="primary"
                text-color="primary-inverted"
                class="full-width border-radius-sm"
                @click="triggerSaving"
              />
              <q-btn
                size="lg"
                label="Cancel"
                no-caps
                stretch
                flat
                color="primary"
                class="full-width border-radius-sm"
                @click="triggerHide"
              />
            </slot>
          </q-card-actions>
        </overlay-loading>
      </q-card>
    </bottom-sheet>
    <!-- End mobile form bottom sheet -->
  </fragment>
</template>

<style lang="scss" scoped>
.dialog-card {
  min-width: 500px;
  margin-top: 36px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  height: 90vh;
}

.body--light .dialog-card {
  background-color: var(--q-app-container);
}

.body--dark .dialog-card {
  border: 0.05rem solid var(--q-app-background);
}

.dialog-button-save {
  min-width: 140px !important;
}

.dialog-button-cancel {
  min-width: 100px !important;
}

.card-item-button {
  height: 74px;
}
.card-item-content {
  flex: 1 1 auto;
  height: calc(90vh - 74px);
}
</style>
