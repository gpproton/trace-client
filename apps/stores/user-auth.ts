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
 * Created At: Friday, 17th May 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 25 2024
 */

import { ref, watchEffect, onMounted, onUnmounted } from 'vue';
import { defineStore } from 'pinia';
import type { Router } from '@/.nuxt/vue-router-stub';
import { useUserAccountStore } from './user-account';
import { useTagViewStore } from './tag-view';
import type { ActionState } from '@trace/model';

export const useUserAuthStore = defineStore(
  'state-authentication',
  () => {
    const userAccountStore = useUserAccountStore();
    const { removeAllTagView } = useTagViewStore();
    const { clearAllUserState, setUserInfo } = userAccountStore;

    const router: Router = useRouter();
    const timeout = ref();
    const authTimeout = ref();
    const allInterval = ref();
    const loading = ref<boolean>(false);
    const accessToken = ref<string | null>();
    const getAccessToken = computed(() => accessToken.value);
    const getLoading = computed(() => loading.value);

    const setAccessToken = (value: string | null) =>
      (accessToken.value = value);

    const signIn = (auth: { username: string; password: string }) => {
      loading.value = true;
      authTimeout.value = setTimeout(() => {
        if (auth.username === 'dev' && auth.password === 'dev') {
          setUserInfo({
            id: 'ac707e42-74c4-4107-beba-4897107bf9f7',
            tenantId: '60dccc53-d969-4bb5-a08b-dcf14feab87c',
            active: true,
            confirmed: true,
            exipry: new Date(),
            username: 'jonedoe',
            email: 'john.doe@trace.ng',
            phone: '+23480123456789',
            roleId: '821f68cd-4b26-4682-ad96-123ac0d30504',
            roleName: 'default',
            firstName: 'John',
            lastName: 'Doe',
          });
          setAccessToken('xx-xx-xx-xx');

          console.log('Completed dev login');
          router.replace({ name: 'work-spaces' });
        } else {
          console.log('Something went wrong');
        }
        loading.value = false;
      }, 1500);
    };

    const signOut = () => {
      setAccessToken(null);
      router.replace({ name: 'auth.sign-in' });

      timeout.value = setTimeout(() => {
        clearAllUserState();
        removeAllTagView();
      }, 2500);
    };

    const checkAuthState = (
      permission: boolean | 'auth' | ActionState | undefined,
    ) => {
      if (router !== undefined) {
        // forced sign-out
        if (
          getAccessToken.value === null &&
          permission !== false &&
          permission !== 'auth'
        ) {
          router.replace({ name: 'auth.sign-in' });
        }

        // ensure signed-in
        if (getAccessToken.value !== null && permission === 'auth') {
          router.replace({ name: 'work-spaces' });
        }
      }
    };

    watchEffect(() => {
      const permission = router.currentRoute.value.meta.permission;
      if (
        getAccessToken.value === null ||
        typeof getAccessToken.value === 'string'
      ) {
        checkAuthState(permission);
      }
    });

    const registerLifecyces = () => {
      onMounted(() => {
        allInterval.value = setInterval(() => {
          const permission = router.currentRoute.value.meta.permission;
          checkAuthState(permission);
        }, 10000);
      });
      onUnmounted(() => {
        clearInterval(allInterval.value);
        clearTimeout(authTimeout.value);
        clearTimeout(timeout.value);
      });
    };

    return {
      getLoading,
      accessToken,
      getAccessToken,
      checkAuthState,
      setAccessToken,
      signIn,
      signOut,
      registerLifecyces,
    };
  },
  {
    share: {
      enable: true,
    },
    persist: {
      paths: ['accessToken'],
      storage: persistedState.cookies,
    },
  },
);
