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
 * Created At: Wednesday, 20th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri Mar 22 2024
 */

import { defineStore } from 'pinia';
import { useMeta } from 'quasar';

export interface IPageContext {
  title?: string;
  description?: string;
  script?: object;
  style?: object;
}
export interface IContext {
  page: IPageContext;
  animateEnter?: string;
  animateLeave?: string;
}

export const usePageStore = defineStore('page-state', () => {
  const title = ref('Page Default');
  const description = ref('');
  const script = ref({});
  const style = ref({});

  const setupPage = (options: IPageContext) => {
    // const rootTitle = process.env.PAGE_TITLE;
    title.value = options.title ?? 'Default';
    description.value = title.value;
    script.value = options.script ?? {};
    style.value = options.style ?? {};

    useMeta({
      title: title.value,
      titleTemplate: (title) => `${title} :: Trace`,
      link: style.value,
      script: script.value,
    });
  };

  return {
    title,
    description,
    script,
    style,
    setupPage,
  };
});
