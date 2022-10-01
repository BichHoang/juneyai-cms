<template>
    <div class="flex justify-center p-4 bg-white rounded-lg shadow">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://juneyai.com/"
                class="hover:underline">{{ $t('app_name') }}</a>. All Rights Reserved.
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Footer"
});
</script>
