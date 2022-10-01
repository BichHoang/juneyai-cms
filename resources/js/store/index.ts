import { useAuthStore } from './modules/auth';
import { globalStore } from './modules/global';
import { useUserStore } from './modules/user';

const useStore = () => ({
    auth: useAuthStore(),
    global: globalStore(),
    user: useUserStore(),
});

export default useStore;
