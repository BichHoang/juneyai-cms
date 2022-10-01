import { defineStore } from 'pinia';
import { ILogin } from './types';
import { removeToken, setToken } from '../../../utils/auth';
import router from '../../../router';
import { login, userInfo, logout } from '../../../api/v1/auth';
import { globalStore } from '../global';
import { useState } from './state';

export const useActions = defineStore('auth.actions', () => {
    const global = globalStore();
    const state = useState();

    const actLogin = async (payload: ILogin) => {
        await login(payload).then(res => {
            const response = res.data;
            setToken(response.data.access_token);
            router.push({ path: '/dashboard' });
        }).catch(err => {
            const responseErr = err.response.data;
            global.error = responseErr.errors.auth[0]
            router.push({ path: '/login' });
        });
        global.actLoading(false);
    }

    const actLogout = () => {
        logout().then(res => {
            removeToken();
            router.push({ path: '/login' });
        }).catch(err => {
            router.push({ path: '/404' });
        })
    }

    const actFedLogout = () => {
        state.currentUser = {};
        setToken('');
        removeToken();
    }

    const actGetCurrentUserInfo = async () => {
        await userInfo().then(res => {
            const response = res.data;
            const state = useState();
            state.currentUser = response.data;
            state.roles = ['1', '2'];
        }).catch(err => {
            router.push({ path: '/404' });
        })
    }

    return {
        actLogin,
        actLogout,
        actFedLogout,
        actGetCurrentUserInfo,
    }
})
