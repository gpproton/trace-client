/* eslint-env node */
const config = require('./app.config');
const { configure } = require('quasar/wrappers');
const path = require('path');
const Components = require('unplugin-vue-components/vite');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const commonjs = require('vite-plugin-commonjs').default;
const svgLoader = require('vite-svg-loader');

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      warnings: true,
      errors: true
    },

    preFetch: true,

    boot: [
      'i18n',
      'axios',
      'addressbar-color',
      'overlay',
      'form-factor-redirect',
      'initialize-stores',
      'color-loader',
    ],

    css: [
      'mixins.scss',
      'colors.scss',
      'main.scss',
      'qusar-mod.scss',
      'leaflet.scss',
    ],

    extras: [
      'roboto-font',
      'bootstrap-icons',
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },

      vueRouterMode: 'history',
      env: config,
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,
      // rebuildCache: true,
      // publicPath: '/',
      // analyze: true,
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir
      // extendViteConf (viteConf) {},
      // viteVuePluginOptions: {},

      vitePlugins: [
        [require('@intlify/unplugin-vue-i18n').default, {
            include: path.resolve(__dirname, './src/i18n/**'),
          },
        ],
        svgLoader(),
        Components({
          dts: true,
          dirs: ['src/shared/components', 'src/shared/pages', 'src/shared/layouts/components/'],
          extensions: ['vue'],
          deep: false,
          directoryAsNamespace: false,
          exclude: [/node_modules/, /\.git/, /\.quasar/, /\.dist/],
        }),
        tsconfigPaths(),
        commonjs(),
      ]
    },

    devServer: {
      open: false,
      port: config.PORT,
      proxy: {
        // '/graphql': {
        //   target: config.SERVER_API_ROOT,
        //   rewrite: (pathValue) => pathValue.replace(/^\/graphql\//, ''),
        //   changeOrigin: true,
        //   headers: {
        //     'Accept': '*/*',
        //   }
        // },
        // '/service/storage': {
        //   target: config.SERVER_API_STORAGE,
        //   rewrite: (pathValue) => pathValue.replace(/^\/service\/storage\//, ''),
        //   changeOrigin: true,
        //   headers: {
        //     'Accept': '*/*',
        //   }
        // },
        // '/service/routing': {
        //   target: config.SERVER_API_ROUTING,
        //   rewrite: (pathValue) => pathValue.replace(/^\/service\/routing\//, ''),
        //   changeOrigin: true,
        //   headers: {
        //     'Accept': '*/*',
        //   }
        // },
        // '/service/geocoding': {
        //   target: config.SERVER_API_GEOCODING,
        //   rewrite: (pathValue) => pathValue.replace(/^\/service\/geocoding\//, ''),
        //   changeOrigin: true,
        //   headers: {
        //     'Accept': '*/*',
        //   }
        // },
      }
    },

    framework: {
      config: {},
      iconSet: 'bootstrap-icons',
      // lang: 'en-US', // Quasar language pack
      // components: [],
      // directives: [],
      plugins: [
        'Meta',
        'AddressbarColor',
        'AppVisibility',
        'BottomSheet',
        'Cookies',
        'Dialog',
        'Loading',
        'LocalStorage',
        'SessionStorage',
        'Notify',
      ]
    },

    animations: 'all',

    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    ssr: {
      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},
      pwa: true,
      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,
      prodPort: config.PORT,
      middlewares: [
        'render'
      ]
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    cordova: {},
    capacitor: {
      hideSplashscreen: false,
      appName: config.APP_NAME,
      backButtonExit: ['/identity/sign-in', '/', '/module/overview/dashboard'],
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager', // 'packager' or 'builder'
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration
        appId: config.APP_ID,
      }
    },
    bex: {
      contentScripts: [
        'my-content-script'
      ],
      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    },
    bin: {
      linuxAndroidStudio: config.ANDROID_STUDIO_PATH
    }
  }
});
