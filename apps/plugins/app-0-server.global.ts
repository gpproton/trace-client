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
 * Created At: Friday, 29th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 25 2024
 */

import { useServerStore } from '@/stores/app-server';
import { useLoadingStore } from '@trace/base/stores/loading';
import { Workflow } from '@trace/model';
import { appConstants } from '@trace/shared';

export default defineNuxtPlugin(() => {
  const { setLoadingState } = useLoadingStore();
  const { setServerState } = useServerStore();

  setServerState({
    maintenance: false,
    registration: true,
    workflows: [Workflow.Telematics, Workflow.Logistics],
    attributionText: appConstants.company,
    attributionUrl: appConstants.website,
    auth: {
      email: true,
      google: true,
      microsoft: false,
      apple: false,
    },
    profile: {
      id: 'xx-xx-xx-xx-xx',
      name: appConstants.appName,
      logo: '',
      active: true,
      confirmed: true,
      language: 'en',
      domains: ['localhost'],
    },
  });

  setTimeout(() => {
    setLoadingState(false);
  }, 85);
});
