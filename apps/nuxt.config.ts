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
 * Modified At: Thu May 16 2024
 */

import { appHeader } from '@trace/shared';
import { createResolver } from '@nuxt/kit';

const resolver = createResolver(import.meta.url);

export type ContentItem = {
  driver: string;
  prefix: string;
  base: string;
};

export const addDocPath = (name: string): ContentItem => ({
  driver: 'fs',
  prefix: `/docs/${name}`,
  base: resolver.resolve(__dirname, `docs/${name}`),
});

export default defineNuxtConfig({
  app: appHeader('/', 'Trace'),
  extends: ['../base'],
  modules: ['nuxt3-leaflet', '@nuxt/content', './app.core/app-module'],
  routeRules: {
    '/docs**': { ssr: true },
    '/api/service': { proxy: import.meta.env.SERVER_API },
    '/api/files': { proxy: import.meta.env.SERVER_FILES },
    '/api/routing': { proxy: import.meta.env.SERVER_ROUTING },
    '/api/geocoding': { proxy: import.meta.env.SERVER_GEOCODING },
  },
  ssr: false,
  hooks: {
    'pages:routerOptions'({ files }) {
      files.push({
        path: resolver.resolve('./app/router'),
        optional: false,
      });
    },
  },
  content: {
    navigation: {
      fields: ['author', 'publishedAt'],
    },
    sources: {
      admin: addDocPath('admin'),
      api: addDocPath('api'),
      development: addDocPath('development'),
      features: addDocPath('features'),
      partners: addDocPath('partners'),
      portal: addDocPath('portal'),
    },
  },
});
