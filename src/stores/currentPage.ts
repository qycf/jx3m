import { defineStore } from "pinia";


export const useCurrentPageStore = defineStore('currentPage',{
    state: () => {
        return {
            currentPage: 1,
        }
    },
    actions: {
        setCurrentPage(page: number) {
            this.currentPage = page
        }
    },
    persist: {
        storage: sessionStorage,
    }
})