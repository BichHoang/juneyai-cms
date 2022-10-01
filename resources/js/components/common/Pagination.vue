<template>
    <div class="flex justify-center m-5">
        <ul class="pagination flex font-semibold">
            <li>
                <button class="border px-5 py-2" :class="{'font-normal': currentPage == 1}" type="button" @click="onClickFirstPage" :disabled="isInFirstPage" aria-label="Go to first page">
                    First
                </button>
            </li>
            <li>
                <button class="border-t border-b border-r px-5 py-2" type="button" @click="onClickPreviousPage" :disabled="isInFirstPage"
                    :class="{'font-normal': currentPage == 1}" aria-label="Go to previous page">
                    Previous
                </button>
            </li>
            <li v-for="page in pages" :key="page.name" :class="{'bg-base-primary text-white': currentPage == page.name }">
                <button class="border-r border-t border-b px-5 py-2" type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
                    :class="{ active: isPageActive(page.name) }" :aria-label="`Go to page number ${page.name}`">
                    {{ page.name }}
                </button>
            </li>
            <li>
                <button class="border-t border-b px-5 py-2" :class="{'font-normal': currentPage == totalPages}"
                    type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Go to next page">
                    Next
                </button>
            </li>
            <li>
                <button class="border px-5 py-2" :class="{'font-normal': currentPage == totalPages}"
                    type="button" @click="onClickLastPage" :disabled="isInLastPage" aria-label="Go to last page">
                    Last
                </button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'pagination',
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
    },
    computed: {
        startPage() {
            if (this.currentPage === 1) {
                return 1;
            }
            if (this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons + 1;
            }
            return this.currentPage - 1;
        },

        endPage() {
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        },

        pages() {
            const range = [];

            for (let i = this.startPage; i <= this.endPage; i += 1) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }

            return range;
        },

        isInFirstPage() {
            return this.currentPage === 1;
        },

        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },

    methods: {
        onClickFirstPage() {
            this.$emit('pageChanged', 1);
        },

        onClickPreviousPage() {
            this.$emit('pageChanged', this.currentPage - 1);
        },

        onClickPage(page: number) {
            this.$emit('pageChanged', page);
        },

        onClickNextPage() {
            this.$emit('pageChanged', this.currentPage + 1);
        },

        onClickLastPage() {
            this.$emit('pageChanged', this.totalPages);
        },

        isPageActive(page: number) {
            return this.currentPage === page;
        },
    }
})
</script>