<template>
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full">
        <ol class="list-reset flex">
            <router-link v-for="(route, index) in routes" :key="index" :to="{name: route.name}"
                class="flex">
                <span class="font-semibold" :class="{'text-base-info': index < routes.length - 1}">
                    {{ route.name }}
                </span>
                <p class="px-1" :class="{'hidden': index == routes.length - 1}">/</p>
            </router-link>
        </ol>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();
        const routes = route.matched;

        return {
            route,
            routes,
        }
    },

    computed: {
        routeName() {
            console.log(this.route)
        }
    }
})
</script>
