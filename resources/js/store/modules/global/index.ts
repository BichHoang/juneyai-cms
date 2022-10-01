import { defineStore } from 'pinia';
import { APP_TITTLE, DEFAULT_LOCAL, DEFAULT_REDIRECT, WHITE_LIST } from '../../../config/constants';
import { Locations } from '../../../types/common';

export const globalStore = defineStore('global', {
    state: () => ({
        loading: false,
        error: '',
        local: DEFAULT_LOCAL,
        showSidebar: false,
        pageTitle: APP_TITTLE,
        redirect: DEFAULT_REDIRECT,
        whiteList: WHITE_LIST
    }),

    actions: {
        async actLoading(status: boolean) {
            this.loading = status;
        },

        actChangeLocal(local: keyof Locations) {
            this.local = local;
        },

        actToggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },

        actSetPageTitle(title: string) {
            this.pageTitle = title;
        },

        actChangeRedirect(redirect: string) {
            this.redirect = redirect;
        },

        actChangeWhiteList(whiteList: RegExp[]) {
            this.whiteList = whiteList;
        },

        actWriteErrorMsg(msg: string)
        {
            this.error = msg;
        }
    },
})
