<script setup lang="ts">
import { ref, onUnmounted } from 'vue';

const contextOptions = {
  page: {},
};
const form = ref();
const timeout = ref();
const testField1 = ref(null);
const testField2 = ref(null);
const testOptions = ref(['One', 'Two', 'Three']);
const date = ref('2022-05-12 12:44');
const saveForm = () => {
  timeout.value = setTimeout(() => {
    if (true) form.value.triggerHide();
    else form.value.setLoadingState(false);
  }, 3000);
};

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <page-wrapper :options="contextOptions" class="hide-scrollbar">
    <dialog-form-wrapper
      ref="form"
      @form:save="saveForm"
      :persistent="true"
      :seamless="true"
    >
      <q-form
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        class="app-form q-gutter-md hide-scrollbar"
      >
        <div class="text-left q-gutter-nome">
          <div class="text-h6 text-primary">Set Sample Content</div>
          <div class="text-body2 text-accent-more">
            Fill in the required fileds..
          </div>
        </div>
        <div class="row">
          <div class="col q-mr-xs">
            <input-select
              standout="bg-app-background text-accent"
              v-model="testField2"
              :options="testOptions"
              label="Select Number"
            >
            </input-select>
          </div>

          <div class="col q-ml-xs">
            <input-date-time
              v-model="date"
              label="Sample Label"
            ></input-date-time>
          </div>
        </div>
        <input-text
          v-for="item in 12"
          :key="item"
          v-model="testField1"
          :label="'Option ' + item"
        ></input-text>
        <input-select
          standout="bg-app-background text-accent"
          v-model="testField2"
          :options="testOptions"
          label="Select Number"
        >
        </input-select>
        <input-date-time v-model="date" label="Sample Label"></input-date-time>
      </q-form>
    </dialog-form-wrapper>
  </page-wrapper>
</template>
