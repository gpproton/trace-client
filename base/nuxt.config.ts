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

import bootstrapIcons from 'quasar/icon-set/svg-bootstrap-icons';
import materialIcons from 'quasar/icon-set/svg-material-icons';
import svgLoader from 'vite-svg-loader';
import { splitVendorChunkPlugin } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { appConstants } from '@trace/shared';

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,
  },
  experimental: {
    watcher: 'chokidar',
  },
  nitro: {
    prerender: {
      concurrency: 250,
      interval: 100,
    },
  },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/image',
  ],
  pwa: {
    registerWebManifestInRouteRules: true,
    srcDir: 'public',
    minify: true,
    registerType: 'autoUpdate',
    client: {
      installPrompt: true,
      registerPlugin: true,
    },
    pwaAssets: {
      image: 'public/icon.svg',
      preset: 'minimal',
    },
    manifestFilename: 'manifest.webmanifest',
    manifest: {
      name: 'Trace Demo',
      short_name: appConstants.appName,
      lang: 'en',
      theme_color: '#3949ab',
      background_color: '#ffffff',
      description: 'Trace demo instance',
    },
  },
  macros: {
    setupSFC: true,
  },
  vite: {
    plugins: [svgLoader(), splitVendorChunkPlugin()],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
  },
  css: [
    join(currentDir, './assets/colors.scss'),
    join(currentDir, './assets/qusar-mod.scss'),
  ],
  quasar: {
    cssAddon: true,
    plugins: ['AppVisibility', 'Dialog', 'Notify', 'Dark', 'Cookies'],
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
