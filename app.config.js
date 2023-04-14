/** Default configuration loader */
require('dotenv').config();

let env = process.env;
if (env.MODE === undefined) {
  require('dotenv').config({ path: './.env.sample' });
  env = process.env;
}

module.exports = {
  NODE_ENV: env.NODE_ENV,
  ANDROID_STUDIO_PATH: env.ANDROID_STUDIO_PATH || '/usr/local/android-studio/bin/studio.sh',
  API_SECRET: env.API_SECRET || 'secret',
  PORT: env.PORT || 4582,
  APP_VARIANT: env.APP_VARIANT,
  /* Backend Server urls */
  SERVER_API_ROOT: env.SERVER_API_ROOT || 'http://127.0.0.1:4560/',
  SERVER_API_STORAGE: env.SERVER_API_STORAGE || 'http://127.0.0.1:9000/',
  SERVER_API_ROUTING: env.SERVER_API_ROUTING || '',
  SERVER_API_GEOCODING: env.SERVER_API_GEOCODING || 'https://nominatim.openstreetmap.org/',
  /* API Paths */
  API_ROOT_PATH: env.API_ROOT_PATH || '/graphql/',
  API_STORAGE_PATH: env.API_STORAGE_PATH || '/service/storage/',
  API_ROUTING_PATH: env.API_ROUTING_PATH || '/service/routing/',
  API_GEOCODING_PATH: env.API_GEOCODING_PATH || '/service/geocoding/',
  /* App branding */
  APP_NAME: env.APP_NAME || 'Trace',
  APP_ID: env.APP_ID || 'ng.trace.vector',
  APP_DESCRIPTION: env.APP_DESCRIPTION || 'Trace',
  APP_THEME_COLOR: env.APP_THEME_COLOR || '#3949ab',
  APP_PAGE_TITLE: env.APP_PAGE_TITLE || 'Trace',

  /* API access tokens */
  GOOGLE_API_KEY: env.GOOGLE_API_KEY || 'secret',
  MAPBOX_ACCESS_TOKEN: env.MAPBOX_ACCESS_TOKEN || 'secret',

  /* Maps configurations */
  DEFAULT_MAP_LAYER: env.DEFAULT_MAP_LAYER || 'open.street',
  DEFAULT_MAP_CENTER: env.DEFAULT_MAP_CENTER,
  DEFAULT_MAP_BOUNDS: env.DEFAULT_MAP_BOUNDS,
  DEFAULT_MAP_ZOOM: env.DEFAULT_MAP_ZOOM || 6,
  DEFAULT_MAP_MIN_ZOOM: env.DEFAULT_MAP_MIN_ZOOM || 5,
  DEFAULT_MAP_MAX_ZOOM: env.DEFAULT_MAP_MAX_ZOOM || 21,
  DEFAULT_MAP_SELECT_ZOOM: env.DEFAULT_MAP_SELECT_ZOOM || 15,
};
