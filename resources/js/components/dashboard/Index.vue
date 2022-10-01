<template>
    <Layouts>
        <div class="flex justify-center mt-10">
            This is dashboard page!
        </div>
    </Layouts>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Layouts from '../layouts/Index.vue';

export default defineComponent({
    name: 'dashboard',

    components: {
        Layouts,
    },
})
</script>
