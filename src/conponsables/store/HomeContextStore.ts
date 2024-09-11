import { defineStore } from 'pinia'
import { ref } from "vue";
import type { LayoutTypes } from "@/conponsables/api/LayoutTypes";

export const homeStore = defineStore('home', () => {
    const tabsList = ref<LayoutTypes.ArticleTypes[]>();
    return {
        tabsList
    };
})
