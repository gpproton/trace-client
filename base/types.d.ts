declare module '@mapbox/polyline'
declare module '@vue-js-cron/quasar'

declare module '#app' {
  interface NuxtApp {
    $permit(action: ActionState): boolean
    $permission(action: ActionState): boolean
  }
}
