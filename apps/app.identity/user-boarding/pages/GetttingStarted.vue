<script setup lang="ts">
import IconGoogle from '@trace/base/icons/brands/google.svg?url';
import IconMicrosoft from '@trace/base/icons/brands/microsoft.svg?url';
import IconApple from '@trace/base/icons/brands/apple.svg?url';

const socialLogins = [
    {
        icon: IconGoogle,
        title: 'Google',
    },
    {
        icon: IconMicrosoft,
        title: 'Microsoft',
    },
    {
        icon: IconApple,
        title: 'Apple',
    },
];

const inviteMessage = `Select appropriate option to proceed. If you are unaware of this invite or think you have received it by mistake, please report it to us immediately`;
</script>

<template>
    <div class="row justify-center">
        <q-card square flat class="q-mt-lg q-pa-md onboard-form">
            <div>
                <div class="text-h3">{{ $t('shared.gettingStarted') }}</div>
                <div class="text-grey q-px-sm">{{ inviteMessage }}</div>
            </div>
            <div class="q-mt-xl">

                <div class="row">
                    <q-btn no-caps size="lg" :to="{ name: 'user-boarding.create-account' }" outline color="primary"
                        class="full-width q-mt-lg border-radius-sm">
                        <q-icon name="bi-envelope-at" size="2rem" class="q-mr-lg" color="primary" />
                        <span>{{ 'Sign up with Email' }}</span>
                    </q-btn>
                </div>
                <div class="q-my-lg">
                    <div class="text-center">OR</div>
                    <q-separator color="app-background" class="q-mt-md" />
                </div>

                <div class="row q-gutter-x-sm justify-center no-wrap">
                    <q-btn v-for="(social, index) in socialLogins" :key="index" outline size="sm" color="accent" no-caps
                        no-wrap class="border-radius-xs q-py-md q-px-lg border-radius-sm">
                        <q-img no-native-menu no-spinner :src="social.icon" :alt="social.title" class="social-icons" />
                        <span class="text-body1">{{ social.title }}</span>
                    </q-btn>
                </div>


            </div>
        </q-card>
    </div>
</template>
