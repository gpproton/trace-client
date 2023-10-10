import bootstrapIcons from 'quasar/icon-set/svg-bootstrap-icons'
import materialIcons from 'quasar/icon-set/svg-material-icons'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
// TODO: Mapbox refrence
// https://gitlab.com/relief-melone/vue-mapbox-ts/-/blob/master/src/services/MapboxDrawControl.ts?ref_type=heads
// https://github.com/studiometa/vue-mapbox-gl/blob/develop/packages/vue-mapbox-gl/components/MapboxMap.vue
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
    // '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
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
