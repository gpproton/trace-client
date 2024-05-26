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
 * Modified At: Fri May 24 2024
 */

import type { Router } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserAuthStore } from '@/stores/user-auth';

export default defineNuxtPlugin(() => {
  const router: Router = useRouter();
  const userAccount = useUserAuthStore();
  const { getAccessToken } = storeToRefs(userAccount);

  router.beforeEach((to, from, next) => {
    if (getAccessToken.value) {
      if (to.meta.permission === false) {
        next();
      } else if (to.meta.permission === 'auth') {
        next({ name: 'work-spaces' });
      } else {
        next();
        // TODO: page permission
        // next({ name: 'un-authorized', replace: true });
      }
    } else {
      if (to.meta.permission === false || to.meta.permission === 'auth') {
        next();
      } else {
        next({ name: 'auth.sign-in', replace: true });
      }
    }
  });
});
