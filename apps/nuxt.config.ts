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

import { appHeader } from '@trace/shared';
import { createResolver } from '@nuxt/kit';

const resolver = createResolver(import.meta.url);

export default defineNuxtConfig({
  app: appHeader('/', 'Trace'),
  extends: ['../base'],
  modules: ['nuxt3-leaflet', '@nuxt/content', './app.core/app-module'],
  routeRules: {
    '/**': { ssr: false },
    '/docs/**': { ssr: true },
  },
  ssr: false,
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  hooks: {
    'pages:routerOptions'({ files }) {
      files.push({
        path: resolver.resolve('./router.options'),
        optional: true,
      });
    },
  },
  content: {
    // documentDriven: true,
    navigation: {
      fields: ['author', 'publishedAt'],
    },
    sources: {
      content: {
        driver: 'fs',
        prefix: '/docs',
        base: resolver.resolve(__dirname, 'content'),
      },
    },
  },
});
