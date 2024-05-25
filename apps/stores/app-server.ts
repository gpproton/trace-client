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
 * Created At: Wednesday, 15th May 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

import IconGoogle from '@trace/base/assets/icons/brands/google.svg?url';
import IconMicrosoft from '@trace/base/assets/icons/brands/microsoft.svg?url';
import IconApple from '@trace/base/assets/icons/brands/apple.svg?url';
import type { Tenant, Workflow } from '@trace/model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ServerAuthItem = 'email' | 'google' | 'microsoft' | 'apple';
export type ServerState = {
  maintenance?: boolean;
  registration?: boolean;
  profile?: Tenant;
  workflows?: Workflow[];
  attributionText?: string;
  attributionUrl?: string;
  auth: {
    email: boolean;
    google?: boolean;
    microsoft?: boolean;
    apple?: boolean;
  };
};

export const useServerStore = defineStore('state-server', () => {
  const serverState = ref<ServerState>({
    registration: false,
    auth: {
      email: true,
      google: false,
      microsoft: false,
      apple: false,
    },
  });

  const getTenantProfile = computed<Tenant | undefined>(
    () => serverState.value.profile,
  );
  const getRegistrationChoice = computed(() => serverState.value.registration);
  const getTenantName = computed<string | undefined>(
    () => serverState?.value?.profile?.name,
  );
  const getAttribution = computed<string | undefined>(
    () => serverState?.value.attributionText,
  );
  const getAttributionUrl = computed<string | undefined>(
    () => serverState?.value.attributionUrl,
  );
  const getWorkflow = computed<Workflow[] | undefined>(
    () => serverState?.value.workflows,
  );
  const getServerState = computed(() => serverState.value);
  const setServerState = (value: ServerState) => (serverState.value = value);

  return {
    getTenantProfile,
    getRegistrationChoice,
    getTenantName,
    getAttribution,
    getAttributionUrl,
    getWorkflow,
    getServerState,
    setServerState,
  };
});

export const socialLogins: Array<{
  icon: string;
  title: ServerAuthItem;
}> = [
  {
    icon: IconGoogle,
    title: 'google',
  },
  {
    icon: IconMicrosoft,
    title: 'microsoft',
  },
  {
    icon: IconApple,
    title: 'apple',
  },
];
