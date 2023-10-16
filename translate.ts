import * as translator from '@parvineyvazov/json-translator';

// Manual trigger
// jsontt locales/en-US.json -T argos --from en --to fr

let path = './locales/en.json';

// @ts-ignore
global.source = translator.Sources.ArgosTranslate;
await translator.translateFile(path, translator.languages.English, [
  translator.languages.Arabic,
  translator.languages.French,
  // translator.languages.Chinese_Traditional,
  'zh',
  // translator.languages.German,
  // translator.languages.Hindi,
  // translator.languages.Italian,
  // translator.languages.Japanese,
  // translator.languages.Korean,
  // translator.languages.Russian,
  // translator.languages.Spanish,
]);
