<template>
    <div class="relative flex min-h-screen">
        <Sidebar />
        <div class="flex-1">
            <Navbar />
            <div>
                <bread-crumb></bread-crumb>
                <slot></slot>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useStore from '../../store';
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import BreadCrumb from './BreadCrumb.vue';
import Footer from './Footer.vue';

const store = useStore();

export default defineComponent({
    components: {
        Sidebar,
        Navbar,
        BreadCrumb,
        Footer,
    },

    setup() {
        const showSidebar = computed(() => store.global.showSidebar);
        return {
            showSidebar,
        }
    },

    methods: {
        toggleSidebar() {
            store.global.actToggleSidebar();
        }
    }
});
</script>
