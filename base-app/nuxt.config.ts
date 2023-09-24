import bootstrapIcons from 'quasar/icon-set/svg-bootstrap-icons'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  ssr: false,
  pwa: {},
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    'nuxt-quasar-ui',
    'nuxt-svgo',
    'nuxt3-leaflet',
    // '@nuxtjs/apollo',
    // '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
  css: [
    join(currentDir, './assets/colors.scss'),
    join(currentDir, './assets/qusar-mod.scss'),
    join(currentDir, './assets/leaflet.scss')
  ],
  svgo: {
    global: false,
    autoImportPath: false
  },
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
    sassVariables: join(currentDir, './assets/main.scss'),  //'~/assets/main.scss',
    iconSet: {
      ...bootstrapIcons,
      colorPicker: bootstrapIcons.colorPicker
    },
    extras: {
      font: 'roboto-font',
      fontIcons: ['bootstrap-icons'],
      animations: 'all',
    },
  }
})
