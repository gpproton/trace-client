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
 * Created At: Wednesday, 27th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Fri May 24 2024
 */

import axios from 'axios';
import { safeValueTransition } from '@parvineyvazov/json-translator/src/modules/helpers.ts';
import { fileTranslator } from './node_modules/@parvineyvazov/json-translator/src/core/json_file.ts';
import {
  type TranslationConfig,
  TranslationModules,
} from './node_modules/@parvineyvazov/json-translator/src/modules/modules.ts';

export const translateWithLibre = async (
  str: string,
  from: string,
  to: string,
): Promise<string> => {
  // consu url = 'https://libretranslate.com';
  const url = 'http://localhost:8585';
  let body = {
    q: safeValueTransition(str),
    source: from,
    target: to,
    format: 'text',
    api_key: '',
    secret: 'YK4VRVW',
  };

  const { data } = await axios.post(`${url}/translate`, body, {
    headers: {
      Origin: url,
    },
  });

  return from.startsWith('@:') ? from : data.translatedText;
};

export async function translateFile(
  objectPath: string,
  from: string,
  to: string[],
  newFileName: string,
) {
  const module = TranslationModules['libre'];
  module.translate = translateWithLibre;
  let config: TranslationConfig = {
    moduleKey: 'libre',
    TranslationModule: module,
    concurrencyLimit: 50,
    fallback: true,
  };

  return fileTranslator(config, objectPath, from, to, newFileName);
}
