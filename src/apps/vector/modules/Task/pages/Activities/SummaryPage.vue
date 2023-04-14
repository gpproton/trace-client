<script setup lang="ts"></script>

<template>
  <div class="q-pa-sm q-pl-md activity-timeline">
    <!-- Action buttons section -->
    <div class="row justify-between">
      <q-btn outline no-caps color="blue" class="self-start border-radius-sm">
        <div class="row items-center no-wrap q-px-sm">
          <q-icon left name="bi-plus" class="q-mr-xs" />
          <div class="text-center">{{ 'Event' }}</div>
        </div>
      </q-btn>
      <div class="self-end q-gutter-sm">
        <q-btn no-caps color="green" class="border-radius-sm">
          <div class="row items-center no-wrap q-px-sm">
            <q-icon left name="bi-check2-all" class="q-mr-xs" />
            <div class="text-center">{{ 'Complete' }}</div>
          </div>
        </q-btn>
        <q-btn no-caps color="accent" class="border-radius-sm">
          <div class="row items-center no-wrap q-px-sm">
            <q-icon left name="bi-ticket-perforated" class="q-mr-xs" />
            <div class="text-center">{{ 'Tickets' }}</div>
          </div>
        </q-btn>
      </div>
    </div>
    <div class="overflow-auto" style="max-height: calc(100vh - 235px)">
      <!-- Main information box -->
      <div
        class="q-ma-sm q-pa-sm border-radius-sm bordered-section-1"
        style="min-height: 48px"
      >
        <div class="row">
          <div class="col-12 col-md-8 q-pa-xs">
            <!-- Header state section -->
            <div class="row text-weight-regular">
              <span
                class="bg-green text-white border-radius-xs q-mx-sm q-py-xs q-px-md"
              >
                {{ 'Moving' }}</span
              >
              <span
                class="bg-secondary text-white border-radius-xs q-mx-sm q-py-xs q-px-md"
                >{{ 'Transit' }}</span
              >

              <div class="q-mx-sm q-pa-xs">
                <q-icon size="1.6em" name="bi-truck" color="primary"></q-icon>
                <span
                  class="text-primary text-weight-medium text-body2 q-ml-sm vertical-middle"
                  >{{ 'LND 100 XG' }}</span
                >
              </div>
              <div class="q-mx-sm q-pa-xs desktop-only">
                <q-icon
                  size="1.6em"
                  name="bi-person"
                  color="secondary"
                ></q-icon>
                <span
                  class="text-secondary text-body2 q-ml-sm vertical-middle"
                  >{{ 'Mohit Daga' }}</span
                >
              </div>
            </div>
            <!-- State content section -->
            <q-item class="q-ma-sm q-mt-md q-pa-none" v-ripple>
              <q-item-section>
                <q-item-label class="text-secondary" caption>{{
                  '2022-05-11 00:00'
                }}</q-item-label>
                <q-item-label class="text-h5 text-weight-medium text-primary">{{
                  'To Customer'
                }}</q-item-label>
                <q-item-label class="text-accent" caption>{{
                  'Multi Pro consumer products LTD (Kaduna)'
                }}</q-item-label>
              </q-item-section>
            </q-item>
            <div class="q-my-sm q-px-sm">
              <div class="q-mt-xl">
                <q-icon
                  size="2em"
                  name="bi-truck-flatbed"
                  color="accent"
                ></q-icon>
                <span
                  class="vertical-bottom text-accent q-ml-md q-py-xs q-px-md border-radius-xs"
                  style="border: 1px solid var(--q-secondary)"
                  >{{ 'C Jumbo' }}</span
                >
                <span class="vertical-bottom text-accent q-ml-sm">{{
                  '45 Tons'
                }}</span>
                <span
                  class="vertical-bottom text-accent text-weight-medium q-ml-sm"
                  >{{ 'FS 00XX' }}</span
                >
              </div>
            </div>
          </div>
          <!-- Driver details -->
          <div
            class="col-12 col-md-4 border-radius-sm bg-app-background q-pa-xs"
          >
            <q-item clickable v-ripple class="border-radius-sm q-px-xs">
              <q-item-section side>
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="56px"
                  class="border-radius-sm"
                >
                  ML
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-primary">
                <q-item-label class="text-weight-bold text-h5">{{
                  'Muhammed'
                }}</q-item-label>
                <q-item-label class="text-body1">{{ 'Lawal' }}</q-item-label>
              </q-item-section>
            </q-item>
            <div class="q-pa-sm column q-gutter-sm">
              <div>
                <q-icon
                  size="1.3em"
                  name="bi-collection"
                  color="primary"
                ></q-icon>
                <span class="text-accent q-ml-sm">{{
                  'Usaka Enterprise'
                }}</span>
              </div>
              <div>
                <q-icon
                  size="1.3em"
                  name="bi-telephone"
                  color="primary"
                ></q-icon>
                <span class="text-primary text-bold q-ml-sm">{{
                  '08083628XXX'
                }}</span>
              </div>
            </div>
            <div class="q-pa-sm">
              <q-btn
                outline
                no-caps
                color="accent"
                label="More"
                class="full-width border-radius-sm"
              ></q-btn>
            </div>
          </div>
        </div>
        <div class="text-body2">
          <q-separator class="q-ma-sm" />
          <div class="q-py-xs q-px-xs row justify-between aligns-center">
            <div class="q-px-sm">
              <q-icon size="1.5em" name="bi-speedometer2" color="red"></q-icon>
              <span class="text-weight-bold q-mx-xs text-primary">2</span>
              <span class="text-accent">{{ 'Overspeed' }}</span>
            </div>
            <div class="q-px-sm">
              <q-icon
                size="1.5em"
                name="bi-arrow-90deg-right"
                color="orange"
              ></q-icon>
              <span class="text-weight-bold q-mx-xs text-primary">0</span>
              <span class="text-accent">{{ 'Diverted' }}</span>
            </div>
            <div class="q-px-sm">
              <q-icon
                size="1.5em"
                name="bi-lightbulb-off"
                color="blue"
              ></q-icon>
              <span class="text-weight-bold q-mx-xs text-primary">7</span>
              <span class="text-accent">{{ 'No Rest' }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Timeline -->
      <q-timeline color="secondary">
        <q-timeline-entry
          title="Source"
          subtitle="2022-01-01 00:03"
          color="red"
        >
          <div class="timeline-content">
            {{ 'Lagos-Ibadan Expressway, Shagamu, Ogun, NG' }}
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Destination" subtitle="Pending" color="green">
          <div class="timeline-content">
            {{
              'Trans-Amadi Industrial Layour Road, Port-Harcourt, Rivers, NG'
            }}
          </div>
        </q-timeline-entry>
      </q-timeline>

      <div>
        <!-- Document header-->
        <div
          class="q-my-sm q-pa-sm border-radius-sm bordered-section-1 row justify-between"
          style="min-height: 48px"
        >
          <div class="text-h6 text-accent">{{ 'Documents' }}</div>
          <div>
            <q-btn
              outline
              no-caps
              color="accent"
              class="self-start border-radius-sm"
            >
              <div class="row items-center no-wrap q-px-sm">
                <q-icon left name="bi-plus" class="q-mr-xs" />
                <div class="text-center">{{ 'Document' }}</div>
              </div>
            </q-btn>
          </div>
        </div>
        <!-- Document content list-->
        <q-list :dense="$q.screen.lt.md">
          <q-item class="border-radius-sm" clickable>
            <q-item-section class="column">
              <q-item-label class="text-body2 text-weight-bold text-primary">
                {{ '#LM-1132445-XXXXX' }}
              </q-item-label>
              <q-item-label class="text-accent" caption>{{
                'Description...'
              }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body2">
                <div
                  class="text-white bg-primary border-radius-xs text-center q-pa-xs"
                  style="width: 120px"
                >
                  {{ 'Receipt' }}
                </div>
              </q-item-label>
              <q-item-label class="text-accent" caption>
                {{ '2022-05-11 00:00' }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="q-gutter-sm">
                <q-btn
                  size="md"
                  outline
                  color="primary"
                  icon="bi-eye"
                  class="border-radius-sm"
                ></q-btn>
                <q-btn
                  size="md"
                  color="blue"
                  icon="bi-download"
                  class="border-radius-sm"
                ></q-btn>
              </div>
            </q-item-section>
          </q-item>
          <q-separator color="app-background" class="q-mx-lg"></q-separator>
        </q-list>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.activity-timeline .q-timeline__title {
  color: var(--q-primary);
  margin-bottom: 0.2rem;
}

.activity-timeline .q-timeline__subtitle {
  color: var(--q-accent);
  margin: 0;
}
.activity-timeline .timeline-content {
  color: var(--q-accent);
}
</style>
