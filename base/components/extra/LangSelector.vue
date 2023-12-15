<script lang="ts" setup>
import CountryFlag from 'vue-country-flag-next';
import { storeToRefs } from 'pinia';
import { useLanguageStore } from '@/stores/language';

defineOptions({ name: 'LangSelector' });

const localeStore = useLanguageStore();
const { languages, setLocale } = localeStore;
const { locale, getActiveCountry } = storeToRefs(localeStore);
</script>

<template>
  <q-select $="locale" hide-dropdown-icon :options="languages" option-label="name" option-value="value" dense
    borderless color="secondary" emit-value map-options options-dense @update:model-value="setLocale">
    >
    <template #prepend>
      <span class="q-mr-sm">
        <country-flag :country="getActiveCountry" />
      </span>
    </template>
    <template #selected-item="{ opt }">
      <div class="text-secondary text-body1 q-mt-xs">
        {{ opt.name }}
      </div>
    </template>
    <template #option="{ opt, toggleOption }">
      <q-item v-ripple dense clickable :active="locale === opt.value" :focused="locale === opt.value"
        @click="() => toggleOption(opt)">
        <q-item-section avatar>
          <country-flag :country="opt.countryCode" />
        </q-item-section>
        <q-item-section>{{ opt.name }}</q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
