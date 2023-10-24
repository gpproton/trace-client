<script setup lang="ts">
import WebsiteAsset from '@/assets/images/maps.svg?url';

defineOptions({ name: 'GettingStarted' });

const tag = "The new transport app";
const details = 'A new way of looking at transportation and logistics';
const registerNote = 'Enter your email to start using trace';
</script>

<template>
    <q-page padding>
        <div class="row q-py-lg">
            <q-card square flat class="col q-px-xs q-pt-xl">
                <span class="bg-grey-6 text-white text-body2 q-py-sm q-px-md border-radius-sm">{{ tag }}</span>
                <div class="text-h2 text-grey-9 text-weight-bold q-mt-sm q-mb-xl">{{ details }}</div>
                <div class="q-gutter-y-sm q-px-xs">
                    <div class="text-primary">{{ registerNote }}</div>
                    <div class="row q-gutter-x-sm">
                        <q-input class="col" filled hide-bottom-space placeholder="your@email.com" />
                        <q-btn no-caps color="primary" class="border-radius-sm q-px-lg text-h6"
                            :label="$t('router.startNow')" :to="{ name: 'on-board' }" />
                    </div>
                </div>
            </q-card>
            <q-card square flat class="col-7 gt-sm">
                <q-img height="55vh" :src="WebsiteAsset" alt="Website image" no-native-menu no-spinner />
            </q-card>
        </div>
    </q-page>
</template>