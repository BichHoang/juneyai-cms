import { defineStore } from 'pinia';
import router from '../../../router';
import { getUsers } from '../../../api/v1/users';

export const useActions = defineStore('user.actions', () => {

    const actGetUsers = async () => {
        getUsers().then(res => {
            const response = res.data;
            console.log(response);
        }).catch(err => {
            router.push({ path: '/404' });
        })
    }

    return {
        actGetUsers,
    }
})
