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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 18 2024
 */

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Permission, User } from '@trace/model';

export const useUserAccountStore = defineStore(
  'state-user-account',
  () => {
    const permissions = ref<Permission[]>([
      {
        module: 'default',
        feature: 'default.0',
        actions: { create: true, read: true, update: false, delete: true },
      },
    ]);

    const user = ref<User | null>(null);

    const getUser = computed(() => user.value);
    const getFullname = computed<string>(
      () => `${user.value?.firstName} ${user.value?.lastName}`,
    );
    const getEmail = computed<string>(() => `${user.value?.email}`);
    const getUserPermmisions = computed(() => permissions.value);
    const getProfileInitials = computed(() => {
      const char0 = user.value?.firstName.charAt(0) ?? 'x';
      const char1 = user.value?.lastName.charAt(0) ?? 'x';

      return `${char0 + char1}`.toUpperCase();
    });

    const setUserInfo = (value: User) => (user.value = value);
    const setUserPermmisions = (values: Permission[]) => {
      const account = user.value;
      permissions.value = values;
      user.value = account;
    };

    const clearAllUserState = () => {
      user.value = null;
      permissions.value = [];
    };

    return {
      user,
      permissions,
      getUser,
      getFullname,
      getEmail,
      getUserPermmisions,
      getProfileInitials,
      setUserInfo,
      setUserPermmisions,
      clearAllUserState,
    };
  },
  {
    share: {
      enable: true,
    },
    persist: {
      paths: ['user'],
      storage: persistedState.sessionStorage,
    },
  },
);
