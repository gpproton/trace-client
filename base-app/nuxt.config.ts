import bootstrapIcons from 'quasar/icon-set/svg-bootstrap-icons'
import materialIcons from 'quasar/icon-set/svg-material-icons'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  ssr: false,
  pwa: {},
  // @ts-ignore
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  css: [
    join(currentDir, './assets/colors.scss'),
    join(currentDir, './assets/qusar-mod.scss')
  ],

  quasar: {
    plugins: [
      'AddressbarColor',
      'AppVisibility',
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    sassVariables: join(currentDir, './assets/main.scss'),
    iconSet: {
      ...bootstrapIcons,
      ...materialIcons,
      colorPicker: bootstrapIcons.colorPicker
    },
    extras: {
      font: 'roboto-font',
      fontIcons: ['bootstrap-icons', 'material-icons'],
      animations: 'all',
    },
  }
})
