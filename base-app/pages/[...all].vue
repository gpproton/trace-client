<script setup lang="ts">
import NotFound from '@/icons/not-found.svg?url';
definePageMeta({ name: 'error' });
const router = useRouter();
</script>

<template>
  <page-wrapper
    name="error"
    layout="default"
    :options="{ title: 'Content-00' }"
  >
    <div class="column items-center justify-center q-mt-lg">
      <q-img
        no-native-menu
        no-spinner
        :src="NotFound"
        class="q-my-xs page-visual q-mb-lg"
        alt="Under Construction"
      />
      <div class="text-center q-mt-lg">
        <transition
          appear
          enter-active-class="animated backInUp"
          leave-active-class="animated backInDown"
        >
          <q-btn
            color="primary"
            class="q-mt-sm border-radius-sm"
            size="lg"
            no-caps
            outline
            style="width: 200px"
            @click="router.back"
          >
            Go Back
          </q-btn>
        </transition>
      </div>
    </div>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import '../styles/error.scss';
</style>
