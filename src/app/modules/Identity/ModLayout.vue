<script setup lang="ts">
import AppLogo from '@/assets/vectors/logo.svg';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="non-selectable hide-scrollbar bg-app-white">
      <q-page class="identity-container">
        <div class="container-left">
          <section class="text-primary-inverted">
            <app-logo class="app-logo" />
          </section>
        </div>
        <div class="container-right bg-app-white">
          <section class="extra">
            <!-- <router-view v-slot="{ Component, route }">
              <transition
                appear
                :enter-active-class="
                  $q.platform.is.desktop
                    ? 'animated fadeInUpBig'
                    : 'animated fadeInRightBig'
                "
                :leave-active-class="
                  $q.platform.is.desktop
                    ? 'animated fadeOutUpBig'
                    : 'fadeOutRightBig '
                "
              >
                <component :is="Component" :key="route.path" />
              </transition>
            </router-view> -->
            <router-view></router-view>
          </section>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.identity-container {
  .app-logo {
    width: 96px;
    height: 96px;
    fill: white;
    border-radius: $border-radius-sm;
  }

  display: flex;
  flex-direction: column;

  .container-left {
    height: 30vh;
  }

  .container-left,
  .container-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-left {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
      /*url('/assets/images/identity/login-bg.jpg')*/ rgba(57, 73, 171, 1);
    background-size: cover;
  }

  .copy {
    margin: 0;
    padding: 0;
  }
}

@media screen and (min-width: $breakpoint-md-min) {
  .identity-container {
    flex-direction: row;
    height: 100vh;
    .container-left,
    .container-right {
      display: flex;
      width: 50%;
      height: auto;
    }
  }
}

@media screen and (max-width: $breakpoint-md-min) {
  .identity-container {
    .container-left {
      border-radius: 0 0 $border-radius-xl $border-radius-xl;
    }
  }
}

@media screen and (max-width: $breakpoint-sm-min) {
  .app-logo {
    border-radius: $border-radius-lg;
  }
  .extra {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
