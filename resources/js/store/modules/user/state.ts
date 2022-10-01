import { defineStore } from 'pinia';

export const useState = defineStore({
    id: 'user.state',
    state: () => {
        return {
            users: [],
        }
    },
})
