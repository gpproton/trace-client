import * as translator from '@parvineyvazov/json-translator';

// Manual trigger
// jsontt locales/en-US.json -T argos --from en --to fr

let path = './locales/en-US.json';

// @ts-ignore
global.source = translator.Sources.ArgosTranslate;
await translator.translateFile(path, translator.languages.English, [
  translator.languages.Arabic,
  translator.languages.French,
  'zh',
]);
