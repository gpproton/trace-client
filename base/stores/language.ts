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
 * Modified At: Sat May 25 2024
 */

import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { languageSelection } from '@trace/locales';

export const useLanguageStore = defineStore(
  'state-language',
  () => {
    const { locale, locales, setLocale } = useI18n();
    const languages = computed(() => languageSelection);
    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });

    const language = ref<string>();
    const getLocale = computed(() => language.value);
    const getActiveCountry = computed<string>(() => {
      const value = languageSelection.find(
        (item) => item.value === locale.value,
      );
      return value?.countryCode ?? 'US';
    });

    const localeUpdate = (value: string) => {
      setLocale(value);
      language.value = value;
    };

    const bootstrapLocale = () => {
      if (language.value !== undefined) locale.value = language.value;
    };

    return {
      locale,
      language,
      languages,
      availableLocales,
      getLocale,
      getActiveCountry,
      localeUpdate,
      bootstrapLocale,
    };
  },
  {
    share: {
      enable: true,
      initialize: true,
    },
    persist: {
      paths: ['language'],
      storage: persistedState.cookies,
    },
  },
);
