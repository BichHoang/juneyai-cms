<template>
    <Layouts>
        <router-view></router-view>
    </Layouts>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layouts from '../layouts/Index.vue';

export default defineComponent({
    name: 'dashboard',

    components: {
        Layouts,
    },
})
</script>
