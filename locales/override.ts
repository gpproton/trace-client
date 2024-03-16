import { fileTranslator } from './node_modules/@parvineyvazov/json-translator/src/core/json_file.ts';
import { type TranslationConfig, TranslationModules } from './node_modules/@parvineyvazov/json-translator/src/modules/modules.ts';

export async function translateFile(
  objectPath: string,
  from: string,
  to: string[],
  newFileName: string
) {
  let config: TranslationConfig = {
    moduleKey: 'libre',
    TranslationModule: TranslationModules['libre'],
    concurrencyLimit: 5,
    fallback: true,
  };

  return fileTranslator(config, objectPath, from, to, newFileName);
}
