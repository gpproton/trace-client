import { ref } from 'vue';
import { defineStore } from 'pinia';
import { SessionStorage } from 'quasar';
import { Permission, User } from '@trace/model';
import { useTagViewStore } from './tag-view';

export const useUserAccountStore = defineStore(
  'userAccount',
  () => {
    const accessToken = ref<string | null>(null)
    const permissions = ref<Permission[]>([
      {
        module: 'default',
        feature: 'default.0',
        actions: { create: true, read: true, update: false, delete: true }
      }
    ]);
    const user = ref<User | null>({
      id: 'ac707e42-74c4-4107-beba-4897107bf9f7',
      tenantId: '60dccc53-d969-4bb5-a08b-dcf14feab87c',
      active: true,
      confirmed: true,
      exipry: new Date(),
      username: '',
      email: 'john.doe@drolx.com',
      phone: '+23480123456789',
      roleId: '821f68cd-4b26-4682-ad96-123ac0d30504',
      roleName: 'Default',
      firstName: 'John',
      lastName: 'Doe'
    });

    const getUserName = computed(() => user.value);
    const getUserPermmisions = computed(() => permissions.value);
    const getAccessToken = computed(() => accessToken.value);
    const getFirstCharacterOfUserName = computed(() => user.value!.username ? user.value!.username.charAt(0).toUpperCase() : "X");

    const setUserInfo = (value: User) => user.value = value;
    const setAccessToken = (value: string) => accessToken.value = value;
    const setUserPermmisions = (values: Permission[]) => {
      const account = user.value;
      permissions.value = values;
      user.value = account;
    }

    const signIn = () => { };

    const signout = () => {
      user.value = null;
      accessToken.value = null;
      permissions.value = []
      const tagViewStore = useTagViewStore();
      tagViewStore.removeAllTagView();
      SessionStorage.clear();

      const router = useRouter();
      router.push({ name: "auth.sign-in" });
    }

    return {
      user,
      getUserName,
      getUserPermmisions,
      getAccessToken,
      getFirstCharacterOfUserName,
      setAccessToken,
      setUserInfo,
      setUserPermmisions,
      signIn,
      signout
    };
  },
  {
    persist: {
      storage: persistedState.sessionStorage
    }
  }
);
