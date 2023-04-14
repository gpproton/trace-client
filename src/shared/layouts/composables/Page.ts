import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMeta } from 'quasar';
import { usePageStore, usePageAnimation } from '@/layouts/stores';

export interface IPageContext {
  title?: string;
  description?: string;
  showTitle?: boolean;
  showHeader?: boolean;
  withMobile?: boolean;
  script?: object;
  style?: object;
}

export interface IContext {
  page: IPageContext;
  animateEnter?: string;
  animateLeave?: string;
}

export const setupPage = (options: IContext) => {
  const { page, animateEnter, animateLeave } = options;
  const pageStore = usePageStore();
  const {
    title,
    description,
    showHeader,
    showTitle,
    withMobile,
    script,
    style,
  } = storeToRefs(pageStore);

  const { animateModeEnter, animateModeLeave } = storeToRefs(
    usePageAnimation()
  );

  onBeforeMount(() => {
    const rootTitle = process.env.APP_PAGE_TITLE;

    if (page.title !== undefined) title.value = page.title;
    if (page.description !== undefined) description.value = title.value;
    if (page.showHeader !== undefined) showHeader.value = page.showHeader;
    if (page.showTitle !== undefined) showTitle.value = page.showTitle;
    if (page.withMobile !== undefined) withMobile.value = page.withMobile;
    if (page.script !== undefined) script.value = page.script;
    if (page.style !== undefined) style.value = page.style;
    if (animateEnter !== undefined) animateModeEnter.value = animateEnter;
    if (animateLeave !== undefined) animateModeLeave.value = animateLeave;

    useMeta({
      title: title.value,
      titleTemplate: (title) => `${title} :: ${rootTitle}`,
      meta: {
        description: { name: 'description', content: description.value },
        keywords: { name: 'keywords', content: rootTitle },
        equiv: {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
        ogTitle: {
          property: 'og:title',
          template(ogTitle) {
            return `${ogTitle} :: ${rootTitle}`;
          },
        },
      },
      link: style.value,
      script: script.value,
    });
  });
};
