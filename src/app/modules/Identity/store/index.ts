import { defineStore } from 'pinia';

export const useIdentityState = defineStore(
  'identity.state',
  () => {
    return {};
  },
  {
    persist: true,
  }
);

export const useIdentityAuth = defineStore('identity.auth', () => {
  return {};
});

export const useIdentityToken = defineStore('identity.token', () => {
  return {};
});
