/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace License
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
 * Modified At: Sat Mar 16 2024
 */

import { getAuthenticatedRoutes, type Route } from "@trace/base/types";
import { routes } from '@/app/router.options';
import type { ServiceVariant } from "@trace/shared";

export const authtenticatedRoutes: Route[] = getAuthenticatedRoutes(routes, true);
export const authtenticatedRoutesChildren: Route[] = [];
export const anonymousRoutes: Route[] = getAuthenticatedRoutes(routes, false);
