/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://opensource.org/license/rpl-1-5
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri Mar 29 2024
 */

import bootstrapIcons from 'quasar/icon-set/svg-bootstrap-icons';
import materialIcons from 'quasar/icon-set/svg-material-icons';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@vite-pwa/nuxt',
  ],
  pwa: {},
  vite: {
    plugins: [svgLoader()],
  },
  macros: {
    setupSFC: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'none',
    },
    storage: 'localStorage',
  },
  css: [
    join(currentDir, './assets/colors.scss'),
    join(currentDir, './assets/qusar-mod.scss'),
  ],
  quasar: {
    plugins: [
      'AddressbarColor',
      'AppVisibility',
      'AppFullscreen',
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
      'Cookies',
      'SessionStorage',
      'Meta',
    ],
    sassVariables: join(currentDir, './assets/main.scss'),
    iconSet: {
      ...bootstrapIcons,
      ...materialIcons,
      colorPicker: bootstrapIcons.colorPicker,
    },
    extras: {
      font: 'roboto-font',
      fontIcons: ['bootstrap-icons', 'material-icons'],
      animations: 'all',
    },
  },
});
