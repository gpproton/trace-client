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
 * Created At: Friday, 15th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon May 20 2024
 */

import * as LocaleAction from './lib/action.ts';
import * as LocacleAuth from './lib/auth.ts';
import * as LocaleLayout from './lib/layout.ts';
import * as LocaleRouter from './lib/router.ts';
import * as LocaleOnboard from './lib/on-board.ts';
import * as LocaleShared from './lib/shared.ts';
import * as LocaleSettings from './lib/settings.ts';

export type CountryOption = {
  countryCode: string;
  name: string;
  value: string;
};

export const defaultTranslation = {
  action: LocaleAction.default,
  auth: LocacleAuth.default,
  layout: LocaleLayout.default,
  router: LocaleRouter.default,
  onboard: LocaleOnboard.default,
  shared: LocaleShared.default,
  settings: LocaleSettings.default,
};

export const defaultLanguage = 'en-US';
export default defaultTranslation;
export const languageSelection: CountryOption[] = [
  { countryCode: 'AE', name: 'العربية', value: 'ar' },
  { countryCode: 'US', name: 'English', value: defaultLanguage },
  { countryCode: 'FR', name: 'Français', value: 'fr' },
  { countryCode: 'CN', name: '中文', value: 'zh' },
];
