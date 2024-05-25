<script lang="ts" setup>
import { useAppBreakpoints } from '@trace/base/composables/breakpoints';
import { ref, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';

const ContactDetailItem = defineAsyncComponent(() => import('../components/ContactDetailItem.vue'));
const ContactItem = defineAsyncComponent(() => import('../components/ContactItem.vue'));

defineOptions({ name: 'ContactOverview' });

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);

type ContactDetailItem = {
  icon: string;
  label: string;
  field: string;
  textColor: string;
  avatar?: string;
};

type ContactItem = {
  name: string;
  position: string;
  email: string;
  companyEmail: string;
  website: string;
  phone: string;
  secondaryPhone: string;
  address: string;
  avatar?: string;
};

const detailList: ContactDetailItem[] = [
  {
    icon: 'phone',
    label: 'Phone',
    field: 'phone',
    textColor: 'blue',
  },
  {
    icon: 'phone_iphone',
    label: 'Secondary Phone',
    field: 'secondaryPhone',
    textColor: 'orange',
  },
  {
    icon: 'mail',
    label: 'Personal Email',
    field: 'email',
    textColor: 'grey-8',
  },
  {
    icon: 'business_center',
    label: 'Company Email',
    field: 'companyEmail',
    textColor: 'grey-8',
  },
  {
    icon: 'location_on',
    label: 'Address',
    field: 'address',
    textColor: 'grey-8',
  },
  {
    icon: 'home_work',
    label: 'Website',
    field: 'website',
    textColor: 'grey-8',
  },
];

const contactsLlist: ContactItem[] = [
  {
    name: 'Brunhilde Panswick',
    position: 'Administrator',
    email: 'test.@drolx.com',
    companyEmail: 'test.@drolx.com',
    website: 'http://test1.dev/',
    phone: '175.718.4633 x878',
    secondaryPhone: '175.718.4633 x878',
    address: 'Calgary, Canada',
  },
  {
    name: 'Winfield Stapforth',
    position: 'Administrator',
    email: 'test2.@drolx.com',
    companyEmail: 'test.@drolx.com',
    website: 'http://test2.dev/',
    phone: '175.718.4633 x878',
    secondaryPhone: '175.718.4633 x878',
    address: 'Calgary, Canada',
  },
];

type Size = {
  width: string | number | any;
  height: string | number | any;
};
const search = ref('');
const size = ref<Size>({ width: '200px', height: '200px' });
const selectedContact = ref<ContactItem | any>({});
const onResize = (sizeDynamic: Size) => {
  size.value = sizeDynamic;
};

onMounted(() => {
  if (isDesktop) {
    selectedContact.value = contactsLlist[0];
  }
});
</script>

<template>
  <page-wrapper>
    <q-resize-observer @resize="onResize" />
    <div v-if="isDesktop" class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card class="no-shadow" bordered>
          <q-list
            class="q-pa-none full-height"
            :style="{ height: size.height - 28 + 'px !important' }"
          >
            <q-item-label class="text-center q-pa-sm">
              <q-input v-model="search" outlined>
                <template #append>
                  <q-icon color="primary" size="md" name="search" />
                </template>
              </q-input>
            </q-item-label>
            <q-item-label header class="text-center"
              >{{ contactsLlist.length }} Contacts</q-item-label
            >
            <span
              v-for="(contact, index) in contactsLlist"
              :key="index"
              @click="selectedContact = contact"
            >
              <contact-item
                :avatar="contact.avatar"
                :name="contact.name"
                :position="contact.position"
              ></contact-item>
            </span>
          </q-list>
        </q-card>
      </div>
      <div class="col-lg-8 q-pl-xs col-md-8 col-sm-12 col-xs-12">
        <q-card
          class="no-shadow"
          bordered
          :style="{ height: size['height'] - 24 + 'px !important' }"
        >
          <q-toolbar class="text-black">
            <q-btn round flat class="q-pa-sm">
              <q-avatar size="80px" color="secondary" text-color="white">
                <span v-if="selectedContact.avatar === undefined">XA</span>
                <img v-else :src="selectedContact.avatar" />
              </q-avatar>
            </q-btn>

            <q-item class="q-subtitle-1 q-pl-md">
              <q-item-section>
                <q-item-label lines="1">{{
                  selectedContact.name
                }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">{{
                    selectedContact.position
                  }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-space />

            <q-btn round flat icon="star_outline" color="yellow"> </q-btn>
            <q-btn round flat icon="edit" />
          </q-toolbar>
          <q-separator></q-separator>

          <div v-for="(detail, detail_index) in detailList" :key="detail_index">
            <contact-detail-item
              :icon="detail.icon"
              :text-color="detail.textColor"
              :value="selectedContact[detail['field']]"
              :label="detail.label"
            ></contact-detail-item>

            <q-separator
              v-if="detail_index != detailList.length - 1"
              inset="item"
            ></q-separator>
          </div>
        </q-card>
      </div>
    </div>

    <div v-else>
      <div v-if="Object.keys(selectedContact).length == 0">
        <q-list
          class="q-pa-none full-height"
          :style="{ height: size['height'] - 28 + 'px !important' }"
        >
          <q-item-label class="text-center q-pa-sm">
            <q-input v-model="search" dense rounded outlined>
              <template #append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-item-label>
          <q-item-label header class="text-center"
            >{{ contactsLlist.length }} Contacts</q-item-label
          >

          <span
            v-for="(contact, index) in contactsLlist"
            :key="index"
            @click="selectedContact = contact"
          >
            <contact-item
              :avatar="contact.avatar"
              :name="contact.name"
              :position="contact.position"
            ></contact-item>
          </span>
        </q-list>
      </div>

      <transition v-else appear enter-active-class="animated bounceInRight">
        <q-card
          class="no-border no-border"
          :style="{ height: size['height'] - 28 + 'px !important' }"
        >
          <q-toolbar class="text-black">
            <q-btn round flat class="q-pa-sm">
              <q-avatar size="80px">
                <img :src="selectedContact.avatar" />
              </q-avatar>
            </q-btn>

            <q-item class="q-subtitle-1 q-pl-md">
              <q-item-section>
                <q-item-label lines="1">{{
                  selectedContact.name
                }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">{{
                    selectedContact.position
                  }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-space />

            <q-btn round flat icon="star_outline" color="yellow"> </q-btn>
            <q-btn round flat icon="edit" />
            <q-btn
              round
              flat
              icon="keyboard_backspace"
              @click="selectedContact = {}"
            />
          </q-toolbar>
          <q-separator></q-separator>

          <div v-for="(detail, detail_index) in detailList" :key="detail_index">
            <contact-detail-item
              :icon="detail.icon"
              :text-color="detail.textColor"
              :value="selectedContact[detail['field']]"
              :label="detail.label"
            ></contact-detail-item>

            <q-separator
              v-if="detail_index != detailList.length - 1"
              inset="item"
            ></q-separator>
          </div>
        </q-card>
      </transition>
    </div>
  </page-wrapper>
</template>
