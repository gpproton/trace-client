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
 * Created At: Thursday, 25th Apr 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu Apr 25 2024
 */

interface ImportMetaEnv {
  readonly APP_NAME: string;
  readonly APP_DESCRIPTION: string;
  readonly APP_COLOR: string;

  // App Secrets
  readonly APP_SECRET: string;
  readonly GOOGLE_API_KEY: string;
  readonly MAPBOX_ACCESS_TOKEN: string;

  // Server API
  readonly SERVER_API: string;
  readonly SERVER_STORAGE: string;
  readonly SERVER_ROUTING: string;
  readonly SERVER_GEOCODING: string;

  // Map Options
  readonly MAP_LAYER: string;
  readonly MAP_CENTER: string;
  readonly MAP_BOUNDS: string;
  readonly MAP_ZOOM: number;
  readonly MAP_MIN_ZOOM: number;
  readonly MAP_MAX_ZOOM: number;
  readonly MAP_SELECT_ZOOM: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
