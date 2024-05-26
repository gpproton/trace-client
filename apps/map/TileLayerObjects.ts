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
 * Created At: Saturday, 18th May 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun May 19 2024
 */
import type { ITileLayer } from './MapTypes';

const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const TileLayers: Array<ITileLayer> = [
  {
    id: 'open.street',
    name: 'Open Street',
    google: false,
    visible: false,
    attribution: '',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    id: 'mapbox.streets',
    name: 'MapBox',
    google: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },
  // Traffic: navigation-day-v1
  {
    id: 'mapbox.satellite',
    name: 'MapBox ST',
    google: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },
  // Traffic: include with addGoogleLayer
  // {
  //   id: 'google.street',
  //   name: 'Google',
  //   google: true,
  //   layerType: 'TrafficLayer',
  //   visible: false,
  //   options: {
  //     type: 'roadmap',
  //     maxZoom: 21,
  //   },
  // },
  // {
  //   id: 'google.satellite',
  //   name: 'Google ST',
  //   google: true,
  //   layerType: 'TrafficLayer',
  //   visible: false,
  //   options: {
  //     type: 'hybrid',
  //     maxZoom: 21,
  //   },
  // },
];

export default TileLayers;
