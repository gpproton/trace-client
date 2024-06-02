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
 * Created At: Saturday, 1st Jun 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Jun 02 2024
 */

import { defineNuxtModule, addPlugin, addComponentsDir, installModule, createResolver } from '@nuxt/kit';
import bootstrapIcons from 'quasar/icon-set/svg-bootstrap-icons';
import materialIcons from 'quasar/icon-set/svg-material-icons';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@trace/theme',
    configKey: 'theme',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/plugin'));
    addComponentsDir({
      path: resolve('./runtime/components')
    });

    _nuxt.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push({
        dir: resolve('./runtime/public'),
        maxAge: 60 * 60 * 24 * 365 // 1 year
      })
    });

    _nuxt.options.css.push(resolve('./runtime/styles/colors.scss'));
    _nuxt.options.css.push(resolve('./runtime/styles/qusar-mod.scss'));

    await installModule('nuxt-quasar-ui', {
      cssAddon: true,
      plugins: ['AppVisibility', 'Dialog', 'Notify', 'Dark', 'Cookies'],
      sassVariables: resolve('./runtime/styles/main.scss'),
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
    });

  },
})
