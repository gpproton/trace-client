<script>
import { defineComponent, defineAsyncComponent } from 'vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

// defineOptions({ name: 'ContactOverview' });

const detail_list = [
  {
    icon: 'phone',
    label: 'Phone',
    field: 'phone',
    text_color: 'blue',
  },
  {
    icon: 'phone_iphone',
    label: 'Secondary Phone',
    field: 'secondary_phone',
    text_color: 'orange',
  },
  {
    icon: 'mail',
    label: 'Personal Email',
    field: 'email',
    text_color: 'grey-8',
  },
  {
    icon: 'business_center',
    label: 'Company Email',
    field: 'company_email',
    text_color: 'grey-8',
  },
  {
    icon: 'location_on',
    label: 'Address',
    field: 'address',
    text_color: 'grey-8',
  },
  {
    icon: 'home_work',
    label: 'Website',
    field: 'website',
    text_color: 'grey-8',
  },
];

const contacts_list = [
  {
    name: 'Brunhilde Panswick',
    position: 'Administrator',
    avatar: 'https://cdn.drolx.com/img/avatar2.jpg',
    email: 'test.@drolx.com',
    company_email: 'test.@drolx.com',
    website: 'http://test1.dev/',
    phone: '175.718.4633 x878',
    secondary_phone: '175.718.4633 x878',
    address: 'Calgary, Canada',
  },
  {
    name: 'Winfield Stapforth',
    position: 'Administrator',
    avatar: 'https://cdn.drolx.com/img/avatar6.jpg',
    email: 'test2.@drolx.com',
    company_email: 'test.@drolx.com',
    website: 'http://test2.dev/',
    phone: '175.718.4633 x878',
    secondary_phone: '175.718.4633 x878',
    address: 'Calgary, Canada',
  },
];

export default defineComponent({
  name: 'Contact',
  components: {
    ContactDetailItem: defineAsyncComponent(
      () => import('../components/ContactDetailItem.vue'),
    ),
    ContactItem: defineAsyncComponent(
      () => import('../components/ContactItem.vue'),
    ),
  },
  setup() {
    const $q = useQuasar();
    const size = ref({ width: '200px', height: '200px' });

    return {
      tab: ref('all'),
      search: ref(''),
      size,
      contacts_list,
      selected_contact: ref({}),
      detail_list,

      onResize(size_dynamic) {
        size.value = size_dynamic;
      },
    };
  },
  mounted() {
    if (!this.$q.screen.lt.sm) {
      this.selected_contact = this.contacts_list[0];
    }
  },
});
</script>

<template>
  <page-wrapper>
    <q-resize-observer @resize="onResize" />
    <div v-if="!$q.screen.lt.sm" class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card class="no-shadow" bordered>
          <q-list
            class="q-pa-none full-height"
            :style="{ height: size['height'] - 28 + 'px !important' }"
          >
            <q-item-label class="text-center q-pa-sm">
              <q-input v-model="search" outlined>
                <template #append>
                  <q-icon color="primary" size="md" name="search" />
                </template>
              </q-input>
            </q-item-label>
            <q-item-label header class="text-center"
              >{{ contacts_list.length }} Contacts</q-item-label
            >
            <span
              v-for="(contact, index) in contacts_list"
              :key="index"
              @click="selected_contact = contact"
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
              <q-avatar size="80px">
                <img :src="selected_contact.avatar" />
              </q-avatar>
            </q-btn>

            <q-item class="q-subtitle-1 q-pl-md">
              <q-item-section>
                <q-item-label lines="1">{{
                  selected_contact.name
                }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">{{
                    selected_contact.position
                  }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-space />

            <q-btn round flat icon="star_outline" color="yellow"> </q-btn>
            <q-btn round flat icon="edit" />
          </q-toolbar>
          <q-separator></q-separator>

          <div
            v-for="(detail, detail_index) in detail_list"
            :key="detail_index"
          >
            <contact-detail-item
              :icon="detail.icon"
              :text_color="detail.text_color"
              :value="selected_contact[detail['field']]"
              :label="detail.label"
            ></contact-detail-item>

            <q-separator
              v-if="detail_index != detail_list.length - 1"
              inset="item"
            ></q-separator>
          </div>
        </q-card>
      </div>
    </div>

    <div v-else>
      <div v-if="Object.keys(selected_contact).length == 0">
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
            >{{ contacts_list.length }} Contacts</q-item-label
          >

          <span
            v-for="(contact, index) in contacts_list"
            :key="index"
            @click="selected_contact = contact"
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
                <img :src="selected_contact.avatar" />
              </q-avatar>
            </q-btn>

            <q-item class="q-subtitle-1 q-pl-md">
              <q-item-section>
                <q-item-label lines="1">{{
                  selected_contact.name
                }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">{{
                    selected_contact.position
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
              @click="selected_contact = {}"
            />
          </q-toolbar>
          <q-separator></q-separator>

          <div
            v-for="(detail, detail_index) in detail_list"
            :key="detail_index"
          >
            <contact-detail-item
              :icon="detail.icon"
              :text_color="detail.text_color"
              :value="selected_contact[detail['field']]"
              :label="detail.label"
            ></contact-detail-item>

            <q-separator
              v-if="detail_index != detail_list.length - 1"
              inset="item"
            ></q-separator>
          </div>
        </q-card>
      </transition>
    </div>
  </page-wrapper>
</template>
