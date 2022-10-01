<template>
    <Layouts>
        <div class="flex justify-center mt-10">
            PageSetting
        </div>
    </Layouts>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layouts from '../layouts/Index.vue';

export default defineComponent({
    name: 'PageSetting',

    components: {
        Layouts,
    },
})
</script>
