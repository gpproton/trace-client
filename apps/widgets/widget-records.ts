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
 * Created At: Friday, 22nd Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 14 2024
 */

import { type Workspace } from '@trace/shared';
import LargeWidget from './LargeWidget.vue';
import MediumWidget from './MediumWidget.vue';
import SmallWidget from './SmallWidget.vue';

interface IWidget {
  id: string;
  services?: Workspace[];
  title: string;
  width: number;
  height: number;
  maxSize: number;
  component: string;
}

export const components: any = {
  LargeWidget,
  MediumWidget,
  SmallWidget,
};

export default [
  {
    id: 'large-widget',
    title: 'Large Widget',
    width: 2,
    height: 2,
    maxSize: 2,
    component: 'LargeWidget',
  },
  {
    id: 'medium-widget',
    title: 'medium Widget',
    width: 1,
    height: 2,
    component: 'MediumWidget',
  },
  {
    id: 'small-widget',
    title: 'Small Widget',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
  {
    id: 'small-widget-2',
    title: 'Small Widget 2',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
  {
    id: 'small-widget-3',
    title: 'Small Widget 3',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
  {
    id: 'small-widget-3',
    title: 'Small Widget 3',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
  {
    id: 'small-widget-4',
    title: 'Small Widget 4',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
  {
    id: 'small-widget-5',
    title: 'Small Widget 5',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
  {
    id: 'small-widget-6',
    title: 'Small Widget 6',
    width: 1,
    height: 1,
    component: 'SmallWidget',
  },
] as IWidget[];
