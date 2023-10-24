<script setup lang="ts">
defineOptions({ name: 'GetttingStarted' });

const inviteMessage = `Select appropriate option to proceed. If you are unaware of this invite or think you have received it by mistake, please report it to us immediately`;
</script>

<template>
    <div class="row justify-center">
        <q-card square flat class="q-mt-xl q-pa-md welcome-section">
            <div>
                <div class="text-h3">{{ $t('shared.gettingStarted') }}</div>
                <div class="text-grey">{{ inviteMessage }}</div>
            </div>
        </q-card>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/on-board.scss';
</style>