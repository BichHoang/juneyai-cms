<template>
    <div class="bg-white shadow border-b-2 px-2 py-3">
        <div class="grid grid-cols-12 gap-4 justify-center items-center">
            <div class="col-end-2">
                <button @click="toggleSidebar" class="md:hidden">
                    <svg v-if="showSidebar" viewBox="0 0 24 24" width="24" height="24" class="inline-block">
                        <path fill="currentColor"
                            d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z">
                        </path>
                    </svg>
                    <svg v-else viewBox="0 0 24 24" width="24" height="24" class="inline-block">
                        <path fill="currentColor"
                            d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-start-2 col-end-7" :class="{'hidden': showSidebar}">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search" required>
                    </div>
                </form>
            </div>
            <div class="col-end-13 col-span-4" :class="{'hidden': showSidebar}">
                <div class="flex flex-row-reverse px-4">
                    <div class="flex items-center">
                        <div class="relative">
                            <img class="w-8 h-8 rounded-full" src="/images/user_1.jpg" alt="">
                            <span
                                class="bottom-0 left-6 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                        <div class="px-2 text-sm">
                            <h3 class="font-bold">Hoàng Nấm Nấm</h3>
                            <div class="flex">
                                <h4 class="pr-2">Admin </h4>
                                <p @click="logout()" class="text-base-info hover:cursor-pointer">
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center px-3">
                        <div class="relative">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="w-6"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                                </path>
                            </svg>
                            <span
                                class="text-white bg-red-700 absolute rounded-full text-xs -mt-3 ml-3 py-0 px-1.5">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useStore from '../../store';

const store = useStore();

export default defineComponent({
    setup() {
        const showSidebar = computed(() => store.global.showSidebar);
        return {
            showSidebar,
        }
    },

    methods: {
        toggleSidebar() {
            store.global.actToggleSidebar();
        },
        logout() {
            store.auth.actLogout();
        }
    }
});
</script>
