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
 * Modified At: Sat May 18 2024
 */

export interface ITileLayer {
  id: string;
  name: string;
  visible: boolean;
  attribution?: string;
  url?: string;
  google: boolean;
  layerType?: string;
  options?: any;
}

export interface IMapOptions {
  zoomSnap: number;
  zoomControl: boolean;
  attributionControl: boolean;
  layerId: string;
  zoom: number;
  minZoom: number;
  maxZoom: number;
  center: Array<number>;
  maxBounds: Array<number>;
  selectionZoom: number;
}

export interface IMapState {
  currentTileLayer: null | ITileLayer;
  mapRefrence: any;
  mapInstance: any;
  minimumZoom: number;
  maximumZoom: number;
  currentZoomValue: number;
  currentZoom: number;
  currentCenterValue: Array<number>;
  currentCenter: Array<number>;
  measurmentUnit: string;
  mapTiles: Array<ITileLayer>;
  showTooltip: boolean;
  mapOptions: IMapOptions;
  onInitialize: () => void;
  onMapReady(event: any): void;
  onCenterUpdate(center: Array<number>): void;
  onZoomUpdate(zoom: number): void;
  onMarkerActions(): void;
  onMapZoomStart(event: any): void;
  onMapZoomEnd(event: any): void;
}
