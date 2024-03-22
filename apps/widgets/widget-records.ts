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
 * Created At: Friday, 22nd Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri Mar 22 2024
 */

import { type ServiceVariant } from '@trace/shared';
import LargeWidget from './LargeWidget.vue';
import MediumWidget from './MediumWidget.vue';
import SmallWidget from './SmallWidget.vue';

interface IWidget {
  id: string;
  services?: ServiceVariant[];
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
] as IWidget[];
