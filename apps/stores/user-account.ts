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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri Mar 22 2024
 */

import { ref } from 'vue';
import { defineStore } from 'pinia';
import { SessionStorage } from 'quasar';
import type { Permission, User } from '@trace/model';
import { useTagViewStore } from './tag-view';

export const useUserAccountStore = defineStore(
  'userAccount',
  () => {
    const permissions = ref<Permission[]>([
      {
        module: 'default',
        feature: 'default.0',
        actions: { create: true, read: true, update: false, delete: true },
      },
    ]);
    // TODO: Fix pinia session storage issues
    // const accessToken = ref<string | null>();
    const user = ref<User | null>({
      id: 'ac707e42-74c4-4107-beba-4897107bf9f7',
      tenantId: '60dccc53-d969-4bb5-a08b-dcf14feab87c',
      active: true,
      confirmed: true,
      exipry: new Date(),
      username: '',
      email: 'john.doe@drolx.com',
      phone: '+23480123456789',
      roleId: '821f68cd-4b26-4682-ad96-123ac0d30504',
      roleName: 'Default',
      firstName: 'John',
      lastName: 'Doe',
    });

    const getUserName = computed(() => user.value);
    const getUserPermmisions = computed(() => permissions.value);
    const getAccessToken = computed<string | null>(() =>
      SessionStorage.getItem('access_token'),
    );
    const getFirstCharacterOfUserName = computed(() =>
      user.value!.username ? user.value!.username.charAt(0).toUpperCase() : 'X',
    );

    const setUserInfo = (value: User) => (user.value = value);
    const setAccessToken = (value: string) =>
      SessionStorage.set('access_token', value);
    const setUserPermmisions = (values: Permission[]) => {
      const account = user.value;
      permissions.value = values;
      user.value = account;
    };

    const signIn = () => {};

    const signout = () => {
      user.value = null;
      permissions.value = [];
      const tagViewStore = useTagViewStore();
      tagViewStore.removeAllTagView();
      SessionStorage.clear();

      const router = useRouter();
      router.push({ name: 'auth.sign-in' });
    };

    return {
      user,
      getUserName,
      getUserPermmisions,
      getAccessToken,
      getFirstCharacterOfUserName,
      setAccessToken,
      setUserInfo,
      setUserPermmisions,
      signIn,
      signout,
    };
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  },
);
