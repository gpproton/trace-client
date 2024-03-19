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
